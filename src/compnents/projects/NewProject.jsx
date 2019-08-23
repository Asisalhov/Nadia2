import React, { useState } from "react";

import NewProjectBasic from "./NewProjectBasic";
import NewProjectFixed from "./NewProjectFixed";
import NewProjectRetainer from "./NewProjectRetainer";
import NewProjectTM from "./NewProjectTM";

function NewProject() {
  // this is a steped form , we will have 2 steps
  const [step, setStep] = useState(1);
  const [buissModle, setBuissModle] = useState(1);
  const [projectData, setProjectData] = useState({});
  let StepTwo = null;

  // <option value="TM_monthly">Time & material - monthly</option>
  // <option value="TM_Milestone">
  //   Time & material - milestone
  // </option>
  // <option value="fixed">Fixed</option>
  // <option value="retainer">Retainer</option>

  switch (buissModle) {
    case "TM_monthly":
    case "TM_Milestone":
      StepTwo = NewProjectTM;
      break;
    case "retainer":
      StepTwo = NewProjectRetainer;
      break;
    case "fixed":
      StepTwo = NewProjectFixed;
      break;
    default:
      StepTwo = NewProjectBasic;
      break;
  }

  return (
    <div>
      <h3>
        New Project <small>- client name</small>
      </h3>
      {step === 1 ? (
        <NewProjectBasic
          data={projectData}
          setData={setProjectData}
          setBuissModle={setBuissModle}
          setStep={setStep}
        />
      ) : (
        <StepTwo data={projectData} setData={setProjectData} />
      )}
    </div>
  );
}

export default NewProject;
