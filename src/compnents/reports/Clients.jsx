import React, { useState } from "react";
import ClientFilter from "./ClientFilter";

function Client() {
  const [filterData, setFilterData] = useState({});
  const [step, setStep] = useState(1);
  return (
    <div>
      {step === 1 ? (
        <ClientFilter
          setFilterData={setFilterData}
          nextStep={() => setStep(2)}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Client;
