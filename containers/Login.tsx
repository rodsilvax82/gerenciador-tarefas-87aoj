import React, {useState, MouseEvent} from "react";
import { NextPage} from 'next';
import { executeRequest } from "../services/apiServices";

type LoginProps = {
    setAccessToken(e: string): void
}

export const Login:NextPage<LoginProps> = ({setAccessToken}) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 

    const doLogin = async (evento: MouseEvent) => {
        try{
            evento.preventDefault();
            setError('');

            if(!login || !password)
            {
                return setError('Favor informar usuário e senha');
            }
            else{
                const body = {login,password}
                const result = await executeRequest('login','POST', body);
                if(!result || !result.data)
                {
                    return setError('Favor informa usuário e senha');
                }

                const{name,email,token} = result.data;
                localStorage.setItem('accessToken',token);
                localStorage.setItem('username',name);
                localStorage.setItem('usermail',email);
                setAccessToken(token);
            }
        }catch(e:any){
            console.log(e);
            if(e?.response?.data?.error){
                return setError('Ocorreu erro ao processar login, tente novamente!')

            }
        }
    }
    return (
        <div className="container-login">
            <img src="/logo.svg" alt="Logo Fiap" className="logo">
            </img>
            <form>
                <p className="error">{error}</p>
                <div className="input">
                <img src="/mail.svg" alt="Informe seu login">
                    </img>
                    <input 
                        type="text" 
                        placeholder="Login" 
                        value={login} 
                        onChange ={evento => setLogin(evento.target.value)}>
                    </input>
                </div>
                <div className="input">
                <img src="/lock.svg" alt="Informe seu senha">
                    </img>
                    <input 
                    type="password" 
                    placeholder="Senha" 
                    value={password}
                    onChange ={evento => setPassword(evento.target.value)}>
                    </input>
                </div>
                <button onClick={doLogin}>Login</button>
            </form>
        </div>
        
    );
}