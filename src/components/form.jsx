import React, { useState, memo } from "react";
import { useForm } from "react-hook-form";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { formOne } from "../redux/formAction";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FormUser = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [etude,setEtude]= useState("");
  const [sexe,setSexe]= useState("");
  const [maritalStatus,setMaritalStatus]= useState("");
  
const handleEtude =(e)=>{
  setEtude(e.target.value);
  setValue('qualificationLevel', e.target.value)
}
const handleSexe =(e)=>{
  setSexe(e.target.value);
  setValue('gender', e.target.value)
}

const handleMaritalStatus =(e)=>{
  setMaritalStatus(e.target.value);
  setValue('maritalStatus', e.target.value)
}


 
  const [isChecked, setIsChecked] = useState(false);
  const formuser = async (data) => {
    dispatch(formOne(data));
    navigate("/premier");
  };

  console.log(errors)
  return (
    <div className="flex  justify-center gap-6  bg-[#d9d9d9]">
      <div className="flex gap-6 mt-8 min-w-full">
        <div className="flex flex-col gap-3 ml-16">
          <div className="etapesdiv h-24 w-24 relative ">
            {" "}
            <h1 className=" text-white text-4xl font-extrabold text-center relative top-2">
              1
            </h1>
          </div>
          <div className="etapesdivnul h-24 w-24 relative">
            <h1 className=" text-[#151516c4] text-4xl font-extrabold text-center relative top-2">
              2
            </h1>
          </div>
          <div className="etapesdivnul h-24 w-24 relative">
            <h1 className=" text-[#151516c4] text-4xl font-extrabold text-center relative top-2">
              3
            </h1>
          </div>
          <div className="etapesdivnul h-24 w-24 relative">
            <h1 className=" text-[#151516c4] text-4xl font-extrabold text-center relative top-2">
              4
            </h1>
          </div>
        </div>
        <form onSubmit={handleSubmit(formuser)} className="max-w-full w-4/5">
          <div className="bg-white border-solid border-2 rounded-md border-[#7cb8ff] md:flex gap-4 w-full mb-6">
            <label className="m-4 text-center text-xl">Prénom :</label>
            <div className="flex flex-col">
              <input
              className=" border-[#171616] border-solid boder-[5px] bg-[#f2eeeed0]"
                {...register("firstName", {
                  required: "entrer votre Prenom obligatoire",
                })}
              />
              {errors.firstName && (
                <div className="text-[#f30808]">
                  entrez votre Prénom obligatoire
                </div>
              )}
            </div>
            <label className="m-4 text-center text-xl ">Nom :</label>
            <div className="flex flex-col">
              <input
              className=" border-[#171616] border-solid boder-[5px] bg-[#f2eeeed0]"
                {...register("lastName", {
                  required: "entrer votre Nom obligatoire",
                })}
              />
              {errors.lastName && (
                <div className="text-[#f30808]">
                  entrez votre nom obligatoire
                </div>
              )}
            </div>
          </div>
          <div className="bg-white border-solid border-2 rounded-md border-[#7cb8ff] md:flex gap-4 w-full mb-6">
            <label className="m-4 text-center text-xl">
              Date de naissance :{" "}
            </label>

            <div className="flex flex-col">
              <input
              
                type="date"
                {...register("dateOfBirth", {
                  required: "entrer votre Date de naissance obligatoire",
                })}
                className=" border-[#171616] border-solid boder-[5px] bg-[#f2eeeed0]"
              />
              {errors.dateOfBirth && (
                <div className="text-[#f30808] whitespace-nowrap">
                  entrez votre Date de naissance obligatoire
                </div>
              )}
            </div>
          </div>
          <div className="bg-white border-solid border-2 rounded-md border-[#7cb8ff] md:flex gap-4 w-full mb-6">
            <label className="m-4 text-center text-xl">Niveau d'étude :</label>
            <div className="">
            <div className=" my-2 flex ">
                <FormControl className="w-[150px] mr-32 border-black bg-[#f2eeeed0] rounded-lg">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="!text-blue-950"
                    {...register("qualificationLevel", {
                      required: "entrez votre Nom obligatoire",
                    })}
                  >
                    Niveau d'étude:
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={etude}
                    label="Hypocorticisme"
                    onChange={handleEtude}
                  >
                    <MenuItem value={"Primaire"}>Primaire</MenuItem>
                      <MenuItem value={"College"}>College</MenuItem>
                       <MenuItem value={"Lycée"}>Lycée</MenuItem>
                       <MenuItem value={"Faculté"}>Faculté</MenuItem>
                  </Select>
                </FormControl>                
              </div>
              {errors.qualificationLevel && (
                <div className="text-[#f30808]">entrez obligatoire</div>
              )}
            </div>

            <label className="my-4 mx-2 ml-6 text-center text-xl ">Sexe :</label>
            <div className=" my-2 ">
            <FormControl className="w-[150px] mr-32 border-black  rounded-lg">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="!text-blue-950"
                    {...register("gender", {
                      required: "entrez ",
                    })}
                  >
                    Sexe :
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sexe}
                    label="Hypocorticisme"
                    onChange={handleSexe}
                    className="bg-[#f2eeeed0]"
                  >
                    <MenuItem value={"M"}>M</MenuItem>
                      <MenuItem value={"F"}>F</MenuItem>
                  </Select>
                </FormControl>  
              {errors.gender && (
                <div className="text-[#f30808]">
                  entrez votre sexe obligatoire
                </div>
              )}
            </div>
          </div>
          <div className="bg-white border-solid border-2 rounded-md border-[#7cb8ff]  gap-4 w-full mb-6">
            <div className="flex flex-co">
              <label className=" m-4 text-center text-xl ">
                Avez vous une occupation professionnelle ?
              </label>
              <input
                className="mt-4 ml-4"
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(!isChecked)}
              />
            </div>
            {isChecked && (
              <>
                <label className="m-4 text-center text-xl ">Profession :</label>
                <input
                className=" border-[#171616] border-solid boder-[5px] bg-[#f2eeeed0]"
                  {...register("occupation", {
                    required: "entrer votre Prenom obligatoire",
                  })}
                />
                {errors.occupation && (
                  <div className="text-[#f30808]">
                    entrez votre Prenom obligatoire
                  </div>
                )}
              </>
            )}
          </div>

          <div className="bg-white border-solid border-2 rounded-md border-[#7cb8ff] md:flex gap-4 w-full mb-6 pt-2">
            <label className="m-4 text-center text-xl">Etat civil :</label>
            <div className="">
            <FormControl className="w-[150px] my-2 py-2 border-black bg-[#f2eeeed0] rounded-lg">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="!text-blue-950"
                    {...register("maritalStatus", {
                      required: "entrez etat ",
                    })}
                  >
                    Etat civil :
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={maritalStatus}
                    label="maritalStatus"
                    onChange={handleMaritalStatus}
                  >
                    <MenuItem value={"Célibataire"}>Célibataire</MenuItem>
                      <MenuItem value={"Marié"}>Marié</MenuItem>
                      <MenuItem value={"Divorcé"}>Divorcé</MenuItem>
                  </Select>
                </FormControl>  
            
            {errors.maritalStatus && (
              <div className="text-[#f30808]">entrez obligatoire</div>
            )}
            </div>
          </div>

          {/* <div className='mb-6'></div> */}

          <button
            type="submit"
            className="relative flex end-4 top-[60px] left-[80%] bg-[#0a0a5e] h-12 w-24 rounded-lg"
          >
            <span className="text-white ml-6 mt-[9px]">Suivant</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default memo(FormUser);
