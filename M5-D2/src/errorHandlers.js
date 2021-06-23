export const notFound = (err,req,res,next)=>{
    if(err&&err.status===400){
            res.status(400).send({message:err.message||"Not Found!",erros:err.errors ||[]})
        
    }
    next(err)
}

export const forbidden = (err,req,res,next)=>{
    if(err&&err.status===403){
            res.status(403).send({message:err.message||"Forbidden!"})
        
    }
    next(err)
}


export const catchAllErrorHandler = (err,req,res,next)=>{
    if(err){
        if(!req.headerSent){
            res.status(err.status||500).send({message:err.message||"Something is wrong!"})
        }
    }
    next(err)
}

