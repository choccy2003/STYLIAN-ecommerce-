import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { PiTruck } from "react-icons/pi";
import { MdSupportAgent } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import ProductGrid from "./ProductGrid";
const HomePage:React.FC = ()=>{


    return(
        <div style={{fontFamily:"Roboto",overflowX:"hidden"}}>
           <div style={{fontFamily:"Roboto"}} className="mt-16 ml-64 flex flex-nowrap cursor-default max-2xl:ml-44 max-xl:ml-16 max-md:w-fit max-md:ml-8 max-sm:ml-4 max-md:mt-6 ">
            <div className="relative">
                <div className="relative z-10 cover-image" style={{minWidth:"620px",backgroundImage:"url(/cover-image.jpeg)",minHeight:"720px",backgroundPositionY:"-70px",borderRadius:"5px",filter:"brightness(85%)"}}>
                </div>
                <div className="absolute top-72 left-12 pattern-image max-2xl:top-56 max-md:top-16 max-sm:-left-12 max-sm:top-8" style={{minWidth:"900px",backgroundImage:"url(/dot.svg)",minHeight:"700px",backgroundPositionX:"10px",backgroundPositionY:"10px",borderRadius:"5px",opacity:"0.5",scale:"0.45"}}>

          </div>
          <div className="relative w-fit left-full px-11 bottom-0.5 flex gap-2 text-sm opacity-50 max-xl:px-0 max-sm:pl-10 max-sm:left-46 max-sm:bottom-0" style={{transform:"rotate(270deg)"}}>
            
            <div style={{width:"20px",height:"2px",borderRadius:"20px",backgroundColor:"white",alignSelf:"center"}}>

            </div>
            <span className="tracking-widest cursor-default text-xs">
                 Scroll Down
            </span>
           
            
          </div>
          
            </div>
          
          
          <div className="flex flex-col relative right-20 mt-52 z-10 max-xl:mt-44 max-md:mt-32 max-sm:mt-16 max-sm:ml-8 max-xxs:-ml-4">
            <div style={{letterSpacing:"5px"}} className=" text-xs font-normal ml-1.5 mb-4 cover-text max-xl:mb-1">
                NEW COLLECTION
            </div>
            <div className="text-8xl tracking-wide max-2xl:text-7xl max-xl:text-5xl max-sm:text-3xl max-sm:min-w-40">
                Meet New
            </div>
            <div className="text-8xl tracking-wide max-2xl:text-7xl max-xl:text-5xl max-sm:text-3xl max-sm:min-w-56">
                Fashion Week
            </div>
            <div style={{backgroundColor:"rgb(15 19 33)"}} className=" w-fit px-10 py-3 font-semibold text-lg mt-8 ml-1.5 cursor-pointer max-2xl:px-6 max-2xl:text-sm max-2xl:py-2 max-2xl:mt-4 max-sm:text-xs max-sm:px-4 max-sm:py-1.5 max-sm:mt-1 max-sm:ml-0.5">
                Shop Now</div>
            
          </div>
          
            <ul className="text-center relative opacity-90 cursor-default self-center ml-auto mr-20 text-xl max-2xl:text-lg max-2xl:mr-10 max-md:hidden max-sm:block max-xs:right-16 max-xs:text-base">
                <li className="font-semibold cursor-pointer">FB</li>
                <li className="mt-3 ml-2 h-0.5 w-4 bg-white opacity-75 rounded-md max-2xl:ml-1.5 max-sm:ml-1"> </li>
                <li className="font-semibold mt-3 cursor-pointer">TW</li>
                <li className="mt-3 ml-2 h-0.5 w-4 bg-white opacity-75 rounded-md max-2xl:ml-1.5 max-sm:ml-1"> </li>
                <li className="font-semibold mt-3 cursor-pointer">INS</li>
                <li className="mt-3 ml-2 h-0.5 w-4 bg-white opacity-75 rounded-md max-2xl:ml-1.5 max-sm:ml-1"> </li>
                <li className="font-semibold mt-3 cursor-pointer">PT</li>
               
                

            </ul>
         
        </div> 
        
            <div className="mt-56 max-md:mt-20">
                <div className="w-fit m-auto text-base max-md:text-sm">NEW <span className="opacity-90 font-light">COLLECTIONS</span></div>
                <div className="w-fit m-auto text-5xl mt-7 max-xl:text-4xl max-sm:text-3xl max-xl:mt-2">Featured Products</div>
                <div className="flex mt-10 text-sm justify-evenly w-96 m-auto opacity-70 cursor-pointer max-xl:mt-4"><div>All</div><div>Men</div><div>Women</div><div>Accessories</div><div>New Arrivals</div></div>
                <div style={{paddingLeft:"5%",paddingRight:"5%"}} className="h-96 mt-10">
                    <ProductGrid />
                </div>
                <div className="w-fit m-auto bg-black px-5 py-3 text-sm cursor-pointer mt-24">See All Products</div>
                
            </div>
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
            <div className="mt-32 max-md:mt-16" style={{display:"grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",justifyContent:"space-evenly",gridGap:"20px"}}><div className="relative" style={{maxWidth:"320px",margin:"auto"}}>
            <div className="relative"><div className="text-7xl text-slate-200"><PiTruck/> </div><div className="text-xl mt-8 text-slate-200">Free Shipping</div><div className="w-full border opacity-90 border-slate-200 border-1 my-2 rounded-md"></div><div className="text-sm opacity-70 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur incidunt odit illum, elit. Consectetur incidunt odit illum,.</div></div><div className="absolute -bottom-10 left-10" style={{minWidth:"450px",backgroundImage:"url(/dot.svg)",minHeight:"350px",backgroundPositionX:"10px",backgroundPositionY:"10px",borderRadius:"5px",opacity:"0.5",scale:"0.45"}}>
            </div></div><div className="relative" style={{maxWidth:"320px",margin:"auto"}}>
            <div className="relative"><div className="text-7xl text-slate-200"><MdSupportAgent className="relative top-1"/> </div><div className="text-xl mt-8 text-slate-200">24/7 Customer Support</div><div className="w-full border opacity-90 border-slate-200 border-1 my-2 rounded-md"></div><div className="text-sm opacity-70 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur incidunt odit illum, elit. Consectetur incidunt odit illum,.</div></div><div className="absolute -bottom-10 left-10" style={{minWidth:"450px",backgroundImage:"url(/dot.svg)",minHeight:"350px",backgroundPositionX:"10px",backgroundPositionY:"10px",borderRadius:"5px",opacity:"0.5",scale:"0.45"}}>
            </div></div><div className="relative" style={{maxWidth:"320px",margin:"auto"}}>
            <div className="relative"><div className="text-7xl text-slate-200"><BsCashCoin className="relative top-3"/> </div><div className="text-xl mt-8 text-slate-200">Money Back Guarantee</div><div className="w-full border opacity-90 border-slate-200 border-1 my-2 rounded-md"></div><div className="text-sm opacity-70 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur incidunt odit illum, elit. Consectetur incidunt odit illum,.</div></div><div className="absolute -bottom-10 left-10" style={{minWidth:"450px",backgroundImage:"url(/dot.svg)",minHeight:"350px",backgroundPositionX:"10px",backgroundPositionY:"10px",borderRadius:"5px",opacity:"0.5",scale:"0.45"}}>
            </div></div></div>
            <div className="mt-20 max-md:mt-16">
            <div className="w-fit hidden m-auto text-5xl max-md:block max-sm:text-3xl mb-4">FAQs</div>
                <div className="flex gap-32  max-1.5xl:justify-around">
                
                <Accordion type="single" collapsible className="w-3/5 ml-36 max-1.5xl:w-11/12 max-1.5xl:ml-0 ">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-normal max-md:text-base text-left">Can Linen Be Worn In March? Skin In July?</AccordionTrigger>
        <AccordionContent>
        <div className="pb-4 px-2 opacity-70">

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae fugit alias sapiente modi doloremque ad sunt corporis, velit in quasi iure. Tempora consectetur unde commodi velit natus exercitationem incidunt non!
</div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg font-normal max-md:text-base text-left" >How To Dress To Be On A Good Account At Work?</AccordionTrigger>
        <AccordionContent>
        <div className="pb-4 px-2 opacity-70">

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae fugit alias sapiente modi doloremque ad sunt corporis, velit in quasi iure. Tempora consectetur unde commodi velit natus exercitationem incidunt non!
</div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg font-normal max-md:text-base text-left" >How To Care For Imitation Pearls And Jewelry In General?</AccordionTrigger>
        <AccordionContent className="px-4 py-2">
          <div className="pb-4 px-2 opacity-70">

             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae fugit alias sapiente modi doloremque ad sunt corporis, velit in quasi iure. Tempora consectetur unde commodi velit natus exercitationem incidunt non!
          </div>
         
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg font-normal max-md:text-base text-left" >What Looks Good In An Informal Work Environment?</AccordionTrigger>
        <AccordionContent>
        <div className="pb-4 px-2 opacity-70">

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae fugit alias sapiente modi doloremque ad sunt corporis, velit in quasi iure. Tempora consectetur unde commodi velit natus exercitationem incidunt non!
</div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-lg font-normal max-md:text-base text-left" >How To Dress Fashionably With Only A Limited Amount?</AccordionTrigger>
        <AccordionContent>
        <div className="pb-4 px-2 opacity-70">

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae fugit alias sapiente modi doloremque ad sunt corporis, velit in quasi iure. Tempora consectetur unde commodi velit natus exercitationem incidunt non!
</div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="text-lg font-normal max-md:text-base text-left">Can Linen Be Worn In March? Skin In July?</AccordionTrigger>
        <AccordionContent>
        <div className="pb-4 px-2 opacity-70">

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae fugit alias sapiente modi doloremque ad sunt corporis, velit in quasi iure. Tempora consectetur unde commodi velit natus exercitationem incidunt non!
</div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger className="text-lg font-normal max-md:text-base text-left" >How To Dress To Be On A Good Account At Work?</AccordionTrigger>
        <AccordionContent>
        <div className="pb-4 px-2 opacity-70">

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae fugit alias sapiente modi doloremque ad sunt corporis, velit in quasi iure. Tempora consectetur unde commodi velit natus exercitationem incidunt non!
</div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger className="text-lg font-normal max-md:text-base text-left" >How To Care For Imitation Pearls And Jewelry In General?</AccordionTrigger>
        <AccordionContent className="px-4 py-2">
          <div className="pb-4 px-2 opacity-70">

             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae fugit alias sapiente modi doloremque ad sunt corporis, velit in quasi iure. Tempora consectetur unde commodi velit natus exercitationem incidunt non!
          </div>
         
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger className="text-lg font-normal max-md:text-base text-left" >What Looks Good In An Informal Work Environment?</AccordionTrigger>
        <AccordionContent>
        <div className="pb-4 px-2 opacity-70">

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae fugit alias sapiente modi doloremque ad sunt corporis, velit in quasi iure. Tempora consectetur unde commodi velit natus exercitationem incidunt non!
</div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-10">
        <AccordionTrigger className="text-lg font-normal max-md:text-base text-left" >How To Dress Fashionably With Only A Limited Amount?</AccordionTrigger>
        <AccordionContent>
        <div className="pb-4 px-2 opacity-70">

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae fugit alias sapiente modi doloremque ad sunt corporis, velit in quasi iure. Tempora consectetur unde commodi velit natus exercitationem incidunt non!
</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <div className="flex flex-col max-1.5xl:hidden">
      <div className="flex flex-col  mb-5">
        <div style={{backgroundColor:"#1b1d25"}} className="w-96 pb-16">
        <div className="text-3xl font-light px-10 pt-16">Newsletter</div>
        <div className="px-10 pr-12 pt-5 opacity-70 text-sm">Subscribe to our newsletter for latests updates and information.</div>
        <div className=" w-fit mr-auto ml-10 ">
            <input type="text" className="text-sm mt-7" placeholder="Enter your email..." style={{width:"290px",height:"30px",backgroundColor:"#1b1d25",borderBottom:"1px solid rgb(255,255,255,0.4)",outline:"none"}} ></input></div>
            <div className="w-fit ml-10 mt-5 bg-black px-5 py-3 text-sm cursor-pointer">Subscribe</div>

        </div>
    </div>
    <div className="flex flex-col cursor-default">
        <div style={{backgroundColor:"black"}} className="w-96 px-4 py-4">
        <div className="border-white border-2 h-96">
          <div style={{letterSpacing:"8px"}} className="text-4xl w-fit m-auto mt-24">SEASON</div>
          <div className="text-7xl font-bold w-fit m-auto pr-4">
            SALE
          </div>
          <div className="text-sm w-64 m-auto pt-7 text-center">
            Happy Winter! Get exciting offers and discounts at STYLIAN.
          </div>
          <div className="flex gap-3 w-fit m-auto mt-5 cursor-pointer">
          <div style={{width:"25px",height:"2px",borderRadius:"20px",backgroundColor:"white",alignSelf:"center"}}>

</div>
<span className="tracking-wide text-sm">
     Shop Now
</span>
          </div>
        </div>

        </div>
    </div>
    </div>
    
                </div>
            </div>
        </div>
        
    )
}

export default HomePage