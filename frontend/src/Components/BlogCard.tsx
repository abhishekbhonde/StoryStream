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
    <div>
            <div>
             <AvatarCard firstName='AB'/>   {authorName} . {publishedData}
            </div>
            <div>
                {title}
            </div>
            <div>
                {content.slice(0,100)+ "...."}
            </div>
    </div>
  )
}

export default BlogCard


interface avatarCard{
    firstName:string
}
function AvatarCard({firstName}:avatarCard){
    return (
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
    <span className="font-medium text-gray-600 ">{firstName}</span>
</div>
    )
}
