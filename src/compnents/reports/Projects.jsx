import React, { useState } from "react";
import ProjectsFilter from "./ProjectsFilter";

function Projects() {
  const [filterData, setFilterData] = useState({});
  const [step, setStep] = useState(1);
  return (
    <div>
      {step === 1 ? (
        <ProjectsFilter
          setFilterData={setFilterData}
          nextStep={() => setStep(2)}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Projects;
