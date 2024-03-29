import React, { useState } from 'react'
import Card from './Card'


function Foreground() {
  const data= [
    {desc:"Hello Guys",
    filesize:".9mb", 
    close: true,
     tag:{ isOpen: true, tagTitle:"Download Now", tagColor:"green"},
    },
    {desc:"I am Sourabh Jha.",
    filesize:".9mb", 
    close: false,
     tag:{ isOpen: true, tagTitle:"Download Now", tagColor:"green"},
    },
    {desc:"Want to be a Full Stack web Developer.",
    filesize:".9mb", 
    close: true,
     tag:{ isOpen: true, tagTitle:"Download Now", tagColor:"blue"},
    },
    {desc:"Welcome to My Project",
    filesize:".9mb", 
    close: false,
     tag:{ isOpen: false, tagTitle:"Download Now", tagColor:"green"},
    },
  ];
  
  
  return (
    <div className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
       {data.map((item, index)=>(
        <Card data={item}/>
       ))}
    </div>
  )
}

export default Foreground