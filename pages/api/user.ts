import type{NextApiRequest, NextApiResponse} from 'next';
import { UserModel } from '../models/UserModel';
import { DefaultMsgResponse } from '../types/DefaultMsgResponse';
import {connect} from '../../middlewares/connectToMongoDB';

//import { UserModel } from '../../models/UserModel';

const registerEndpoint = async (req: NextApiRequest, res: NextApiResponse<DefaultMsgResponse>) => {

    try {
        if(req.method === 'POST')
        {

            const {name,email,password} = req.body;
            if(!name || name.trim().lenth < 2){
                return res.status(400).json({error: 'Nome não é válido'});
            };
            if(!email || email.trim().lenth < 5 || !email.includes('@') || !email.includes('.')){
                return res.status(400).json({error: 'Email não é válido'});
            };
            if(!password || password.trim().lenth < 6){
                return res.status(400).json({error: 'Senha deve ter pelo menos 6 caracteres'});
            };

            const user = {
                name,
                email,
                password
            };

            await UserModel.create(user);
            return res.status(200).json({msg: 'Usuário cadastrado com sucesso!'});
        }
        return res.status(405).json({error: 'Método informado não existe'});
        
    } catch (e) {
        console.log('Error on create user:',e);
        return res.status(500).json({error: 'Não foi possível cadastrar usuário, entre em contato com o admi'});
    }
}

export default connect(registerEndpoint);