import React from 'react'

interface Props {
    inputBoxType:string,
    inputBoxPlaceholder:string
}



const InputBox:React.FC<Props> = (props) => {
  return (
    <div className='w-full'>
        <input style={{backgroundColor:"rgb(0 0 0 / 30%)",outline:"none"}} className='px-3 text-sm py-3 w-full rounded-sm'  type={props.inputBoxType} placeholder={props.inputBoxPlaceholder}></input>
    </div>
  )
}

export default InputBox