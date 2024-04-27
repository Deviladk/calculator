import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Display from './component/Display'
import KeyButton from './component/KeyButton'
import bgImage from './component/bgImage'

function App() {
const [calVal,setcalVal]=useState("");
const onButtonClick=(buttonText)=>{
  if(buttonText==="C"){
   setcalVal("");
  }else if(buttonText==="="){
    const result=eval(calVal);
    setcalVal(result);
  }else{
    const newVal= calVal+buttonText;
    setcalVal(newVal);
  }
}
  return (
    <>
    
    <div className="cal">

       <div className="mainContainer" > 
          <div className="smallContainer">
                <Display displayValue={calVal}></Display>
                <div className="ButtonContainer">
                         <KeyButton onButtonClick={onButtonClick}> </KeyButton>
                </div>
          </div>
       </div>
      
    </div>
    </>
  )
}

export default App
