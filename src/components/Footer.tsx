
import { RiMailSendFill } from "react-icons/ri";


const Footer: React.FC = ( )=>{

    return(<>
    <div className="mt-20 pt-10 pb-4" style={{backgroundColor:"#1b1d25"}}>
       <div className="flex justify-around max-lg:!flex-col max-lg:!ml-7 max-lg:gap-7" >
        <div className="min-w-96">
            <div className="text-2xl font-semibold">STYLIAN</div>
            <div className="w-96 mt-5 opacity-70">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur.</div>
            <div className="w-96 border-b-2 opacity-30 rounded-3xl mt-3"></div>
            <div className="mt-10 font-semibold">
                Find us here:
                <ul className= "flex opacity-90 cursor-default gap-2 mt-3">
                <li className="font-semibold cursor-pointer">FB</li>
                <li className="mt-3 h-0.5 w-2 bg-white opacity-75 rounded-md"> </li>
                <li className="font-semibold cursor-pointer">TW</li>
                <li className="mt-3 h-0.5 w-2 bg-white opacity-75 rounded-md"> </li>
                <li className="font-semibold cursor-pointer">INS</li>
                <li className="mt-3 h-0.5 w-2 bg-white opacity-75 rounded-md"> </li>
                <li className="font-semibold cursor-pointer">PT</li>
               
                

            </ul>
            </div>
        </div>
        <div style={{minWidth:"84px"}}>
            <div className="text-lg font-semibold">About</div>
            <ul className="text-sm opacity-70 mt-5 ml-4" style={{listStyleType:"disc"}}>
                <li className="pb-4 cursor-pointer">About us</li>
                <li className="pb-4 cursor-pointer">Collection</li>
                <li className="pb-4 cursor-pointer">Shop</li>
                <li className="pb-4 cursor-pointer">Blogs</li>
                <li className="pb-4 cursor-pointer">Contact Us</li>
            </ul>
        </div>
        <div style={{minWidth:"117px"}}>
            <div className="text-lg font-semibold">Useful Links</div>
            <ul className="text-sm opacity-70 mt-5 ml-4" style={{listStyleType:"disc"}}>
                <li className="pb-4 cursor-pointer">Privacy Policy</li>
                <li className="pb-4 cursor-pointer">Terms of use</li>
                <li className="pb-4 cursor-pointer">Support</li>
                <li className="pb-4 cursor-pointer">Shipping Details</li>
                <li className="pb-4 cursor-pointer">FAQs</li>
            </ul>
        </div>
        <div style={{minWidth:"292px"}}>
        <div className="text-lg font-semibold">Newsletter</div>
        <div className="mt-5 opacity-70 text-sm w-72">Subscribe to our newsletter for latests updates and information.</div>
        <div className="flex gap-2">
            <input type="text" className="text-sm mt-7" placeholder="Enter your email..." style={{width:"260px",height:"30px",backgroundColor:"#1b1d25",borderBottom:"1px solid rgb(255,255,255,0.4)",outline:"none"}} ></input>
            <div className="cursor-pointer text-2xl opacity-70 mt-8"><RiMailSendFill/></div>
            </div>
            
        </div>
       </div>
       <hr style={{width:"95%",margin:"auto",marginTop:"30px",opacity:"0.3",borderRadius:"100px"}}/>
       <hr style={{width:"95%",margin:"auto",opacity:"0.3",borderRadius:"100px"}}/>
       <div className="text-sm opacity-70 mt-3 ml-12">
         © All Rights Reserved. STYLIAN 2024
       </div>
      
    </div>
    </>)
}


export default Footer