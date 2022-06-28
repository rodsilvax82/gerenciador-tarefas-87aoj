import type {NextApiRequest,NextApiResponse} from 'next';
import { DefaultMsgResponse } from '../types/DefaultMsgResponse';

export default (req: NextApiRequest, res: NextApiResponse<DefaultMsgResponse>) => {

    if(req.method === 'POST'){

        const{login,password} = req.body;
        if(login === 'rodrigo_carvalho82@hotmail.com' &&
        password === 'Senha@123')
        {
            return res.status(200).json({msg: 'Login autorizado!'});
        }
        return res.status(400).json({error: 'Usuário não encontrado!'});
    }
    return res.status(405).json({error: 'Método informado não é permitido!'});
  }