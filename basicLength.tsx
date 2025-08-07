import { useEffect, useState, type ChangeEvent, type JSX } from "react"
import styles from "./start.module.css"

interface Task {
  id: number;
  task: string | number;
}

const Score = (): JSX.Element => {

  const [newTaskText, sewNewTaskText] = useState<string>("")
  const [taskList, setTaskList] = useState<Task[]>([])
  const [alarmMessage, setAlarmMessage] = useState<string>("")

  useEffect(() => {
    if (taskList.length <= 0) {
      setTimeout(() => {
        setAlarmMessage('هیچ کاری ثبت نشده است')
      }, 2000)
      
    }else{
      setAlarmMessage("")
    }
  }, [taskList.length])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    sewNewTaskText(event.target.value)
  }
  const handleAddTask = (): void => {
    if (newTaskText.trim() === "") return
    const newTask: Task = { id: Date.now(), task: newTaskText }
    setTaskList([...taskList, newTask])
    sewNewTaskText("")
  }


  return (
    <div className={styles.center}>
      <input value={newTaskText} onChange={handleInputChange} type="text" />
      <button onClick={handleAddTask}>Add Task</button>

      {alarmMessage && <p className={styles.alarm}>{alarmMessage}</p>}

      {taskList.map((item, index) => (
        <div key={item.id}>
          <p>{item.task}</p>
          <p>Total tasks so far: {index + 1}</p>
        </div>
      ))}
    </div>
  )
}

export default Score