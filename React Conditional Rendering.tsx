import type { JSX } from "react";
import styles from "./start.module.css"


const Start = (): JSX.Element => {
  const age = 22
  return (
    <div className={styles.div}>
      {age > 20 ? <h1>over</h1> : <h1>under</h1>}
      {age === 22 && <h1>age is 20</h1>}
      <button type="submit" className={age > 20 ? styles.suc : styles.wornning}>click</button>
    </div>
  )
}




export default Start;


