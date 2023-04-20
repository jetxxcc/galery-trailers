const {Schema, model} = require('mongoose')
const bcrypt = require('bcryptjs')


const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,
    }


},
{
    timestamps: true,
    versionKey: false,
})
// cifrado
UserSchema.methods.encrypPassword = async password =>{
    //auto cifrado
   const salt = await bcrypt.genSalt(10)
   return await bcrypt.hash(password, salt)
}

//comparar pass

UserSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

module.exports = model('usertable', UserSchema)