import React from 'react'
import Photo from "../image/Photo.png"
import Image from 'next/image'

const page = () => {
  return (
    <div className="homeContainer">
    <div className="childContainer">
      Hey,
      <br />
      My Name is <span className="redColor">Hassan Raza</span>
      <br />I am Next JS Developer
    </div>
    <div className="myphoto">
    <Image src={Photo}
    alt="Photo"
     width={400}
      height={500} />
    
    
    </div>
    </div>
  )
}

export default page
