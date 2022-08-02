import React from 'react';
import Image from 'next/image'
export const Login = () => {
    return (
        <div className="container-login">
            <img src="/logo.svg" alt="Logo Fiap" className="logo">
            </img>
            <form>
                <div className="input">
                <img src="/mail.svg" alt="Informe seu login">
                    </img>
                    <input type="text" placeholder="Login">
                    </input>
                </div>
                <div className="input">
                <img src="/lock.svg" alt="Informe seu senha">
                    </img>
                    <input type="password" placeholder="Senha">
                    </input>
                </div>
                <button>Login</button>
            </form>
        </div>
        
    );
}