import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    age: yup.number().required(),
  })
  .required()

const FormUser = () => {
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema), 
      })
  return (
    <div className='flex justify-center '>
        <form onSubmit={handleSubmit()} className='flex flex-col w-9/12 bg-white bg-opacity-40 backdrop-blur-lg backdrop-filter backdrop-saturate-150 rounded-2xl'>
            <h1 className='text-2xl text-white'>Form to test input</h1>
            <div>
                <label className='text-white'>Prenom</label>
                <input {...register("name")} className='flex justify-center '/>
                <input type="number" {...register("age")} />
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}

export default FormUser