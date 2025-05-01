import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1");

await client.connect();

const db = client.db('mongo_nodejs_db');
const userCollection = db.collection('users');

userCollection.insertOne({name: "Puskar Simkhada", age: 31});