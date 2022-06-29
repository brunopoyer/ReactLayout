import { User, Lock } from "phosphor-react";
import React, { FormEvent, useState } from "react";
import Header from "../components/Header";
import Input from "../components/Input";


export default function Login()  
{
    const [userState, setUserState] = useState<string>('');
    const [passwordState, setPasswordState] = useState<string>('');    

    const handleChangeUser=(e: React.ChangeEvent<HTMLInputElement>)=>
    {        
        setUserState(e.target.value);
    }

    const handleChangePassword=(e: React.ChangeEvent<HTMLInputElement>)=>
    {        
        setPasswordState(e.target.value);
    }   

    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        alert("deu certo");
    }
    
    const authenticateUser = () =>
    {

    }

    return (
        <>          
            <Header
                heading="Acesse sua conta"
                paragraph="Ainda não tem uma conta?"
                linkName="Cadastrar"
                linkUrl="/signup"
            />
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="-space-y-px px-10">
                    <Input
                        labelText="Usuário"
                        labelFor="user"
                        id="user"
                        name="username"
                        type="text"
                        isRequired={true}
                        placeholder="Usuário"
                        value={userState}
                        handleChange={handleChangeUser}
                        userIcon="User"
                    />
                    <Input
                        labelText="Senha"
                        labelFor="password"
                        id="password"
                        name="password"
                        type="password"
                        isRequired={true}
                        placeholder="Senha"
                        value={userState}
                        handleChange={handleChangePassword}
                        userIcon="Lock"
                    />
                    <div className="flex items-center justify-between pt-6 pb-5">
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="remember-me"
                                name="remember-me"
                                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Lembrar
                            </label>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                                Esqueceu sua senha ?
                            </a>
                        </div>
                    </div>
                    <button 
                        type="submit" 
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                        >
                        Acessar
                    </button>                                
                </div>
            </form>
        </>
    )
}