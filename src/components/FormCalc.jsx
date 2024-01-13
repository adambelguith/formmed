import React from "react";

const FormCalc = () => {
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
            <div className="etapevalid h-24 w-24 relative">
              <h1 className=" text-white text-4xl font-extrabold text-center relative top-2">
                4
              </h1>
            </div>
            <div className="etapesdiv h-24 w-24 relative">
              <h1 className=" text-white text-4xl font-extrabold text-center relative top-2">
                5
              </h1>
            </div>
          </div>

          <div className=" max-w-full w-4/5">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCalc;
