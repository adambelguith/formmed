import React,{useState} from 'react'
import { useForm } from "react-hook-form"
import '../App.css'

  
const FormTwo = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='flex  justify-center  '>
    <div className='flex flex-col w-8/12'>

      <div className='flex flex-row justify-center mb-8'>
        <div className='etapesdiv h-24 w-24 relative '> <h1 className='mt-8 ml-8 text-white text-xl'>etape1</h1></div>
        <div className='etapesdiv h-24 w-24 relative'><h1 className='mt-8 ml-8 text-white text-xl'>etape 2</h1></div>
      </div>
        <form onSubmit={handleSubmit(onSubmit)} className=' bg-[#ffc881] bg-opacity-40 backdrop-blur-lg backdrop-filter backdrop-saturate-150 rounded-2xl'>
            <div className='ml-6 w-4/5 flex  flex-col'>
            <label className='text-white flex justify-start ml-4 mt-4'>Niveau d'étude :</label>
                <select
                className="w-2/5 h-6 rounded-md"
                {...register('qualificationLevel', {
                  required: 'entrer votre sexe obligatoire',
                  validate: (value) => value !== '' || 'Invalid qualificationLevel'
                })}
                >
                <option className='classstyle' value="" disabled selected>Select étude</option>
                <option value="Lycée">Lycée</option>
                <option value="Faculté">Faculté</option>
              </select>
              {errors.qualificationLevel && (
                <div className="text-[#f30808]">entrer obligatoire</div>
              )}
                <div className='flex flex-row'>
                <label className='text-white flex justify-start md:ml-4 mt-6 '>Avez vous une occupation professionnelle ?</label>
                <input
                  className='mt-8 ml-4'
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e)=> setIsChecked(!isChecked)}
                />
                </div>
                  {isChecked && (
                    <>
                     <label className='text-white flex justify-start ml-4 '>Profession :</label>
                    <input 
                    placeholder='Profession'
                    {...register("occupation",{required:'entrer votre Prenom obligatoire'})}
                    />
                    {errors.occupation && (
                      <div className="text-[#f30808]">entrez votre Prenom obligatoire</div>
                    )}
                    </>
                  )}

              <label className='text-white flex justify-start ml-4 mt-4'>Etat civil :</label>
                <select
                className="w-2/5 h-6 rounded-md"
                {...register('maritalStatus', {
                  required: 'entrer votre sexe obligatoire',
                  validate: (value) => value !== '' || 'Invalid maritalStatus'
                })}
                >
                  <option className='classstyle' value='' disabled selected>C ou M ou D</option>
                <option value="C">C</option>
                <option value="M">M</option>
                <option value="D">D</option>
              </select>
              {errors.maritalStatus && (
                <div className="text-[#f30808]">entrez obligatoire</div>
              )}
              
                <div className='flex flex-row md:mt-8 '>
                <label className='text-white flex justify-start ml-4 mt-4 '>Nombre d'enfant:</label>
                <input
                 type="number" 
                 defaultValue={"0"}
                 className='w-16 ml-4'
                {...register("children",{required:'entrer votre Nom obligatoire'})} />
                {errors.children && (
                  <div className="text-[#f30808] ml-6">entrer votre nom obligatoire</div>
                )}
                </div>

                  <div className='mb-6 flex flex-col'>
                <label className='text-white whitespace-nowrap'>Raison de la consultation : </label> 
                <textarea
                  placeholder='Raison'
                  {...register("visitReason",{required:'entrer votre Date de naissance obligatoire'})} className='text-black md:ml-6' />
                {errors.visitReason && (
                  <div className="text-[#f30808] whitespace-nowrap">entrer votre Date de naissance obligatoire</div>
                )}
                </div>

            </div>
            <button type="submit" className='absolute flex end-4 top-[105%]  bg-[#0a0a5e] h-12 w-24 rounded-lg' > <span className='text-white ml-6 mt-[9px]' >Suivant</span></button>
        </form>
      
    </div>
  </div>
  )
}

export default FormTwo