import React from 'react'

interface blogCardParameters {
    authorName:string,
    content:string,
    publishedData:string,
    title:string
}
const BlogCard = ({
    authorName,
    content,
    publishedData,
    title


}:blogCardParameters)=>{
  
  return (
    <div className='border-b p-4 border-slate-300'>
           <div className='flex items-center gap-2 '>
           <div>
             <AvatarCard firstName='AB'/>  
            </div >
            <div className='text-slate-600 text-lg'>
            {authorName} 
            </div>
            <div>
                <Circle/>
            </div>
            <div className='text-slate-500 font-thin '>
            {publishedData}
            </div>
           </div>
            <div className='text-xl pt-3 font-semibold'>
                {title}
            </div>
            <div className='text-md  font-thin'>
                {content.slice(0,100)+ "...."}
            </div>
            <div className='pt-3 text-slate-500 text-sm font-thin'>
                {`${Math.ceil(content.length /100)} minutes read..`}
            </div>
    </div>
  )
}

export default BlogCard


interface avatarCard{
    firstName:string
}
export function AvatarCard({firstName}:avatarCard){
    return (
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
    <span className="font-medium bg-slate-500 w-full h-full text-center flex justify-center items-center text-gray-200 ">{firstName[0]}</span>
</div>
    )
}


function Circle(){
    return <div className='rounded-full bg-slate-600 h-[5px] w-[5px]'>

    </div>
}