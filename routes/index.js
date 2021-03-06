var express = require("express");
var router = express.Router();
var User = require("../models/user");
var passport = require("passport");


//register form route 

router.get("/register",function(req ,res){
  res.render("register")  
});

// handle the sign up logic

router.post("/register" , function(req ,res){
    var newUser =new User({username : req.body.username});
    User.register(newUser,req.body.password ,function(err,user){
        if(err){
            console.log(err);
            req.flash("error",err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req,res,function(){
           req.flash("success","Welcome to YelpCamp "+req.body.username);
           res.redirect("/campgrounds"); 
        });
    });
});

//handling login logic 

router.get("/login",function(req ,res){
    res.render("login");
});

//
router.post("/login",passport.authenticate("local",{
    successRedirect:"/campgrounds",
    failureRedirect:"/login"
}) , function(req ,res){
    
});

//logout route

router.get("/logout" ,function(req, res) {
   req.logout();
   req.flash("success","Logged you out!");
   res.redirect("/campgrounds");
});


//root route
router.get("/",function(req , res){
    res.render("landing");
});

module.exports = router;