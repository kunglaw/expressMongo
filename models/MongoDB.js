const mongo = require("mongodb").MongoClient
const mongoConfig = require("../config/mongodb")
const database = mongoConfig.database[0].name
const url = mongoConfig.url

class MongoDB {

    static findAll(collection,attributes = {},callback) {
        mongo.connect(url,{useNewUrlParser:true},function(err,client){
            if(err) {
                callback(err,null)
            } else {
                const db = client.db(database)
                db.collection(collection).find(attributes).toArray(function(err, data){
                    //console.log( data )
                    callback(null,data)
                })
               
            }
        })
    }

    static findOne(collection, attributes, callback ) {
        mongo.connect(url,{useNewUrlParser:true},function(err,client){
            if(err) {
                callback(err,null)
            } else {
                const db = client.db(database)
                db.collection(collection).findOne(attributes)
                .then(data => {
                    console.log( data )
                    callback(null, data)
                }).catch(err => {
                    callback(err, null)
                })
                //console.log( data )
                //callback(err,data)
            }
        })
    }

    static create(collection,newData,callback) {

    }

    static update(collection,updatedData,attributes,callback) {

    }

    static delete(collection,attributes,callback) {

    }
}

module.exports = MongoDB