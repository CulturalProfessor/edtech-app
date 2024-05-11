import {
  Client,
  Account,
  Databases,
  ID,
  Avatars,
  Query,
} from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platoform: "com.vina.aora",
  projectId: "6637a71a003d96481f33",
  databaseId: "6637b034003ca75503a9",
  userCollectionId: "6637b05a00048bdb7383",
  videoCollectionId: "6637b07e001d611b65f9",
  storageId: "6637b248000120653888",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platoform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async ({ email, username, password }) => {
  try {
    if (!email || !username || !password) {
      throw new Error("Please fill all fields");
    }

    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) {
      throw new Error("Account creation failed");
    }

    const avatarURL = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        username,
        email,
        avatar: avatarURL,
        accountId: newAccount.$id,
      }
    );

    if (!newUser) {
      throw new Error("User creation failed");
    }

    return newUser;
  } catch (e) {
    throw new Error(e);
  }
};

export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();

    if (!currentAccount) {
      throw new Error("User not found");
    }

    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) {
      throw new Error("User not found");
    }

    return currentUser.documents[0];
  } catch (e) {
    throw new Error(e);
  }
};

export const getAllPosts = async () => {
  try {
    const posts = await databases.listDocuments(
      config.databaseId,
      config.videoCollectionId
    );

    if (!posts) {
      throw new Error("No posts found");
    }

    return posts.documents;
  } catch (e) {
    throw new Error(e);
  }
};

export async function getLatestPosts() {
  try {
    const posts = await databases.listDocuments(
      config.databaseId,
      config.videoCollectionId,
      [Query.orderDesc("$createdAt"), Query.limit(7)]
    );

    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
}