// app_server/controllers/locations.js

const homelist = (req, res) => {
   res.render('home', { title: 'Home' });
};

const Physics = (req, res) => {
   res.render('Physics', { title: 'Physics' }); 
};

const addReview = (req, res) => {
   res.render('addReview', { title: 'addReview' });
};

const signin = (req, res) => {
   res.render('signin', { title: 'signin' });
};
const register=(req,res)=>{
   res.render('register',{title:'register'});
}

const BYJUS = (req, res) => {
   res.render('BYJUS', { title: 'BYJUS' });
};


const Vedantu = (req, res) => {
   res.render('Vedantu', { title: 'Vedantu'}); 
};


// Export the methods
module.exports = {
   homelist,
   Physics,
   Vedantu,  
   addReview,
   signin,
   register,
   BYJUS
};
