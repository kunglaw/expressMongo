const MongoDB = require("./MongoDB")

class Post {

    static findAll(attributes = {},callback) {

        MongoDB.findAll("posts",{},function(err, data){
            if(err) {
                callback(err, null)
            } else {
                callback(null, data)
            }
        })
        
    }

    static findOne(attributes = {}, callback) {

        MongoDB.findOne("posts",{},function(err, data){
            if(err) {
                callback(err, null)
            } else {
                callback(null, data)
            }
        })

    }

    static create() {

    }

    static update() {

    }
}

module.exports = Post