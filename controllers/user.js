var User = require('../models/user');

exports.postUsers = function (req, res) {
    var user = new User({
        username: req.body.username,
        email: req.body.email,
        name: req.body.name,
        phone_number: req.body.phone_number,
        created_at: new Date(),
        updated_at: ""
    });
}

//change regexp to search by username keyword
exports.getbyUsename = function(req,res) {
  var regexp = /007/i;
  User.find({username : regexp}, function (err,response) {
    if(err) {
      return res.json(req,res,err);
    }
    res.json(response);
  })

}
exports.getUsers=function(req,res) {
  var id = req.params.id;
    User.findOne({_id : id }, function(err, response) {
        if(err) {
            return res.json(req, res, err);
        }
        res.json(response);
})

}
exports.updateUsers=function(req,res){
    var id = req.params.id;
    User.findOne({_id: id}, function(err, user){
        if(err){
            res.json(err);
        }
        var username = req.body.username;
        user.username = username;
        user.updated_at = new Date();
        user.save(function(err, response){
            if(err){
                res.json(err);
            }
            res.json(response);
        })
    })
}
exports.deleteUsers=function(req,res){
    var id = req.params.id;
    User.findOne({_id: id}, function(err, user){
        if(err){
            res.json(err);
        }
        if(user){
           User.remove({_id: id}, function(err){
                if(err){
                    res.json(err);
                }
                res.json("success");
            })
       }
       else{
            res.json("User doesnt exist");
       }
    })
}
