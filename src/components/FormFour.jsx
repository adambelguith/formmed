import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { formFour } from "../redux/formAction";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

const hypocorticismenames = [
  "pigmentation exagérée des parties découvertes",
  "pigmentation des zones de frottement",
  "pigmentation exagérée des cicatrices",
  "cernes des yeux",
  "ichtyoses des jambes",
  "irritation des yeux",
  "asthénie matinale",
  "comportement dépressif",
  "peau fragile, fine ",
  "fragilité des vaisseaux(pétéchies)",
  "fragilité des vaisseaux(ecchymoses)",
  "visage érythrosique",
  "bras et jambes minces",
  "fonte musculaire"
];
const hyperacthnames= [
  "vergetures pourprées",
  "nodules lépromateux",
  "acanthosis negrans",
  "hypertrichoses (lèvre, menton, joue)",
];
const hyperadhnames = [
  "œdème du visage",
  "rétention d’eau",
  "hyper aldostérone",
  "œdème paupière inférieure",
  "œdème paupière supérieure",
];
const hypothyroidienames =[
  "peau sèche",
  "peau froide",
  "peau rugueuse",
  "coloration jaune orange des paumes des mains",
  "cheveux fins fragiles soyeux",
  "chute des cheveux",
  "ongles brillants mince cassants",
  "décollement de l’ongle niveau lunule",
  "frilosité",
  "cherche a se couvrir",
  "extrémités froides",
];
const hyperthyroidienames =[
  "peau douce chaude",
  "peau veloutée moite",
  "érythème facioplantaire",
  "cils long",
  "queue de sourcils abondant",
  "cheveux volumineux",
  "hypersudation",
  "extrémités chaudes",
  "tremblement",
  "exophtalmie",
  "goitre",
  "amaigrissement",
];
const hypoosteogenienames = [
  "peau sèche ridée",
  "peau écailleuse",
  "pellicules sèches",
  "chute des cils",
  "chute des cheveux",
  "obésité récente",
];
const hyperosteogenienames=[
  "peau hydratée",
  "peau souple, fine, douce",
  "seins développés",
  "cheveux fournis",
  "cils longs",
  "odeur forte des sueurs",
  "règles abondantes",
  "aréole large",
  "hyperlaxité ligamentaire",
  "cycle court",
  "caillot début des règles",
  "galactorrhée",
];

const hyperFSHnames = [
  "cils longs",
  "mastodynie surtout à droite",
  "seins volumineux",
  "coude et genou rêche",
  "folliculite pré sternale",
  "cycle très court",
  "empattement inféro-interne des genoux d’aspect cellulitique",
];
const gonadiquesnames = [
  "poils épais bouclés",
  "poils marge anale",
  "peau épaisse",
  "séborrhée du front",
  "alopécie du front temporal",
  "hirsutisme",
  "obésité androïde",
  "acnés résistantes",
  "voix rauque",
  "résistant à l’effort",
  "bonne endurance"
];
const androgenesnames = [
  "poils long brillant souple",
  "moustache",
  "sillon inter sourcilier",
  "barbe au menton",
  "poils phalanges, avant-bras",
  "poils sacrés",
  "poils inter mammaires et centro-pubien",
];
const hypoandrogenienames =[
  "baisse de l’endurance",
  "perte de la pilosité",
  "baisse de l’érection matinale",
  "augmentation graisse viscérale",
  "baisse de la libido",
  "perte de concentration",
  "ostéopénie"
];
const progesteronenames =[
  "caillot fin des règles",
  "cycle long",
  "tensions des seins",
  "œdème par rétention",
];
const hypoprogesteronenames =[
  "mastose cyclique",
  "tous les signes d’hyper ostéogénie",
];
const hyperghnames = [
  "odeur alliacée",
  "peau épaisse rugueuse",
  "ongles sans lunule striés au centre",
  "dystrophie de la plante du pieds",
  "empreintes dentaire aux bords de la langue",
  "fissures anales",
  "verrues",
  "mycose",
  "taille des extrémités développée"
];
const prolactinenames = [
  "peau laiteuse",
  "dos des pieds infiltrés",
  "furoncles",
  "poils ligne blanche",
  "sécrétion laiteuse",
  "cheveux blancs abondant",
  "indifférence émotionnelle",
  "mamelons sortis",
];
const insulinenames = [
  "aime les sucres",
  "coup de pompe",
  "fringale",
  "transpire beaucoup",
  "lipothymie",
];
const immunitairenames =[
  "infections fréquentes au jeune âge",
  "durée de rétablissement prolongée",
  "évolution aux pathologies chroniques",
  "maladies allergiques",
  "maladies auto-immunes",
  "maladies cancéreuses",
  "poly adénopathies",
  "grosse rate"
]

const FormFour = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitform = async (data) => {
    console.log(data);
    dispatch(formFour(data));
    navigate("/calcultor");
    // navigate("/endocrine");
  };
  const back = () =>{
    navigate('/symapatique');
  }
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
  const [hypocorticisme, setHypocorticisme] = useState([]);
  const [hyperacth, setHyperacth] = useState([]);
  const [hyperadh, setHyperadh] = useState([]);
  const [hypothyroidie, setHypothyroidie] = useState([]);
  const [hyperthyroidie, setHyperthyroidie] = useState([]);
  const [hypoosteogenie, setHypoosteogenie] = useState([]);
  const [hyperosteogenie, setHyperosteogenie] = useState([]);
  const [hyperFSH, setHyperFSH] = useState([]);
  const [gonadiques, setGonadiques] = useState([]);
  const [androgenes, setAndrogenes] = useState([]);
  const [hypoandrogenie, setHypoandrogenie] = useState([]);
  const [progesterone, setProgesterone] = useState([]);
  const [hypoprogesterone, setHypoprogesterone] = useState([]);
  const [hypergh, setHypergh] = useState([]);
  const [prolactine, setProlactine] = useState([]);
  const [insuline, setInsuline] = useState([]);
  const [immunitaire, setImmunitaire] = useState([]);

  const handlehypocorticisme = (e) => {
    const {
      target: { value },
    } = e;
    setHypocorticisme(typeof value === "string" ? value.split(",") : value);
    setValue(
      "hypocorticisme",
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handlehyperacth = (e) => {
    const {
      target: { value },
    } = e;
    setHyperacth(typeof value === "string" ? value.split(",") : value);
    setValue("hyperacth", typeof value === "string" ? value.split(",") : value);
  };
  const handlehyperadh = (e) => {
    const {
      target: { value },
    } = e;
    setHyperadh(typeof value === "string" ? value.split(",") : value);
    setValue("hyperadh", typeof value === "string" ? value.split(",") : value);
  };
  const handlehypothyroidie = (e) => {
    const {
      target: { value },
    } = e;
    setHypothyroidie(typeof value === "string" ? value.split(",") : value);
    setValue("hypothyroidie", typeof value === "string" ? value.split(",") : value);
  };
  const handlehyperthyroidie = (e) => {
    const {
      target: { value },
    } = e;
    setHyperthyroidie(typeof value === "string" ? value.split(",") : value);
    setValue("hyperthyroidie", typeof value === "string" ? value.split(",") : value);
  };
  const handlehypoosteogenie = (e) => {
    const {
      target: { value },
    } = e;
    setHypoosteogenie(typeof value === "string" ? value.split(",") : value);
    setValue("hypoosteogenie", typeof value === "string" ? value.split(",") : value);
  };
  const handlehyperosteogenie = (e) => {
    const {
      target: { value },
    } = e;
    setHyperosteogenie(typeof value === "string" ? value.split(",") : value);
    setValue("hyperosteogenie", typeof value === "string" ? value.split(",") : value);
  };
  const handleHyperFSH = (e) => {
    const {
      target: { value },
    } = e;
    setHyperFSH(typeof value === "string" ? value.split(",") : value);
    setValue("hyperfsh", typeof value === "string" ? value.split(",") : value);
  };
  const handleGonadiques = (e) => {
    const {
      target: { value },
    } = e;
    setGonadiques(typeof value === "string" ? value.split(",") : value);
    setValue("gonadiques", typeof value === "string" ? value.split(",") : value);
  };
  const handleAndrogenes = (e) => {
    const {
      target: { value },
    } = e;
    setAndrogenes(typeof value === "string" ? value.split(",") : value);
    setValue("androgenes", typeof value === "string" ? value.split(",") : value);
  };
  const handleHypoandrogenie = (e) => {
    const {
      target: { value },
    } = e;
    setHypoandrogenie(typeof value === "string" ? value.split(",") : value);
    setValue("hypoandrogenie", typeof value === "string" ? value.split(",") : value);
  };
  const handleProgesterone = (e) => {
    const {
      target: { value },
    } = e;
    setProgesterone(typeof value === "string" ? value.split(",") : value);
    setValue("progesterone", typeof value === "string" ? value.split(",") : value);
  };
  const handleHypoprogesterone = (e) => {
    const {
      target: { value },
    } = e;
    setHypoprogesterone(typeof value === "string" ? value.split(",") : value);
    setValue("hypoprogesterone", typeof value === "string" ? value.split(",") : value);
  };
  const handleHypergh = (e) => {
    const {
      target: { value },
    } = e;
    setHypergh(typeof value === "string" ? value.split(",") : value);
    setValue("hypergh", typeof value === "string" ? value.split(",") : value);
  };
  const handleProlactine = (e) => {
    const {
      target: { value },
    } = e;
    setProlactine(typeof value === "string" ? value.split(",") : value);
    setValue("prolactine", typeof value === "string" ? value.split(",") : value);
  };
  const handleInsuline = (e) => {
    const {
      target: { value },
    } = e;
    setInsuline(typeof value === "string" ? value.split(",") : value);
    setValue("insuline", typeof value === "string" ? value.split(",") : value);
  };
  const handleImmunitaire = (e) => {
    const {
      target: { value },
    } = e;
    setImmunitaire(typeof value === "string" ? value.split(",") : value);
    setValue("immunitaire", typeof value === "string" ? value.split(",") : value);
  };
  const formone = useSelector((state) => state.formone);
  const formtwo = useSelector((state) => state.formtwo);
  const formthree = useSelector((state) => state.formthree);
  const formfour = useSelector((state) => state.formfour);
  const forms = useSelector((state) => state);
  const commun = [formone, formtwo, formthree,formfour];
  const apiPayload = {};
  commun.forEach((form) => {
    const formKey = Object.keys(form)[0]; // Extract the key (e.g., "form1")
    const formData = form[formKey];

    apiPayload[formKey] = formData;
  });
  console.log(apiPayload)
  axios.defaults.headers.post["Content-Type"] =
    "application/json;charset=utf-8";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

  const envoyer = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/patients/create", apiPayload);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
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
            <div className="etapevalid h-24 w-24 relative">
              <h1 className=" text-white text-4xl font-extrabold text-center relative top-2">
                3
              </h1>
            </div>
            <div className="etapesdiv h-24 w-24 relative">
              <h1 className=" text-white text-4xl font-extrabold text-center relative top-2">
                4
              </h1>
            </div>
          </div>

          <div className=" max-w-full w-4/5">
            <form onSubmit={handleSubmit(submitform)}>
              <div className="ml-6">
                <h1 className=" text-3xl">Profil endocrine</h1>
              </div>
              <div className="ml-10">
                <h2 className="text-lg">- Les surrénales : </h2>
              </div>
              <div className="ml-12 my-2 flex ">
                <FormControl className="w-[450px] mr-32 border-black bg-white rounded-lg">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="!text-blue-950"
                  >
                    Hypocorticisme
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={hypocorticisme}
                    label="Hypocorticisme"
                    onChange={handlehypocorticisme}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                    multiple
                  >
                    {hypocorticismenames.map((name)=>(
                       <MenuItem key={name} value={name}>
                       <Checkbox checked={hypocorticisme.indexOf(name) > -1} />
                       <ListItemText primary={name} />
                     </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {hypocorticisme.length>0 &&(
                  <div className="m-2 flex">
                    <p className="text-lg font-semibold pr-2 mt-[2px]"> Hypocorticisme :</p>
                  <h1 className="text-2xl font-bolt text-[#39c203]">{hypocorticisme.length}</h1>
                </div>
                )}
                
              </div>
              <div className="my-2 ml-12 flex">
                <FormControl className="w-[450px] mr-32 bg-white rounded-lg">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="!text-blue-950"
                  >
                    Hyper ACTH et MSH associé{" "}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={hyperacth}
                    label="Hyper ACTH et MSH associé "
                    onChange={handlehyperacth}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                    multiple
                  >
                    {hyperacthnames.map((name) =>(
                      <MenuItem key={name} value={name}>
                      <Checkbox checked={hyperacth.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {hyperacth.length>0 &&(
                  <div className="m-2 flex">
                    <p className="text-lg font-semibold pr-2 mt-[2px]"> Hyper ACTH et MSH :</p>
                  <h1 className="text-2xl font-bolt text-[#39c203]">{hyperacth.length}</h1>
                </div>
                )}
              </div>
              <div className="my-2 ml-12 flex">
                <FormControl className="w-[450px] mr-32 bg-white rounded-lg">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="!text-blue-950"
                  >
                    Hyper ADH{" "}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={hyperadh}
                    label="Hyper ADH"
                    onChange={handlehyperadh}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                    multiple
                  >
                    {hyperadhnames.map((name) =>(
                      <MenuItem key={name} value={name}>
                      <Checkbox checked={hyperadh.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {hyperadh.length>0 &&(
                  <div className="m-2 flex">
                    <p className="text-lg font-semibold pr-2 mt-[2px]"> Hyper ADH :</p>
                  <h1 className="text-2xl font-bolt text-[#39c203]">{hyperadh.length}</h1>
                </div>
                )}
              </div>
              <div className="ml-10">
                <h2 className="text-lg">- La thyroïde : </h2>
              </div>
              <div className="my-2 ml-12 flex">
                <FormControl className="w-[450px] mr-32 bg-white rounded-lg">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="!text-blue-950"
                  >
                    hypothyroïdie{" "}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={hypothyroidie}
                    label="hypothyroidie"
                    onChange={handlehypothyroidie}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                    multiple
                  >
                    {hypothyroidienames.map((name) =>(
                      <MenuItem key={name} value={name}>
                      <Checkbox checked={hypothyroidie.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {hypothyroidie.length>0 &&(
                  <div className="m-2 flex">
                    <p className="text-lg font-semibold pr-2 mt-[2px]"> Hypothyroïdie :</p>
                  <h1 className="text-2xl font-bolt text-[#39c203]">{hypothyroidie.length}</h1>
                </div>
                )}
              </div>
              <div className="my-2 ml-12 flex">
                <FormControl className="w-[450px] mr-32 bg-white rounded-lg">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="!text-blue-950"
                  >
                    Hyperthyroïdie{" "}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={hyperthyroidie}
                    label="hyperthyroidie"
                    onChange={handlehyperthyroidie}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                    multiple
                  >
                    {hyperthyroidienames.map((name) =>(
                      <MenuItem key={name} value={name}>
                      <Checkbox checked={hyperthyroidie.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {hyperthyroidie.length>0 &&(
                  <div className="m-2 flex">
                    <p className="text-lg font-semibold pr-2 mt-[2px]"> Hyperthyroïdie :</p>
                  <h1 className="text-2xl font-bolt text-[#39c203]">{hyperthyroidie.length}</h1>
                </div>
                )}
              </div>
              <div className="ml-10">
                <h2 className="text-lg">- Les gonades : </h2>
              </div>
              <div className="my-2 ml-12 flex">
                <FormControl className="w-[450px] mr-32 bg-white rounded-lg">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="!text-blue-950"
                  >
                    Hypo ostéogénie{" "}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={hypoosteogenie}
                    label="hypoosteogenie"
                    onChange={handlehypoosteogenie}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                    multiple
                  >
                    {hypoosteogenienames.map((name) =>(
                      <MenuItem key={name} value={name}>
                      <Checkbox checked={hypoosteogenie.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {hypoosteogenie.length>0 &&(
                  <div className="m-2 flex">
                    <p className="text-lg font-semibold pr-2 mt-[2px]"> Hypo ostéogénie :</p>
                  <h1 className="text-2xl font-bolt text-[#39c203]">{hypoosteogenie.length}</h1>
                </div>
                )}
              </div>
              <div className="my-2 ml-12 flex">
                <FormControl className="w-[450px] mr-32 bg-white rounded-lg">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="!text-blue-950"
                  >
                    Hyper ostéogénie{" "}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={hyperosteogenie}
                    label="hyperosteogenie"
                    onChange={handlehyperosteogenie}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                    multiple
                  >
                    {hyperosteogenienames.map((name) =>(
                      <MenuItem key={name} value={name}>
                      <Checkbox checked={hyperosteogenie.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {hyperosteogenie.length>0 &&(
                  <div className="m-2 flex">
                    <p className="text-lg font-semibold pr-2 mt-[2px]"> Hypo ostéogénie :</p>
                  <h1 className="text-2xl font-bolt text-[#39c203]">{hyperosteogenie.length}</h1>
                </div>
                )}
              </div>
              <div className="my-2 ml-12 flex">
                <FormControl className="w-[450px] mr-32 bg-white rounded-lg">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="!text-blue-950"
                  >
                    Hyper FSH{" "}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={hyperFSH}
                    label="hyperFSH"
                    onChange={handleHyperFSH}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                    multiple
                  >
                    {hyperFSHnames.map((name) =>(
                      <MenuItem key={name} value={name}>
                      <Checkbox checked={hyperFSH.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {hyperFSH.length>0 &&(
                  <div className="m-2 flex">
                    <p className="text-lg font-semibold pr-2 mt-[2px]"> Hyper FSH :</p>
                  <h1 className="text-2xl font-bolt text-[#39c203]">{hyperFSH.length}</h1>
                </div>
                )}
              </div>
              <div className="ml-10">
                <h2 className="text-lg">- Hyperandrogénie : </h2>
              </div>
              <div className="my-2 ml-12 flex">
                <FormControl className="w-[450px] mr-32 bg-white rounded-lg">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="!text-blue-950"
                  >
                    relation androgènes gonadiques{" "}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={gonadiques}
                    label="gonadiques"
                    onChange={handleGonadiques}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                    multiple
                  >
                    {gonadiquesnames.map((name) =>(
                      <MenuItem key={name} value={name}>
                      <Checkbox checked={gonadiques.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {gonadiques.length>0 &&(
                  <div className="m-2 flex">
                    <p className="text-lg font-semibold pr-2 mt-[2px]"> relation androgènes gonadiques :</p>
                  <h1 className="text-2xl font-bolt text-[#39c203]">{gonadiques.length}</h1>
                </div>
                )}
              </div>
              <div className="my-2 ml-12 flex">
                <FormControl className="w-[450px] mr-32 bg-white rounded-lg">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="!text-blue-950"
                  >
                    relation androgènes surrénaliens
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={androgenes}
                    label="androgenes"
                    onChange={handleAndrogenes}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                    multiple
                  >
                    {androgenesnames.map((name) =>(
                      <MenuItem key={name} value={name}>
                      <Checkbox checked={androgenes.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {androgenes.length>0 &&(
                  <div className="m-2 flex">
                    <p className="text-lg font-semibold pr-2 mt-[2px]"> relation androgènes surrénaliens :</p>
                  <h1 className="text-2xl font-bolt text-[#39c203]">{androgenes.length}</h1>
                </div>
                )}
              </div>
              <div className="my-2 ml-12 flex">
                <FormControl className="w-[450px] mr-32 bg-white rounded-lg">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="!text-blue-950"
                  >
                    Hypoandrogénie
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={hypoandrogenie}
                    label="hypoandrogenie"
                    onChange={handleHypoandrogenie}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                    multiple
                  >
                    {hypoandrogenienames.map((name) =>(
                      <MenuItem key={name} value={name}>
                      <Checkbox checked={hypoandrogenie.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {hypoandrogenie.length>0 &&(
                  <div className="m-2 flex">
                    <p className="text-lg font-semibold pr-2 mt-[2px]"> Hypoandrogénie :</p>
                  <h1 className="text-2xl font-bolt text-[#39c203]">{hypoandrogenie.length}</h1>
                </div>
                )}
              </div>
              <div className="my-2 ml-12 flex">
                <FormControl className="w-[450px] mr-32 bg-white rounded-lg">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="!text-blue-950"
                  >
                    Hyper progestérone
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={progesterone}
                    label="progesterone"
                    onChange={handleProgesterone}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                    multiple
                  >
                    {progesteronenames.map((name) =>(
                      <MenuItem key={name} value={name}>
                      <Checkbox checked={progesterone.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {progesterone.length>0 &&(
                  <div className="m-2 flex">
                    <p className="text-lg font-semibold pr-2 mt-[2px]"> Hyper progestérone :</p>
                  <h1 className="text-2xl font-bolt text-[#39c203]">{progesterone.length}</h1>
                </div>
                )}
              </div>
              <div className="my-2 ml-12 flex">
                <FormControl className="w-[450px] mr-32 bg-white rounded-lg">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="!text-blue-950"
                  >
                   Hypo progestérone
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={hypoprogesterone}
                    label="progesterone"
                    onChange={handleHypoprogesterone}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                    multiple
                  >
                    {hypoprogesteronenames.map((name) =>(
                      <MenuItem key={name} value={name}>
                      <Checkbox checked={hypoprogesterone.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {hypoprogesterone.length>0 &&(
                  <div className="m-2 flex">
                    <p className="text-lg font-semibold pr-2 mt-[2px]"> Hypo progestérone :</p>
                  <h1 className="text-2xl font-bolt text-[#39c203]">{hypoprogesterone.length}</h1>
                </div>
                )}
              </div>
              <div className="ml-10">
                <h2 className="text-lg">- L’axe somatotrope : </h2>
              </div>
              <div className="my-2 ml-12 flex">
                <FormControl className="w-[450px] mr-32 bg-white rounded-lg">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="!text-blue-950"
                  >
                    HYPER GH
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={hypergh}
                    label="hypergh"
                    onChange={handleHypergh}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                    multiple
                  >
                    {hyperghnames.map((name) =>(
                      <MenuItem key={name} value={name}>
                      <Checkbox checked={hypergh.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {hypergh.length>0 &&(
                  <div className="m-2 flex">
                    <p className="text-lg font-semibold pr-2 mt-[2px]"> HYPER GH :</p>
                  <h1 className="text-2xl font-bolt text-[#39c203]">{hypergh.length}</h1>
                </div>
                )}
              </div>
              <div className="my-2 ml-12 flex">
                <FormControl className="w-[450px] mr-32 bg-white rounded-lg">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="!text-blue-950"
                  >
                    HYPER Prolactine
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={prolactine}
                    label="prolactine"
                    onChange={handleProlactine}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                    multiple
                  >
                    {prolactinenames.map((name) =>(
                      <MenuItem key={name} value={name}>
                      <Checkbox checked={prolactine.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {prolactine.length>0 &&(
                  <div className="m-2 flex">
                    <p className="text-lg font-semibold pr-2 mt-[2px]"> HYPER Prolactine :</p>
                  <h1 className="text-2xl font-bolt text-[#39c203]">{prolactine.length}</h1>
                </div>
                )}
              </div>
              <div className="my-2 ml-12 flex">
                <FormControl className="w-[450px] mr-32 bg-white rounded-lg">
                  <InputLabel
                    id="demo-simple-select-label"
                    className="!text-blue-950"
                  >
                    HYPER Insuline
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={insuline}
                    label="insuline"
                    onChange={handleInsuline}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                    multiple
                  >
                    {insulinenames.map((name) =>(
                      <MenuItem key={name} value={name}>
                      <Checkbox checked={insuline.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {insuline.length>0 &&(
                  <div className="m-2 flex">
                    <p className="text-lg font-semibold pr-2 mt-[2px]"> HYPER Prolactine :</p>
                  <h1 className="text-2xl font-bolt text-[#39c203]">{insuline.length}</h1>
                </div>
                )}
              </div>
              <div className="ml-10">
                <h2 className="text-lg">- Profil immunitaire : </h2>
              </div>

              <div className="my-2 ml-12 flex">
                <FormControl className="w-[450px] mr-32 bg-white rounded-lg">
                  <InputLabel
                    id="demo-simple-select-label"
                    className=" !text-blue-950"
                  >
                    Profil immunitaire
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={immunitaire}
                    label="immunitaire"
                    onChange={handleImmunitaire}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                    multiple
                  >
                    {immunitairenames.map((name) =>(
                      <MenuItem key={name} value={name}>
                      <Checkbox checked={immunitaire.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {immunitaire.length>0 &&(
                  <div className="m-2 flex">
                    <p className="text-lg font-semibold pr-2 mt-[2px]"> HYPER Prolactine :</p>
                  <h1 className="text-2xl font-bolt text-[#39c203]">{immunitaire.length}</h1>
                </div>
                )}
              </div>

              <button
                type="submit"
                className="relative flex end-4 top-[100px] left-[80%] bg-[#0a0a5e] h-12 w-24 rounded-lg"
              >
                {" "}
                <span className="text-white ml-6 mt-[9px]">Suivant</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-6 ml-8">
        <button className="h-12 w-24 border-[#645d5d] border-[2px] border-solid rounded-xl"
        onClick={back}>
          <span className="mx-auto text-[#736666]">Back</span>
        </button>
        <button
          type="submit"
          className="relative mx-auto left-[40%] top-[38px] bg-[#35f786] h-12 w-24 rounded-lg"
          onClick={envoyer}
        >
          {" "}
          <span className="text-white mx-auto">Envoyer</span>
        </button>
      </div>
    </div>
  );
};

export default FormFour;
