import React, { useEffect } from "react";

function Useeffer() {
  useEffect(() => {
    console.log("sẽ đc gọi");
  });
  console.log("hello");
  return (
    <div>
      Useeffer
      {/* userrffer là 1 hook nhận vào 2 tham số
    tham so1:callback=()=>{}
    tham so2:[]=>deepeenddencies (deps)
    userEFFRCT DÙNG ĐỂ CALLAPI,CLEANup,updatedom
    useEffect dùng để :call API
    3 DẠNG:
    +useEFFERCt
     */}
    </div>
  );
}

export default Useeffer;
