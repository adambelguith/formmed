import React,{useState, memo } from 'react'
import { useForm } from "react-hook-form"
import '../App.css'


  
const FormUser = ({ onSubmit }) => {

    const { register, handleSubmit, formState: { errors }, } = useForm()
  return (
    <div className='flex  justify-center  '>
      <div className='flex flex-col w-8/12'>

        <div className='flex flex-row justify-center mb-8'>
          <div className='etapesdiv h-24 w-24 relative '> <h1 className='mt-8 ml-8 text-white text-xl'>etape1</h1></div>
          <div className='etapesdivnul h-24 w-24 relative'><h1 className='mt-8 ml-8 text-[#151516c4] text-xl'>etape 2</h1></div>
        </div>
          <form onSubmit={handleSubmit(onSubmit)} className='w-full  bg-[#ffc881] bg-opacity-40 backdrop-blur-lg backdrop-filter backdrop-saturate-150 rounded-2xl'>
              <div className='ml-6 w-4/5 flex  flex-col'>
                  <label className='text-white flex justify-start ml-4 mt-6 '>Prénom :</label>
                  <input 
                    placeholder='Prénom'
                    {...register("firstName",{required:'entrer votre Prenom obligatoire'})}/>
                  {errors.firstName && (
                    <div className="text-[#f30808]">entrer votre Prénom obligatoire</div>
                  )}
                  <label className='text-white flex justify-start ml-4 '>Nom :</label>
                  <input 
                  placeholder='votre nom'
                  {...register("lastName",{required:'entrer votre Nom obligatoire'})} />
                  {errors.lastName && (
                    <div className="text-[#f30808]">entrer votre nom obligatoire</div>
                  )}
                  <div className='md:ml-6 w-4/5 flex flex-col md:flex-row'>
                  <label className='text-white ml-4 whitespace-nowrap'>Date de naissance  : </label>
                    
                  <div className='flex flex-col'>
                  <input type='date' {...register("dateOfBirth",{required:'entrer votre Date de naissance obligatoire'})} className='text-black md:ml-6' />
                  {errors.dateOfBirth && (
                    <div className="text-[#f30808] whitespace-nowrap">entrer votre Date de naissance obligatoire</div>
                  )}
                  </div>
                 
                  </div>
                  <div className='flex flex-row md:mt-8 '>
                <label className='text-white flex justify-start ml-4 mt-4 '>Age:</label>
                <input
                 type="number" 
                 defaultValue={"18"}
                 className='w-16 ml-4'
                {...register("age",{required:'entrez obligatoire'})} />
                {errors.age && (
                  <div className="text-[#f30808] ml-6">entrez obligatoire</div>
                )}
                </div>
                  
                  {/* <input type="number" {...register("age")} /> */}

                  <label className='text-white flex justify-start ml-4 '>Sexe :</label>
                  <select
                  className="w-2/5 h-6 rounded-md"
                  {...register('gender', {
                    required: 'entrer votre sexe obligatoire',
                    validate: (value) => value !== '' || 'Invalid gender',
                  })}
                  >
                  <option className='classstyle' value="" disabled selected>M ou F</option>
                  <option value="M">M</option>
                  <option value="F">F</option>
                </select>
                {errors.gender && (
                  <div className="text-[#f30808]">entrer votre sexe obligatoire</div>
                )}
                <div className='mb-6'></div>

                  
              </div>
              <button type="submit" className='absolute flex end-4 top-[105%]  bg-[#0a0a5e] h-12 w-24 rounded-lg' > <span className='text-white ml-6 mt-[9px]' >Suivant</span></button>
          </form>
        
      </div>
    </div>
  )
}

export default memo(FormUser);