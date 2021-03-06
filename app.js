var exporess       = require("express"),
    app            = exporess(),
    bodyParser     = require("body-parser"),
    mongoose       = require("mongoose"),
    flash          = require("connect-flash"),
    passport       =require("passport"),
    LocalStrategy  = require("passport-local"),
    methodOverride = require("method-override"),
    Campground     = require("./models/campground"),
    Comment        = require("./models/comment"),
    User           = require("./models/user"),
    seedDB         = require("./seeds");
    
var commentsRoutes = require("./routes/comments"),
    campgroundRoutes =require("./routes/campgrounds"),
    indexRoutes     =require("./routes/index");

mongoose.connect("mongodb://alex:1988@ds035613.mlab.com:35613/yelpcamp");
 mongodb://alex:1988@ds035613.mlab.com:35613/yelpcamp
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(exporess.static(__dirname+"/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB();

//passport cong

app.use(require("express-session")({
    secret:"alex is the best",
    resave:false,
    saveUninitialized:false
}))

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function (req ,res ,next){
   res.locals.currentUser = req.user; 
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.use("/",indexRoutes);
app.use("/campgrounds/:id/comments",commentsRoutes);
app.use("/campgrounds",campgroundRoutes);



app.listen(process.env.PORT,process.env.IP,function(){
    console.log("yelpcamp server has started") ;
});




