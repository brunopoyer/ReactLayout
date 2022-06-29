import React, { useState } from "react";
import Header from "../components/Header";
import Input from "../components/Input";

export default function Singup(){

    const [usernameState, setUsernameState]= useState<string>('');
    const [emailState, setEmailState]= useState<string>('');
    const [passwordState, setPasswordState]= useState<string>('');
    const [ConfirmPassState, setConfirmPassState]= useState<string>('');    

    const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>)=>setUsernameState(e.target.value);
    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>)=>setEmailState(e.target.value);
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>)=>setPasswordState(e.target.value);
    const handleChangeConfirmPass = (e: React.ChangeEvent<HTMLInputElement>)=>setConfirmPassState(e.target.value);   
    
    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        createAccount();
    }

    const createAccount=()=>{

    }

    return (
        <>
            <Header 
                heading="Cadastre-se para criar uma conta"
                paragraph="Já possui uma conta ?"
                linkName="Login"
                linkUrl="/"
            />            
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="px-10">
                    <Input 
                        key="username"
                        handleChange={handleChangeUsername}
                        value={usernameState}
                        labelText="Username"
                        labelFor="username"
                        id="username"
                        name="username"
                        type="text"
                        isRequired={true}
                        placeholder="Usuário"
                        userIcon="User"
                    />
                    <Input 
                        key="email"
                        handleChange={handleChangeEmail}
                        value={emailState}
                        labelText="E-mail"
                        labelFor="email"
                        id="email"
                        name="email"
                        type="email"
                        isRequired={true}
                        placeholder="E-mail"
                        userIcon="EnvelopeOpen"
                    />
                    <Input 
                        key="password"
                        handleChange={handleChangePassword}
                        value={passwordState}
                        labelText="Digite sua Senha"
                        labelFor="password"
                        id="password"
                        name="password"
                        type="password"
                        isRequired={true}
                        placeholder="Digite sua senha"
                        userIcon="Lock"
                    />
                    <Input 
                        key="confirm-password"
                        handleChange={handleChangeConfirmPass}
                        value={ConfirmPassState}
                        labelText="Confirme sua senha"
                        labelFor="confirm-password"
                        id="confirm-password"
                        name="confirm-password"
                        type="password"
                        isRequired={true}
                        placeholder="Confirme sua senha"
                        userIcon="LockKey"
                    />   
                    <button 
                        type="submit" 
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                        >
                        Cadastrar
                    </button>   
                </div>                                                                        
            </form>
        </>
    );
}