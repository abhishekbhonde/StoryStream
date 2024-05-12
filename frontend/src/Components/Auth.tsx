import React, { ChangeEvent, useState } from 'react'
import {SingupInput} from '@abhishekbhonde/zodvalidationmedium';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_URL } from '../config';

 const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInput, setPostInput] = useState<SingupInput>({
        name: "",
        email: "",
        password: ""
    });



    

   async function signUpRequest () {
      try {
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"?"signup":"signin"}`,postInput)
        const jwt = response.data;
        localStorage.setItem("token",jwt);
        navigate("/blogs")
      } catch (error) {
        
      }
    }
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
                       setPostInput({
                        ...postInput,
                       email: e.target.value
                       })
                       
               }}
               />
            </div>
            <div className='mt-5'>
            <LabelInput label='Password' placeholder='Password' onChange={(e) => {
                        setPostInput({
                            ...postInput,
                            password: e.target.value
                        })
                    }}  />
            </div>
            <div className='mt-5'>
            {type === "signup" ? <LabelInput label="Name" placeholder="Harkirat Singh..." onChange={(e) => {
                        setPostInput({
                            ...postInput,
                            name: e.target.value
                        })
                    }} /> : null}
  
            </div>
            <button onClick={signUpRequest} type="button" className=" ml-2 text-white w-[400px] mt-7 bg-[#050708]  hover:bg-[#050708]/80 focus:ring-4  focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-3 inline-flex items-center justify-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2">
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
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?:string
}

function LabelInput({label, placeholder, onChange,type}:parameters){

    return (
        <div className="space-y-2">
        <label htmlFor='helper-text' className="block mb-2 text-sm font-medium text-gray-500 ">{label}</label>
<input onChange={onChange} type={type || "text"} id="first-text"  className="bg-gray-50 border flex flex-col  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[400px] p-2.5 " required placeholder={placeholder}/>

      </div>
    )
}