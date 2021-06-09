module.exports.check= (content_type="json")=>{
    if(content_type=="json"){
        return  function(req,res,next) {
            if (!req.is('application/json')){
                res.status(400).json({"response":"the content type not correct!!!"});
            }else{
                next();
            }
        };
    }
}