import joi from "joi";

function Validation(body){
    const val=joi.object({
        name: joi.string().required(),
        phone: joi.number().required(),
        classId: joi.string().required(),
    })
    return val.validate(body)
}
export default Validation