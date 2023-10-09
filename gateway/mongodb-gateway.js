const { MongoClient } = require('mongodb');
let collection;

const connectionDB = async () => {
    const url = 'mongodb+srv://root:root@cluster0.7viu1ur.mongodb.net/';
    const client = new MongoClient(url);
    await client.connect();
    const dbName = 'absen';
    const collectionName = 'users';
    const database = client.db(dbName);
    collection = database.collection(collectionName)
}

const savingData = async (name, age) => {
    try {
        let id = Math.ceil(Math.random() * 1000);
        await insertOne(collection, {id,name,age})
    } catch(err) {
        console.log("Terjadi error di savingData:", err)
    }
};

const showAllData = async () => {
    let data = [];
    try {
        data = await findMany(collection)
    } catch(err) {
        console.log("Terjadi error di showAllData:", err)
    } finally {
        return data
    }
};

module.exports = {savingData, showAllData, connectionDB};