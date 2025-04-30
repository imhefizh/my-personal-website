const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
// import { MongoClient, ServerApiVersion } from 'mongodb';
// import { config } from 'dotenv';

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL_CLUSTER}/?retryWrites=true&w=majority&appName=myWeb`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export async function insertOne(headline, content) {
    try {
        await client.connect();

        const dbInstance = client.db("content");
        const collection = dbInstance.collection('articles');

        return await collection.insertOne({ headline: headline, content: content })
    } catch (err) {
        console.log(err)
    } finally {
        await client.close();
    }
}

