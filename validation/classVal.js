import joi from "joi";

function Validation(body){
    const val=joi.object({
        cName: joi.string().required(),

    })
    return val.validate(body)
}
export default Validation