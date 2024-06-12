import joi from "joi";

function Validation(body){
    const val=joi.object({
        name: joi.string().required(),
        location: joi.string().required(),
        description: joi.string().required(),
        contact: joi.string().required(),

    })
    return val.validate(body)
}
export default Validation