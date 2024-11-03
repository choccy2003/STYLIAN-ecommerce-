import React from 'react'

const AboutSection = () => {
  return (
    <div className="mt-28 max-xl:mt-56 max-md:mt-16">
    <div className="text-5xl tracking-wide w-fit m-auto max-xl:text-4xl max-sm:text-3xl">All About Company</div>
    <div className="opacity-70 w-fit m-auto text-center max-w-sm mt-4 mb-20 max-xl:text-sm max-sm:mt-1 max-sm:mb-10">Official representative of the world-famous clothing
    brand Fashionee in the world.</div>

    <div className="flex justify-evenly gap-96">
        <div className="max-w-lg min-w-lg">
            <div className="text-2xl font-normal mb-6 max-sm:mb-3 max-sm:text-xl max-sm:ml-4">
                The Beginning Of Our Journey
            </div>
            <div className="flex -ml-6 max-sm:-ml-4">
            <div className="w-fit h-fit relative top-16 flex gap-4 text-sm opacity-70 items-center max-sm:gap-2 max-sm:left-2 max-sm:top-6" style={{transform:"rotate(270deg)"}}>
    
    <div style={{width:"15px",height:"2px",borderRadius:"20px",backgroundColor:"white",alignSelf:"center"}}>

    </div>
    <span className="tracking-widest cursor-default text-sm">
         2023
    </span>
   
    
  </div>
                <div className="opacity-70 max-sm:text-sm max-sm:pr-4">
                   Founded in 2023, STYLIAN was born out of a passion for fashion and a commitment to sustainability. Our mission is to redefine the way you express yourself through clothing offering bold, contemporary designs that are crafted with care for both people and the planet. From the fabrics we choose to the details that define our collections, every piece is a reflection of our belief in quality, style, and responsibility. 
                </div>
            
            </div>
        </div>
        <div className="max-w-xs min-w-xs mt-auto max-1.5xl:hidden">
           <div className="relative">
                <div className="relative">
<div className=" text-7xl tracking-wide mb-2">147+</div>
            <div className="text-3xl ml-3 tracking-wide font-light">Products for you</div>
                </div>
                <div className="absolute -right-32 -bottom-72 " style={{minWidth:"800px",backgroundImage:"url(/dot.svg)",minHeight:"700px",backgroundPositionX:"10px",backgroundPositionY:"10px",borderRadius:"5px",opacity:"0.5",scale:"0.45"}}>
           </div>

  </div>
        </div>
    </div>

    <div className="flex justify-evenly mt-40 max-1.5xl:mt-20 max-sm:mt-10">
        
        <div className="max-w-xs min-w-xs mt-auto ml-60 max-1.5xl:hidden">
           <div className="relative">
                <div className="relative">
<div className=" text-7xl tracking-wide mb-2">100+</div>
            <div className="text-3xl ml-3 tracking-wide font-light">Satisfied Clients</div>
                </div>
                <div className="absolute -right-32 -bottom-72 " style={{minWidth:"800px",backgroundImage:"url(/dot.svg)",minHeight:"700px",backgroundPositionX:"10px",backgroundPositionY:"10px",borderRadius:"5px",opacity:"0.5",scale:"0.45"}}>
           </div>

  </div>
        </div>
        <div className="max-w-lg min-w-lg ml-72 max-1.5xl:ml-0">
            <div className="text-2xl font-normal mb-6 max-sm:mb-3 max-sm:text-xl max-sm:ml-4">
                Who Are We Now?
            </div>
            <div className="flex -ml-6">
            <div className="w-fit h-fit relative top-16 flex gap-4 text-sm opacity-70 items-center max-sm:gap-2 max-sm:left-2 max-sm:top-6" style={{transform:"rotate(270deg)"}}>
    
    <div style={{width:"15px",height:"2px",borderRadius:"20px",backgroundColor:"white",alignSelf:"center"}}>

    </div>
    <span className="tracking-widest cursor-default text-sm ">
         2024
    </span>
   
    
  </div>
                <div className="opacity-70 max-sm:text-sm max-sm:pr-4">
                In 2024, STYLIAN stands as a leader in bold, sustainable fashion. We create modern, versatile designs that allow you to express your individuality while caring for the planet. Focused on creativity and eco-conscious practices, we are dedicated to crafting clothing that not only looks great but empowers you to make a statement every day.
                </div>
            
            </div>
        </div>
    </div>
    

    
</div>
  )
}

export default AboutSection