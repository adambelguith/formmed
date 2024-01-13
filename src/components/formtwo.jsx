import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { formTwo } from "../redux/formAction";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FormTwo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [isCheckedpersonnel, setIsChecked] = useState(false);
  const [isCheckedfimilial, setIsCheckedfamilial] = useState(false);
  const [ageantecdent, setAgeAntecedent] = useState();
  const [chirurgicaux, setchirurgicaux] = useState();
  const [obseretricaux, setobseretricaux] = useState();
  const [autrepreciser, setautrepreciser] = useState();
  const [troublestrutural, settroublestrutural] = useState();
  const [antecedentsPersonnelsList, setAntecedentsPersonnelsList] = useState(
    []
  );
  const submitform = async (data) => {
    dispatch(formTwo(data));
    navigate("/symapatique");
  };
  const handleAddAntecedentsPersonnels = () => {
    const formData = {
      ageantecedents: ageantecdent,
      chirurgicaux: chirurgicaux,
      obseretricaux: obseretricaux,
      autrepreciser: autrepreciser,
      troublestrutural: troublestrutural,
    };
    setAntecedentsPersonnelsList([...antecedentsPersonnelsList, formData]);
    setValue("antecedentPersonnel", antecedentsPersonnelsList);
    setIsChecked(false);
    setAgeAntecedent();
    setchirurgicaux();
    setobseretricaux();
    setautrepreciser();
    settroublestrutural();
  };
  const handleChangeAgeAntecedent = (e) => {
    setAgeAntecedent(e.target.value);
  };

  const handleDeleteItem = (index) => {
    // Create a copy of the current state array
    const updatedList = [...antecedentsPersonnelsList];

    // Remove the item at the specified index
    updatedList.splice(index, 1);

    // Update the state with the new array
    setAntecedentsPersonnelsList(updatedList);
  };

  console.log(antecedentsPersonnelsList);
  return (
    <div className="flex  justify-center gap-6  bg-[#d9d9d9] pb-4">
      <div className="flex gap-6 mt-8 min-w-full">
        <div className="flex flex-col gap-3 ml-16">
          <div className="etapevalid h-24 w-24 relative ">
            {" "}
            <h1 className=" text-white text-4xl font-extrabold text-center relative top-2">
              1
            </h1>
          </div>
          <div className="etapesdiv h-24 w-24 relative">
            <h1 className=" text-white text-4xl font-extrabold text-center relative top-2">
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

        <div className=" max-w-full w-4/5">
          <form onSubmit={handleSubmit(submitform)}>
            <div className="bg-white border-solid border-2 rounded-md border-[#7cb8ff]  gap-4 w-full mb-4">
              <div className="">
                <label className=" mx-4  text-center text-xl ">
                  Antécedents personnels ?
                </label>
                {isCheckedpersonnel ? (
                  <button
                    type="button"
                    className="border-[#9fa0a0a8] border-solid border-[5px] w-[32px] h-[32px] mt-2 rounded-xl"
                    onClick={() => setIsChecked(!isCheckedpersonnel)}
                  >
                    <span className="text-2xl font-extrabold mx-auto my-auto relative bottom-1">
                      -
                    </span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="border-[#9fa0a0a8] border-solid border-[5px] w-[32px] h-[32px] mt-2 rounded-xl"
                    onClick={() => setIsChecked(!isCheckedpersonnel)}
                  >
                    <span className="text-2xl font-extrabold mx-auto my-auto relative bottom-1">
                      +
                    </span>
                  </button>
                )}
                {/* <input
                  className="mt-4 ml-4"
                  type="checkbox"
                  checked={isCheckedpersonnel}
                  onChange={(e) => setIsChecked(!isCheckedpersonnel)}
                /> */}
              </div>

              {isCheckedpersonnel && (
                <div>
                  <div className="mt-8">
                    <div className="md:flex gap-4 w-full mb-6">
                      <label className="m-4 text-center text-xl">
                        Age d'Antécedents :
                      </label>
                      <div className="flex flex-col ">
                        <FormControl className="w-[200px] mr-32 border-black bg-white rounded-lg">
                          <InputLabel
                            id="demo-simple-select-label"
                            className="!text-blue-950"
                          >
                            Age d'Antécedents :
                          </InputLabel>
                          <Select
                            labelId={`demo-simple-select-label`}
                            id={`demo-simple-select`}
                            value={ageantecdent}
                            label="age"
                            onChange={handleChangeAgeAntecedent}
                          >
                            <MenuItem value="Petite Enfance">
                              {" "}
                              Petite Enfance
                            </MenuItem>
                            <MenuItem value="Scolaire"> Scolaire</MenuItem>
                            <MenuItem value="Adolaescence">
                              {" "}
                              Adolaescence
                            </MenuItem>
                            <MenuItem value="Puberté"> Puberté </MenuItem>
                            <MenuItem value="Adulte"> Adulte </MenuItem>
                          </Select>
                        </FormControl>
                        {/* <select
                          defaultValue={"DEFAULT"}
                          className="w-32 h-10 rounded-md mt-2"
                          {...register("ageantecedents", {
                            required: "entrer age obligatoire",
                            validate: (value) =>
                              value !== "" || "Invalid ageantecedents",
                          })}
                        >
                          <option
                            className="classstyle"
                            value="DEFAULT"
                            disabled
                          >
                            Select age
                          </option>
                          <option value="Petite Enfance">Petite Enfance</option>
                          <option value="Scolaire">Scolaire</option>
                          <option value="Adolaescence">Adolaescence</option>
                          <option value="Puberté">Puberté</option>
                          <option value="Adulte">Adulte</option>
                        </select> */}
                      </div>
                    </div>

                    <div className=" md:flex gap-4 w-full mb-6">
                      <label className="m-4 text-center text-xl">
                        Chirurgicaux :
                      </label>
                      <div className="flex flex-col ">
                        <textarea
                          className="w-64"
                          onChange={(e) => {
                            setchirurgicaux(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="md:flex gap-4 w-full mb-6">
                      <label className="m-4 text-center text-xl">
                        Obserétricaux :
                      </label>
                      <div className="flex flex-col ">
                        <textarea
                          className="w-64"
                          onChange={(e) => {
                            setobseretricaux(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="md:flex gap-4 w-full mb-6">
                      <label className="m-4 text-center text-xl">
                        Autre préciser :
                      </label>
                      <div className="flex flex-col ">
                        <textarea
                          className="w-64"
                          onChange={(e) => {
                            setautrepreciser(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="md:flex gap-4 w-full mb-6">
                      <label className="m-4 text-center text-xl">
                        Trouble Structural :
                      </label>
                      <div className="flex flex-col ">
                        <textarea
                          className="w-64"
                          onChange={(e) => {
                            settroublestrutural(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    className="mx-auto mt-2 ml-8 mb-2 w-32 h-12 bg-[#4da6ea] rounded-xl"
                    type="button"
                    onClick={handleAddAntecedentsPersonnels}
                  >
                    <span className="text-white">Ajouter nouveau</span>
                  </button>
                </div>
              )}
            </div>
            {antecedentsPersonnelsList && (
              <div className=" my-4">
                {antecedentsPersonnelsList.map((item, index) => (
                  <div className="my-2 rounded-xl bg-[#7a85889b] h-auto pb-2 flex">
                    <div className="">
                      <div className="flex">
                        <p className="mx-4 mt-2 text-[#edf2f7] font-semibold">
                          ageantecedents:{" "}
                          {item.ageantecedents.length > 16
                            ? item.ageantecedents
                                .slice(0, 16)
                                .split(" ")
                                .slice(0, -1)
                                .join(" ")
                                .concat(" ...")
                            : item.ageantecedents}
                          ,{" "}
                        </p>
                        <p className="mx-2 mt-2 text-[#edf2f7] font-semibold">
                          chirurgicaux:{" "}
                          {item.chirurgicaux.length > 16
                            ? item.chirurgicaux
                                .slice(0, 16)
                                .split(" ")
                                .slice(0, -1)
                                .join(" ")
                                .concat(" ...")
                            : item.chirurgicaux}
                          ,{" "}
                        </p>
                        <p className="mx-2 mt-2 text-[#edf2f7] font-semibold">
                          obseretricaux:{" "}
                          {item.obseretricaux.length > 16
                            ? item.obseretricaux
                                .slice(0, 16)
                                .split(" ")
                                .slice(0, -1)
                                .join(" ")
                                .concat(" ...")
                            : item.obseretricaux}
                          ,{" "}
                        </p>
                      </div>
                      <div className="flex">
                        <p className="mx-2 mt-2 text-[#edf2f7] font-semibold">
                          autrepreciser:{" "}
                          {item.autrepreciser.length > 16
                            ? item.autrepreciser
                                .slice(0, 16)
                                .split(" ")
                                .slice(0, -1)
                                .join(" ")
                                .concat(" ...")
                            : item.autrepreciser}
                          ,{" "}
                        </p>
                        <p className="mx-2 mt-2 text-[#edf2f7] font-semibold">
                          troublestrutural:{" "}
                          {item.troublestrutural.length > 16
                            ? item.troublestrutural
                                .slice(0, 16)
                                .split(" ")
                                .slice(0, -1)
                                .join(" ")
                                .concat(" ...")
                            : item.troublestrutural}
                          ,{" "}
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className="mx-2 mt-2 text-[#edf2f7] font-semibold bg-red-500 px-2 py-1 rounded cursor-pointer"
                        onClick={() => handleDeleteItem(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="bg-white border-solid border-2 rounded-md border-[#7cb8ff]  gap-4 w-full mb-6">
              <div className="">
                <label className=" m-4 text-center text-xl ">
                  Antécedents familiaux ?
                </label>
                <input
                  className="mt-4 ml-4"
                  type="checkbox"
                  checked={isCheckedfimilial}
                  onChange={(e) => setIsCheckedfamilial(!isCheckedfimilial)}
                />
              </div>
              {isCheckedfimilial && (
                <div className="flex flex-col ml-6 mb-2">
                  <select
                    defaultValue={"DEFAULT"}
                    className="w-32 h-10 rounded-md mt-2"
                    {...register("familialantecedent", {
                      required: "entrer age obligatoire",
                      validate: (value) =>
                        value !== "" || "Invalid ageantecedents",
                    })}
                  >
                    <option className="classstyle" value="" disabled>
                      Select
                    </option>
                    <option value="pere">Père</option>
                    <option value="mere">Mère</option>
                  </select>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="relative flex end-4 top-[100px] left-[60%] bg-[#0a0a5e] h-12 w-24 rounded-lg"
            >
              {" "}
              <span className="text-white ml-6 mt-[9px]">Suivant</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormTwo;
