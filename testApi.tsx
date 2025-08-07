import { useEffect, useState, type JSX } from "react"
import styles from "./start.module.css"
import axios from "axios"

interface api {
  id: number;
  excuse: string;
  category: string;
}



const Score = (): JSX.Element => {

  const [data, setdata] = useState<api[] | null>(null)

  useEffect(() => {
    getApi()
  }, [])

  const getApi = async () => {
    const res = await axios.get("https://excuser-three.vercel.app/v1/excuse/party")
    setdata(res.data)
  }

  return (
    <div className={styles.center}>
      <div>
        <button onClick={getApi}>fetch date</button>
      </div>


      <>
        {data?.map((item) => {
          return (
            <div key={item.id}>
              <p>excuse: {item.excuse}</p>
              <p>category: {item.category}</p>
            </div>
          )

        })}

      </>



    </div>


  )
}

export default Score