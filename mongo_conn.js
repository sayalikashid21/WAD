const {MongoClient}=require('mongodb'); // imports the MongoClient class from the 'mongodb' package. In Node.js, require() is used to import modules, and here it's importing the MongoDB driver.
const url ='mongodb://localhost:27017'; //This line defines the URL of the MongoDB server to which the client will connect. In this case, it's connecting to a MongoDB server running on the localhost at the default port 27017
const client = new MongoClient(url);    //This line creates a new instance of the MongoClient class, passing the url as a parameter. This client will be used to interact with the MongoDB server.

async function dbConnect()
{
    let result = await client.connect();
    let db = result.db('WAD');
    return db.collection('student');
}

module.exports=dbConnect;