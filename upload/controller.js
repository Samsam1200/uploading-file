const USER = require('./model')

module.exports = {
    addUser:async(req,res)=>{
    
             const nom = req.body.nom  ;
  
        const image =  req.file.originalname;
       try{
        const _user =  new USER({
             nom,image
        })
         await  _user.save();
        res.json(_user)
       } catch(err){
           console.log(err)
       }
  

     }  
}