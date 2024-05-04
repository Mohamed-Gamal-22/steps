import React, { useState } from "react";
import style from "./Steps.module.css";

export default function Steps() {
  const [step, setStep] = useState(1);
  const [text] = useState([
    "This is the first step 😁",
    "we now in step number two 😎",
    "last step, Congratulations 🤩",
  ]);
  const [isOpen, setIsOpen] = useState(true);

  function next() {
    if (step < text.length) {
      // we use this way when we want to update the value of state based on the current state
      //this callback resived the latest state of step then add action
      setStep((currentStep) => currentStep + 1); // if we repeat this line will excute twice =>more correct
      // setStep(step + 1); these two comment line excute just once (increase step just 1)
      // setStep(step + 1);
    }
    // else setStep(1);
  }

  function prev() {
    if (step > 1) {
      // we use this way when we want to update the value of state based on the current state
      //this callback resived the latest state of step then add action
      setStep((currentStep) => currentStep - 1); // if we repeat this line will excute ( twice ) =>more correct
      // setStep(step - 1); if we repeat this line will excute just ( once )
    }
    // else setStep(text.length);
  }

  return (
    <>
      <div
        className={`container d-flex justify-content-center align-items-center bg-info position-relative ${style.myvh}`}
      >
        <div
          onClick={() => setIsOpen((currentIsOpen) => !currentIsOpen)}
          className="btn btn-dark fs-5 position-absolute top-0 end-0 mt-4 me-4 "
        >
          &#9940;
        </div>
        {isOpen && (
          <div className="box w-50 bg-dark p-2 text-white rounded-3">
            <ul className="p-1 d-flex mt-3  m-0 justify-content-between align-items-center mx-auto list-unstyled">
              <li className={step === 1 ? style.active : style.circle}>1</li>
              <li className={step === 2 ? style.active : style.circle}>2</li>
              <li className={step === 3 ? style.active : style.circle}>3</li>
            </ul>

            <h5 className="my-5 text-center text-capitalize fw-bold">
              {text[step - 1]}
            </h5>

            <ul className="d-flex text-white m-0 justify-content-between align-items-center mx-auto list-unstyled">
              <li>
                <div onClick={prev} className={`${style.click}`}>
                  prev
                </div>
              </li>
              <li>
                <div onClick={next} className={`${style.click}`}>
                  next
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
