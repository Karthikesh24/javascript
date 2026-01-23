import React, { useState } from 'react'

function App(){
  const[num1,setNum1]=useState("");
  const[num2,setNum2]=useState("");

  const a=Number(num1)
  const b=Number(num2)
  return(
<div>
<h1>Calculator</h1>
<input type="number" placeholder="Enter the value1" value={num1} onChange={(e)=>setNum1(e.target.value)} />
<input type="number" placeholder="Enter the value2" value={num2} onChange={(e)=>setNum2(e.target.value)}/>
 <div
   style={{ height: "100px",
  width:"300px",
  border: "1px solid",
  marginleft:"200px",
  marginTop:"20px",
  background:""

}}
/>
 <p><strong>Addition : </strong>{a+b}</p>
 <p><strong>Subtraction : </strong>{a-b}</p>
 <p><strong>Multiplication : </strong>{a*b}</p>
 <p><strong>Divide : </strong>{b==0 ? "can't divide by zero" :a/b}</p>

</div>

)
}
export default App
