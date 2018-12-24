const Post = require("../models/Post")

class PostController {

    static findAll(req, res){
        Post.findAll({},function(err,data){
            if(err) {
                res.send( err)
            } else {
                res.send( data )
            }
        })
        
    }   

    static findOne(req, res) {
        Post.findOne({ author:"kunglaw" }, function(err, data ){
            if(err) {
                res.send(err)
            } else {
                res.send(data)
            }
        })
    }

    static createForm(req, res) {
        
    }

    static create(req, res) {

    }

    static updateForm(req, res) {

    }



}

module.exports = PostController