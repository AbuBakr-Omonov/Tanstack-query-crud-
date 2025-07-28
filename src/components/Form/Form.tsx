import React, { useEffect, useState, type FC, type FormEvent } from 'react'
import { useStudents } from '../../api/hooks/useStudents'
import type { IPerson } from '../../types/types';
 interface Props {
  edit: IPerson | null;
  setEdit:React.Dispatch<React.SetStateAction<IPerson | null>>
}

const Form: FC<Props> = ({edit, setEdit}) => {
  const [lname ,  setName] =  useState("")   
   const [fname ,  setFname] =  useState("")
   const [birthdate ,  setBirthdate] =  useState("")
   const [address ,  setAddress] =  useState("")
   const [phoneNumber ,  setPhoneNumber] =  useState("")
   const {createStudents ,ubdateStudents} = useStudents()
     useEffect(() =>{
      if(edit){
        setName(edit.lname) 
        setFname(edit.fname) 
        setBirthdate(edit.birthdate) 
        setAddress(edit.address) 
        setPhoneNumber(edit.phone_number) 
      }else{
        setName("") 
        setFname("") 
        setBirthdate("")  
        setAddress("") 
        setPhoneNumber("") 
      }
   },[edit])

   const handlSubmit  =  (e : FormEvent<HTMLFormElement>) =>{
     e.preventDefault()
      if(edit){
       ubdateStudents.mutate({student: {lname, fname , birthdate , address , phoneNumber }, id:edit.id}) 
       setEdit(null)
      }else{
        createStudents.mutate({lname, fname , birthdate , address , phoneNumber ,});

      }
     setName("")    
     setFname("")    
     setBirthdate("")    
     setAddress("")    
     setPhoneNumber("")    
  }
  return (
    <>
      <div className=' container mx-auto  mb-[50px] '>
        <form  onSubmit={handlSubmit} className="flex flex-col gap-4 w-full max-w-md  bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">Edit Student</h2>

          <input
            value={lname }
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="Ism (fname)"
            type="text"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
           value={fname}
           required
            onChange={(e) => setFname(e.target.value)}
            placeholder="Familiya (lname)"
            type="text"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
           value={birthdate}
           required
              onChange={(e) => setBirthdate(e.target.value)}
            placeholder="Tug‘ilgan yil (birthdate)"
            type="number"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
           value={address }
           required
              onChange={(e) => setAddress(e.target.value)}
            placeholder="Manzil (address)"
            type="text"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
            value={phoneNumber}
            required
              onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Telefon (phone_number)"
            type="tel"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            { 
            edit ? "save" :
            "Submit"
            }
          </button>
        </form>

      </div>
    </>
  )
}

export default React.memo(Form)