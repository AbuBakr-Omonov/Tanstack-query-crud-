import React, { useState } from 'react'
import Forminput from './FormInput/Forminput'
import Home from './home/Home'

const Main = () => {
    const [edit ,setEdit] = useState<any>(null)
    console.log(edit);
    
  return (
    <div>
         <Forminput edit={edit} setEdit={setEdit}/>
         <Home  setEdit ={setEdit}/>
    </div>
  )
}

export default React.memo(Main)