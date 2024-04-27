import "./Display.css"
const Display=({displayValue})=>{
   return <>
      <input className="Screen" type="text" value={displayValue} readOnly>
        
      </input>

   </>
}
export default Display;