import React, { type FC } from 'react'
import type { IPerson } from '../../types/types'

interface Props{
    data:IPerson[]
    deleteStudents: { mutate: (id: string) => void }
    setEdit: React.Dispatch<React.SetStateAction<IPerson | null>>
} 
const Students: FC<Props> = ({data,deleteStudents,setEdit} ) => {
    const handlDelete = (id:any) =>{
        deleteStudents.mutate(id)
        setEdit(null)
    }
    return (
        <>
            <div className=' container mx-auto grid  sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4  gap-5 '>
                {
                    data?.map((item: IPerson) => (
                        <div
                            key={item.id}
                            className="rounded-xl border border-blue-600 bg-blue-100 p-4 shadow hover:shadow-md transition duration-300"
                        >
                            <h2 className="text-xl font-semibold text-blue-800 mb-2">
                                {item.fname} {item.lname}
                            </h2>

                            <div className="text-sm text-blue-700">
                                <div className="mb-1">
                                    <strong>Tug'ilgan yil:</strong> <span>{item.birthdate}</span>
                                </div>
                                <div className="mb-1">
                                    <strong>Manzil:</strong> <span>{item.address}</span>
                                </div>
                                <div>
                                    <strong>Telefon:</strong> <span>{item.phone_number}</span>
                                </div>
                            </div>
                            <div className="flex  items-end justify-between">
                               <div className="text-[20px] font-medium  flex items-center gap-3 mt-1.5" >
                                  <button onClick={() => setEdit(item)} className=' text-green-700 cursor-pointer'>Edit</button>
                                  <button onClick={() =>  handlDelete(item.id)} className=' text-red-700  cursor-pointer'>Delete</button>
                               </div>
                               <strong className='text-blue-800'>{item.date.split("T")[0]}</strong>
                            </div>
                        </div>

                    ))
                }
            </div>

        </>
    )
}

export default React.memo(Students)