import React from "react";
function TableCard({ children, className }) {
  return <div className={"table_card " + className}>{children}</div>;
}

export default TableCard;
