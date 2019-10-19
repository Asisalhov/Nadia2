import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

function Expenses() {
  const [filterData, setFilterData] = useState({});
  const [step, setStep] = useState(1);
  return (
    <div>
      {step === 1 ? (
        <ExpensesFilter
          setFilterData={setFilterData}
          nextStep={() => setStep(2)}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Expenses;
