var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment    = require("./models/comment");

var data = [
        {
            name :"Cloud's Rest 1",
            image : "http://www.get-into-medicalschool.com/wp-content/uploads/2011/05/drmarkweinberger.jpg",
            description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie cursus ornare. Vestibulum sit amet sem quam. Fusce non suscipit nulla, sed suscipit diam. Nam vel magna tincidunt, gravida nunc ut, dapibus orci. Donec justo nisl, vulputate vitae nulla et, fermentum bibendum nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean maximus sapien odio, a ullamcorper dolor molestie sed. Maecenas mattis faucibus pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce aliquet mattis libero, sed blandit tellus consectetur vel. Aenean pharetra quam eu pellentesque auctor. Aliquam pellentesque rhoncus metus ut vulputate. Maecenas tempor leo quam, ac elementum orci tincidunt at."
        },
        {
            name :"Cloud's Rest 2",
            image : "http://a.abcnews.go.com/images/Travel/gty_camping_kb_140711_16x9_992.jpg",
            description :"some description 2 Alex creek"
        },
        {
            name :"Cloud's Rest 3",
            image : "http://www.autostraddle.com/wp-content/uploads/2013/10/camping-between-france-and-italy.jpg",
            description :"some description 3 Alex creek"
        }
    ];
    
function seedDB(){
   //Remove all campgrounds
  Campground.remove({}, function(err){
//         if(err){
//             console.log(err);
//         }
//         console.log("removed campgrounds!");
//          //add a few campgrounds
//         data.forEach(function(seed){
//             Campground.create(seed, function(err, campground){
//                 if(err){
//                     console.log(err)
//                 } else {
//                     console.log("added a campground");
//                     //create a comment
//                     Comment.create(
//                         {
//                             text: "This place is great, but I wish there was internet",
//                             author: "Homer"
//                         }, function(err, comment){
//                             if(err){
//                                 console.log(err);
//                             } else {
//                                 campground.comments.push(comment);
//                                 campground.save();
//                                 console.log("Created new comment");
//                             }
//                         });
//                 }
//             });
//         });
    }); 

    
}

module.exports = seedDB;

