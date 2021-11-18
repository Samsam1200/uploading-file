const multer = require('multer')


const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'../front/public/image')  //dossier eli bech yetsabou fih etsawer (wel path yetsab fel base de données)
    }, 
    filename: (req, file, cb) => {
      const fileExt = file.originalname.split(".").pop();
      const filename = `${ new Date().getTime()}.${fileExt}`;
      cb(null, filename);

    },
 
})
const store = multer({storage:storage}) 
module.exports = store
