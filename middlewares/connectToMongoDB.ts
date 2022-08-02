import mongoose from 'mongoose';
import type {NextApiRequest, NextApiResponse,NextApiHandler} from 'next';
import handler from '../pages/api/hello';
import { DefaultMsgResponse } from '../pages/types/DefaultMsgResponse';

export const connect  =  (handler: NextApiHandler) =>
async (req : NextApiRequest, res : NextApiResponse<DefaultMsgResponse>) => {
    console.log('MongoDB readState:', mongoose.connections[0].readyState);

    if(mongoose.connections[0].readyState){
        return handler(req,res);
    };

    const DB_CONNECTIONSTRING = 'mongodb://127.0.0.1:27017/87aoj-gerenciador-tarefas';
    mongoose.connection.on('connected', () => console.log('Conectado no banco de dados'));
    mongoose.connection.on('error', err => console.log('Erro ao conectar no banco de dados',err));
    await mongoose.connect(DB_CONNECTIONSTRING);

    return handler(req,res);
};