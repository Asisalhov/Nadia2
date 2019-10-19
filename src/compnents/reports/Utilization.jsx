import React, { useState } from "react";
import UtilizationFilter from "./UtilizationFilter";

function Utilization() {
  const [filterData, setFilterData] = useState({});
  const [step, setStep] = useState(1);
  return (
    <div>
      {step === 1 ? (
        <UtilizationFilter
          setFilterData={setFilterData}
          nextStep={() => setStep(2)}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Utilization;
