var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");

//INDEX - show all campgrounds

router.get("/",function(req , res){
    Campground.find({},function(err,campgrounds){
       if(err){
           console.log(err)
       }else{
            res.render("campgrounds/index",{campgrounds:campgrounds });
       }
    });
      
});

//CREATE - add new campground to DB
router.post("/",middleware.isLoggedIn,function(req , res){
    var name =req.body.name;
    var img = req.body.image;
    var description = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground ={name:name ,image:img ,description:description ,author:author};
    Campground.create(newCampground,function(err,newlyCreated){
       if(err){
          console.log(err) 
       } else{
           console.log(newCampground);
           res.redirect("/campgrounds");
       }
    });
});

//NEW - show form to create new campground
router.get("/new",middleware.isLoggedIn,function (req ,res){
   res.render("campgrounds/new") ;
});

// SHOW - shows more info about one campground

router.get("/:id",function(req , res){
    var id = req.params.id;
    Campground.findById(id).populate("comments").exec(function(err ,foundCampground){
        if(err){
            console.log(err);
        }else {
            res.render("campgrounds/show",{campground:foundCampground});
        }
    });
});

// Edit Campground route
router.get("/:id/edit" ,middleware.checkCampgroundOwnership,function (req ,res){
    Campground.findById(req.params.id,function(err,foundCampground){
        if(err){
            res.redirect("campgrounds");
        }else{
            res.render("campgrounds/edit",{campground:foundCampground});
        }
    });
});

// update campground route

router.put("/:id" ,middleware.checkCampgroundOwnership,function (req,res){
    Campground.findByIdAndUpdate(req.params.id ,req.body.campground ,function(err ,updatedCampground){
        if(err){
            res.redirect("/campgrounds");
        }else{
            res.redirect("/campgrounds/" + req.params.id);
        }
    })
    
});

//destroy campground

router.delete("/:id",middleware.checkCampgroundOwnership,function(req ,res){
    Campground.findByIdAndRemove(req.params.id,function(err){
       if(err){
           res.redirect("/campgrounds");
       } else{
           res.redirect("/campgrounds")
       }
    });
})


module.exports = router;