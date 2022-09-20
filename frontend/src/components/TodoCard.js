import formatDistanceToNow from "date-fns/formatDistanceToNow"
import Divider from '@mui/material/Divider';
import { TodoContext } from "../context/TodoContext";
import { useContext, useEffect } from "react"
import AOS from 'aos';
import "aos/dist/aos.css"

const TodoCard = ({todo}) => {
    const { dispatch } = useContext(TodoContext)
    useEffect(() => {
        AOS.init({ 
            duration: 500,
            once: true,
        })
    }, [])
    const deleteTodo = async () => {
        const response = await fetch("http://localhost:4000/api/todos/" + todo._id, {
            method: "DELETE"
        })
        const json = await response.json()

        if (response.ok){
            dispatch({type:"DELETE_TODO", payload:json})
        }

    }
    return (
    <div className="todoCard" data-aos="fade-right">
        <div>
            <p className="todoTitle">{todo.title}</p>
            <Divider variant="middle" style={{"backgroundColor":"black"}}/>
        </div>
        <div>
            <p>{todo.task}</p>
            
        </div>
        <div>
            <Divider variant="middle" style={{"backgroundColor":"black"}}/>
            <div className="todoCardDates">
                <p>{todo.date}/{todo.time}</p>
                <p className="todoCreatedAt">{formatDistanceToNow(new Date(todo.createdAt), {addSuffix: true })}</p>
                <p><span className="todoDelete" onClick={deleteTodo}>DELETE</span></p>
                <p>UPDATE</p>
            </div>
        </div>
    </div>
    )
}

export default TodoCard