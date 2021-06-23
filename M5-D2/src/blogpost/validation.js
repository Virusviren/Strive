import {checkSchema,validationResult} from "express-validator"

const schema = {
    title:{
        in:['body'],
        isString:{
            errorMessage:"validation Failed"
        }
    },
    category:{
        in:['body'],
        isString:{
            errorMessage:"validation Failed"
        }
    },
    content:{
        in:['body'],
        isString:{
            errorMessage:"validation Failed"
        }
    },
    "author.name":{
        in:['body'],
        isString:{
            errorMessage:"validation Failed"
        }
    },
     "author.avatar":{
        in:['body'],
        isString:{
            errorMessage:"validation Failed"
        }
    },
    "readTime.value":{
        in:['body'],
        isNumeric:{
            errorMessage:"validation Failed"
        }
    },
     "readTime.unit":{
        in:['body'],
        isString:{
            errorMessage:"validation Failed"
        }
    },
    cover:{
        in:['body'],
        isString:{
            errorMessage:"validation Failed"
        }
    }
}

export const checkBlogPostSchema = checkSchema(schema)
export const checkValidationResult = (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const error = new Error("Blog post validation failed viren")
        error.status =400;
        error.errors=errors.array()
        next(error)
    }
    next()
}