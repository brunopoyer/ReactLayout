import { EnvelopeOpen, LockKey, User, Lock } from "phosphor-react";
import { FormEvent } from "react";

interface InputProps
{
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    labelText: string;
    labelFor: string;
    id: string;
    name: string;
    type: string;
    isRequired: boolean;
    placeholder: string;
    customClass?: string;
    userIcon: 'User' | 'LockKey' | 'Lock' | 'EnvelopeOpen';
}

const fixedInputClass="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";

export default function Input(props: InputProps) {
    return (
        <div className="my-5 flex justify-center">
            <label htmlFor={props.labelFor} className="sr-only">
                {props.labelText}
            </label>
            <div className="relative flex w-full">
                <div className="mr-[-1px] flex justify-center flex-1 border rounded-lg">
                    <span className="rounded flex items-center mb-0 text-center bg-gray-500 border">
                        {
                            (() => {
                                if(props.userIcon === 'User') 
                                {
                                    return (<User size={32} />)
                                }
                                else if(props.userIcon === 'LockKey')
                                {                            
                                    return (<LockKey size={32} />)
                                } 
                                else if(props.userIcon === 'EnvelopeOpen')
                                {
                                    return (<EnvelopeOpen size={32} />)
                                }
                                else
                                {
                                    return (<Lock size={32} />)
                                }
                            })()
                        } 
                    </span>                
                    <input 
                        onChange={props.handleChange}
                        value={props.value}
                        id={props.id}
                        name={props.name}
                        type={props.type}
                        required={props.isRequired}
                        className={fixedInputClass+props.customClass}
                        placeholder={props.placeholder}
                    />         
                </div>       
            </div>
        </div>
    );
}