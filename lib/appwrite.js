import { Client, Account, ID } from 'react-native-appwrite';

const client = new Client();

client
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT) // Your Appwrite Endpoint
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID) // Your project ID
  .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM); // Your application ID or bundle ID

const account = new Account(client);
// Export other services like Databases, Storage, etc., as needed
export { client, account, ID };
