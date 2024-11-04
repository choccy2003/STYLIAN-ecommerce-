import { useRouter } from 'next/navigation'
import { LuUser2 } from "react-icons/lu";
import React from 'react'
import { useSelector } from "react-redux";
import { RootState} from "@/store";



const UserLoginButton:React.FC = () => {
    const isLoggedIn = useSelector((state:RootState)=>state.user.userLoggedIn)
    const router = useRouter()
    
  return (
    <div onClick={()=>{isLoggedIn?(''):router.push('/Login')}} style={{fontSize:"21px"}} className="text-xl ml-6 cursor-pointer">
                <LuUser2/>
            </div>  
  )
}

export default UserLoginButton