import React from "react";

function UnderDev() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        background: "url('/UnderConstruction.png')",
        backgroundSize: "auto 100% ",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    >
      <h1 className="display-2 mt-n5">Under Development</h1>
    </div>
  );
}

export default UnderDev;
