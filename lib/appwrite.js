import { Client, Account, ID,Databases,Query } from 'react-native-appwrite';

const client = new Client();

client
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT) // Your Appwrite Endpoint
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID) // Your project ID
  .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM); // Your application ID or bundle ID

const account = new Account(client);
const databases = new Databases(client);

export const DATABASE_ID = 'quiz_app';
export const SCORES_COLLECTION_ID = 'test_scores';
// Export other services like Databases, Storage, etc., as needed
export { client, account, ID,databases,Query };
