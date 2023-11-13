import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object()
  .shape({
    prenom: yup.string().required(),
    nom: yup.string().required(),

    age: yup.number().required(),
  })
  .required()

const FormUser = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema), 
      })
  return (
    <div className='flex justify-center '>
        <form onSubmit={handleSubmit()} className='w-8/12 bg-white bg-opacity-40 backdrop-blur-lg backdrop-filter backdrop-saturate-150 rounded-2xl'>
            <h1 className='text-2xl text-white'>Form to test input</h1>
            <div className='ml-6 w-4/5 flex justify-center flex-col'>
                <label className='text-white flex justify-start ml-4 '>Prenom :</label>
                <input {...register("prenom",{required:'entrer votre prenom obligatoire'})}/>
                {errors.prenom && (
                  <div className="text-red-500">entrer votre prenom obligatoire</div>
                )}
                <label className='text-white flex justify-start ml-4 '>Nom :</label>
                <input {...register("nom")} />
                <label className='text-white flex justify-start ml-4 '>Date de naissance  :</label>
                <input type="number" {...register("age")} />
                <button type="submit" > Envoyer </button>
            </div>
        </form>
    </div>
  )
}

export default FormUser