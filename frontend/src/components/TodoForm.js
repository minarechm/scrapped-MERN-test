import { TodoContext } from "../context/TodoContext"
import { useContext, useState } from "react"
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

const TodoForm = () => {
    const { dispatch } = useContext(TodoContext)
    const [title, setTitle] = useState("")
    const [task, setTask] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const submitForm = async (e) => {
        e.preventDefault() //maybe not needed
        const todo = { title, task , date, time}
        console.log(todo)
        console.log(JSON.stringify(todo))
        const response = await fetch("http://localhost:4000/api/todos", {
            method: "POST",
            body: JSON.stringify(todo),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setTitle("")
            setTask("")
            setDate("")
            setTime("")
            setError(null)
            setEmptyFields([])
            console.log("Added.")
            dispatch({type: "CREATE_TODO", payload: json})
        }
    }
    return (
        <form className="todoForm" noValidate onSubmit={submitForm}>
            <TextField
            required
            id="outlined-required"
            label="Title"
            color="error"
            onChange={(e) => {
                setTitle(e.target.value)
            }}
            />
            <TextField
            required
            id="outlined-required"
            label="Task"
            color="error"
            multiline
            rows="5"
            onChange={(e) => {
                setTask(e.target.value)
            }}
            />
            <TextField
            required
            id="outlined-textarea"
            label="Date"
            placeholder="Date"
            onChange={(e) => {
                setDate(e.target.value)
            }}
            />
            <input className="timeInput" type="time" onChange={(e) => {
                setTime(e.target.value)
            }}/>

            
            <Button variant="outlined" type="submit">Submit</Button>
            {error && <div>{ error }</div>}
        </form>
    )
}
export default TodoForm