const express = require('express');
const dbConnect = require('./mongo_conn');
// const mongodb = require('mongodb').MongoClient;

let mongoObjectId = require('mongodb').ObjectId;
var app = express();
app.use(express.json());

app.get('/', async (req, resp) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    resp.send(data);
});


app.post('/', async (req, resp) => {
    const data = await dbConnect();
    let result = await data.insertOne(req.body);
    resp.send(result);
});

app.put('/', async (req, resp) => {
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:req.body.name},{$set:req.body}
    )

    resp.send({result:'update'});
});


app.delete('/:id', async (req, resp) => {
    console.log(req.params.id)
    const data = await dbConnect();
    const result=await data.deleteOne({_id:new mongoObjectId(req.params.id)})
    resp.send(result);
});

app.listen(8080);