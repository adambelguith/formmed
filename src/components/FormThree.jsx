import React, { useState } from "react";
import { useForm } from "react-hook-form";
import plus from "../assets/plus.svg";
import moin from "../assets/moin.svg";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import questions from './question'
import { formThree } from "../redux/formAction";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FormThree = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [totals, setTotals] = useState({ alpha: 0, para: 0, beta: 0 });
  const [pourcealpha, setalpha] = useState();
  const [pourcepara, setpara] = useState();
  const [pourcebeta, setbeta] = useState();
  const [show, setshow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    const newTotals = { alpha: 0, para: 0, beta: 0 };

    Object.keys(selectedAnswers).forEach((questionId) => {
      const selectedChoices = selectedAnswers[questionId];
      
      // Assuming 'classification' is an array associated with each question
      selectedChoices.forEach((selectedChoice) => {
        questions.forEach((question) => {
          const classificationIndex = question.choices.indexOf(selectedChoice);
  
          if (classificationIndex !== -1) {
            const classification = question.classification[classificationIndex];
            newTotals[classification]++;
          }
        });
      });
    });
  
    setTotals(newTotals);
    setalpha((newTotals.alpha * 100) / 23);
    setpara((newTotals.para * 100) / 23);
    setbeta((newTotals.beta * 100) / 23);
    setshow(true);
  };

  const calculateTotals = () => {
    dispatch(formThree(selectedAnswers))
    navigate("/endocrine");
  };

  const handleChange = (questionId) => (event) => {
    setSelectedAnswers((prevValues) => ({
      ...prevValues,
      [questionId]: event.target.value,
    }));
  };

  return (
    <div className="">
      <div className="flex  justify-center gap-6  bg-[#d9d9d9] pb-4">
        <div className="flex gap-6 mt-8 min-w-full">
          <div className="flex flex-col gap-3 ml-16">
            <div className="etapevalid h-24 w-24 relative ">
              {" "}
              <h1 className=" text-white text-4xl font-extrabold text-center relative top-2">
                1
              </h1>
            </div>
            <div className="etapevalid h-24 w-24 relative">
              <h1 className=" text-white text-4xl font-extrabold text-center relative top-2">
                2
              </h1>
            </div>
            <div className="etapesdiv h-24 w-24 relative">
              <h1 className=" text-white text-4xl font-extrabold text-center relative top-2">
                3
              </h1>
            </div>
            <div className="etapesdivnul h-24 w-24 relative">
            <h1 className=" text-[#151516c4] text-4xl font-extrabold text-center relative top-2">
              4
            </h1>
          </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-full w-4/5">
            {questions.map((question) => (
              <div
                key={question.id}
                className="bg-white border-solid border-2 rounded-md border-[#7cb8ff]  gap-4 w-full mb-6 pb-2"
              >
                <div className="ml-12 my-2 ">
                <FormControl className="w-[450px] mr-32 border-black bg-white rounded-lg">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="!text-blue-950"
                  >
                    {question.id}
                  </InputLabel>
                  <Select
                    labelId={`demo-simple-select-label-${question.id}`}
                    id={`demo-simple-select-${question.id}`}
                    value={selectedAnswers[question.id] || []}
                    label={question.id}
                    onChange={handleChange(question.id)}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                    multiple
                  >
                    {question.choices.map((name)=>(
                       <MenuItem key={name} value={name}>
                       <Checkbox checked={selectedAnswers[question.id]?.indexOf(name)> -1} />
                       <ListItemText primary={name} />
                     </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/* {selectedAnswers[question.id]?.length>0 &&( */}
                <div className="m-2 flex">
                  {selectedAnswers[question.id]?.map((select)=>(
                  
                    <h1 className="text-2xl font-bolt text-[#39c203]">{select} ,</h1>
                  
                  ))}
                 </div>
                {/* )}            */}
              </div>
              </div>
            ))}

            <button
              type="submit"
              className="relative flex end-4  left-[40%] bg-[#0a0a5e] h-12 w-24 rounded-lg"
            >
              {" "}
              <span className="text-white ml-5 mt-[9px]">Calculate</span>
            </button>
          </form>
        </div>
      </div>
      {show && (
        <div className="bg-white border-solid border-2 rounded-md border-[#7cb8ff] ml-24 gap-4 mb-6 pb-2 flex w-4/5 justify-center mt-10">
          <div className="">
            <p className="m-4 text-center text-2xl">Alpha Sympathique</p>
            {pourcealpha > 60 ? (
              <div className="flex gap-4 justify-center">
                <img className="" src={plus} alt="" />
                <img className="" src={plus} alt="" />
              </div>
            ) : pourcealpha > 30 ? (
              <div className="flex justify-center">
                <img className="" src={plus} alt="" />
              </div>
            ) : (
              <div className="flex justify-center">
                <img className="" src={moin} alt="" />
              </div>
            )}
          </div>
          <div className="">
            <p className="m-4 text-center text-2xl">Para Sympathique</p>
            {pourcepara > 60 ? (
              <div className="flex gap-4 justify-center">
                <img className="" src={plus} alt="" />
                <img className="" src={plus} alt="" />
              </div>
            ) : pourcepara > 30 ? (
              <div className="flex justify-center">
                <img className="" src={plus} alt="" />
              </div>
            ) : (
              <div className="flex justify-center">
                <img className="" src={moin} alt="" />
              </div>
            )}
          </div>

          <div className="">
            <p className="m-4 text-center text-2xl">Béta Symathique</p>
            {pourcebeta > 60 ? (
              <div className="flex gap-4 justify-center ">
                <img className="" src={plus} alt="" />
                <img className="" src={plus} alt="" />
              </div>
            ) : pourcebeta > 30 ? (
              <div className="flex justify-center">
                <img className="" src={plus} alt="" />
              </div>
            ) : (
              <div className="flex justify-center">
                <img className="" src={moin} alt="" />
              </div>
            )}
          </div>
        </div>
      )}
      <button
        onClick={calculateTotals}
        className="relative flex end-4 top-[30px] left-[80%] bg-[#0a0a5e] h-12 w-24 rounded-lg"
      >
        <span className="text-white ml-6 mt-[9px]">Suivant</span>
      </button>
    </div>
  );
};

export default FormThree;
