import type { JSX } from "react";
import styles from "./start.module.css"/// بهترین روش فراخوانی css در مقایسه با بابقیه
///React Functional Component with TypeScript
interface props {
  name: string,
  age: number,
};

interface info {
  pay: string
};

const Start = (): JSX.Element => {
  return (
    <div className={styles.h1}>
      <InfoPay  pay="AllINfoCompony" />
      <User name="akbar" age={23} />
      <User name="naqi" age={74} />

    </div>
  )
}



const User = ({ name, age }: props): JSX.Element => {
  return (
    <div>
      <h1 className="h1">{name}</h1>
      <h2>{age}</h2>
    </div>
  )
}

const InfoPay = ({ pay }: info): JSX.Element => {

  return (
    <div>
      <p>{pay}</p>
    </div>

  )

}


export default Start;


