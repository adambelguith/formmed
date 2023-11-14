import React,{useState} from 'react'
import { useForm } from "react-hook-form"
import "react-datepicker/dist/react-datepicker.css";
import '../App.css'

  
const FormUser = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors }, } = useForm()
  return (
    <div className='flex  justify-center  '>
      <div className='flex flex-col w-8/12'>
        <div className='flex flex-row justify-center mb-8'>
          <div className='etapesdiv h-24 w-24 relative '> <h1 className='mt-8 ml-4 text-white text-xl'>etape1</h1></div>
          <div className='etapesdivnul h-24 w-24 relative'><h1 className='mt-8 ml-4 text-[#151516c4] text-xl'>etape 2</h1></div>
        </div>
          <form onSubmit={handleSubmit(onSubmit)} className='w-full  bg-[#ffc881] bg-opacity-40 backdrop-blur-lg backdrop-filter backdrop-saturate-150 rounded-2xl'>
              <h1 className='text-2xl text-black'>Form to test input</h1>
              <div className='ml-6 w-4/5 flex justify-center flex-col'>
                  <label className='text-black flex justify-start ml-4 '>Prenom :</label>
                  <input {...register("firstName",{required:'entrer votre Prenom obligatoire'})}/>
                  {errors.firstName && (
                    <div className="text-[#f30808]">entrer votre Prenom obligatoire</div>
                  )}
                  <label className='text-black flex justify-start ml-4 '>Nom :</label>
                  <input {...register("lastName")} />
                  {errors.lastName && (
                    <div className="text-[#f30808]">entrer votre nom obligatoire</div>
                  )}
                  <label className='text-black flex justify-start ml-4 '>Date de naissance  :
                  <div className='mb-6 w-2/5'>
                  <input type='date' {...register("dateOfBirth")} />
                  {errors.dateOfBirth && (
                    <div className="text-[#f30808]">entrer votre Prenom obligatoire</div>
                  )}
                  </div>
                  </label>
                  <input type="number" {...register("age")} />
                  <button type="submit" > Envoyer </button>
              </div>
          </form>
         
        
      </div>
    </div>
  )
}

export default FormUser