import React from 'react'
import Form from '../../components/Form/Form'
import type { IPerson } from '../../types/types'

const Forminput = ({ edit, setEdit }: { edit: IPerson | null , setEdit:React.Dispatch<React.SetStateAction<IPerson | null>>}) => {
  return (
    <div>
     <Form edit={edit} setEdit={setEdit}/>
    </div>
  )
}

export default React.memo(Forminput)