import React from 'react'
import Students from '../../components/students/Students'
import { useStudents } from '../../api/hooks/useStudents'
import type { IPerson } from '../../types/types'

interface Props {
  setEdit: React.Dispatch<React.SetStateAction<IPerson | null>>
}
const Home: React.FC<Props> = ({setEdit}) => {
   const { getStudents ,deleteStudents} = useStudents()
    const { data } = getStudents()
    console.log(data);
  return (
    <div>
        <Students data={data} deleteStudents ={deleteStudents} setEdit={setEdit}/>
    </div>
  )
}

export default React.memo(Home)