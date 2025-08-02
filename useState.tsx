// import type { JSX } from "react";
// import styles from "./start.module.css";
// import { useState } from "react";


// const Start: () => JSX.Element = (): JSX.Element => {
//   const [age, setAge] = useState(0)



//   return (
//     <div className={styles.div}>
//       <h1>{age}</h1>
//       <button onClick={()=>{setAge(age+1)}}>increase age</button>
//       <button onClick={()=>{setAge(age-1)}}>decrease age</button>
//     </div>
//   );
// };


// export default Start;




// import type { ChangeEvent, JSX } from "react";
// import styles from "./start.module.css";
// import { useState } from "react";


// const Start: () => JSX.Element = (): JSX.Element => {

//   const [inputValue, setInputVale] = useState("")

//   const handelInputChange = (event:ChangeEvent<HTMLInputElement>) =>{
//     setInputVale(event.target.value)
//   }

//   return (
//     <div className={styles.div}>
//       <input type="text" onChange={handelInputChange} />
//       <h1>{inputValue}</h1>

//     </div>
//   );
// };


// export default Start;









// const Start: () => JSX.Element = (): JSX.Element => {

//   const [showText, setShowText] = useState(true);

//   const ToggleText = () => {
//     setShowText(!showText)
//   }

//   return (
//     <div className={styles.div}>
//       <button onClick={ToggleText}>show/hide Text</button>
//      { showText && <h1>ahmadreza ansari</h1> }
//     </div>
//   );
// };


// import type { JSX } from "react";
// import styles from "./start.module.css";
// import { useState } from "react";


// const Start: () => JSX.Element = (): JSX.Element => {

//   const [textColor, setTextColor] = useState("red");
//   return (
//     <div className={styles.div}>
//       <button onClick={() => { setTextColor(textColor === "red" ? "green" : 'red') }}>change color</button>
//       <h1 style={{ color: textColor }}>ahmadreza ansari</h1>
//     </div>
//   );
// };


// export default Start;