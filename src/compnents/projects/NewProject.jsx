import React, { useState } from "react";

import NewProjectBasic from "./NewProjectBasic";
import NewProjectFixed from "./NewProjectFixed";
import NewProjectRetainer from "./NewProjectRetainer";
import NewProjectTM from "./NewProjectTM";

function NewProject() {
  // this is a steped form , we will have 2 steps
  const [step, setStep] = useState(1);
  const [buissModle, setBuissModle] = useState(1);

  let Content = null;
  switch (buissModle) {
    case 1:
      Content = NewProjectFixed;
      break;
    case 2:
      Content = NewProjectRetainer;
      break;
    case 3:
      Content = NewProjectTM;
      break;
    default:
      Content = NewProjectBasic;
      break;
  }
  return (
    <div>
      <h3>
        New Project <small>- client name</small>
      </h3>
      <Content />
    </div>
  );
}

export default NewProject;
