import React, { ChangeEvent, useState } from 'react'
import {SingupInput} from '@abhishekbhonde/zodvalidationmedium';
import { Link } from 'react-router-dom';
const Auth = ({type}:{type:"signup" | "signin"}) => {
    const [postInput, setPostInupt] = useState<SingupInput>({
        email:"",
        password:"",
        name:""
    })
  return (
    <div className='flex justify-center flex-col h-screen items-center '>
            <div className='border border-gray-300  rounded-lg p-10 flex justify-center flex-col items-center'>
            <div >
            <h1 className="text-3xl font-extrabold text-gray-900 ">Create an account</h1>
            </div>
            <div>
            {type === "signin" ? "Don't have an account?" : "Already have an account?"}

            
            <Link  className='ml-1 underline ' to={type==="signin" ? "/signup": "/signin"}>
                {type==="signin" ? "Sign Up":"Sign in"}
            </Link>
            
            </div>
            <div className='mt-5'>
               <LabelInput label='Email' placeholder='abhishek@gmail.com' onChange={(e)=>{
                       setPostInupt({
                        ...postInput,
                       name: e.target.value
                       })
               }}/>
            </div>
            <div className='mt-5'>
               <LabelInput label='Password' placeholder='passowrd' onChange={(e)=>{
                       setPostInupt({
                        ...postInput,
                       name: e.target.value
                       })
               }}/>
            </div>
            <div className='mt-5'>
               <LabelInput label='Name' placeholder='Abhishek Bhonde'onChange={(e)=>{
                       setPostInupt({
                        ...postInput,
                       name: e.target.value
                       })
               }}/>
            </div>
            <button type="button" className=" ml-2 text-white w-[400px] mt-7 bg-[#050708]  hover:bg-[#050708]/80 focus:ring-4  focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-3 inline-flex items-center justify-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2">
        {type==="signup" ? "Sign up" : "Sign in"}
</button>
            </div>
    </div>
  )
}


export default Auth

interface parameters{
    label:string;
    placeholder:string;
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
    type?:string
}

function LabelInput({label, placeholder, onChange,type}:parameters){

    return (
        <div className="space-y-2">
        <label htmlFor='helper-text' className="block mb-2 text-sm font-medium text-gray-500 ">{label}</label>
<input type="email" onChange={onChange} id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border flex flex-col  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[400px] p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder}/>

      </div>
    )
}