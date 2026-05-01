import { MongoClient } from "mongodb";
import { getEnv } from "./env";

let client: MongoClient | null = null;

export async function connectMongo() {
  if (client) return client;
  const env = getEnv();
  client = new MongoClient(env.MONGO_URL);
  await client.connect();
  return client;
}

export function getDb() {
  if (!client) throw new Error("MongoDB client is not connected");
  return client.db("schoolsheba");
}
