import React from "react";
import ChildB from "./ChildB";

function ChildA({data}) {
    console.log('Child A')
  return (
    <div>
      <div>ChildA</div>
      <ChildB data={data} />
    </div>
  );
}

export default ChildA;
