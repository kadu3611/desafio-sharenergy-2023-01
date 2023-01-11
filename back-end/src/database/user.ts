import mongoose, {Schema} from "mongoose";


const user = new Schema({
    nome: String,
    email: String,
    telefone: Number,
    endereço: String,
    cpf: Number
});


export default mongoose.model('User', user);