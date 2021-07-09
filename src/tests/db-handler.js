// This is a db handler for the in-memory
// database we'll be using to test our routes.


const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server-global')

const mongod = MongoMemoryServer()

/**
 * connect to the in-memory database
 */
exports.connect = async () => {
    const uri = await mongod.getConnectionString()

    const mongooseOpts = {
        useNewUrlParser: true,
        autoReconnect: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000
    }

    await mongoose.connect(uri, mongooseOpts)
}

/**
 * Drop database, close the connection and stop mongod
 */
exports.closeDatabase = async () => {
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
    await mongod.stop()
}

/**
 * Remove all the data for all db collections
 */
exports.clearDatabase = async () => {
    const collections = mongoose.connection.collections

    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany()
    }
}