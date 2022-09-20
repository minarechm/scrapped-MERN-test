import { useEffect } from "react"
import { Container} from "@mui/system"
import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import TodoCard from "../components/TodoCard"
import TodoForm from "../components/TodoForm"
import ThreeJsSection from "../components/ThreeJsSection"

const Home = () => {
    const {todos, dispatch} = useContext(TodoContext)
    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch("http://localhost:4000/api/todos", {
                method: "GET"
            })
            const json = await response.json()
            if (response.ok) {
                dispatch({ type: "SET_TODOS", payload:json})
            }
        }

        fetchTodos()
    },[dispatch])
    return (
        <>
        <Container maxWidth="xl" disableGutters>
            <div className="headerDiv">
                <img src="1.jpg" alt="" />
                <p><i>Style</i> is the answer <br></br>to everything</p>
            </div>
            
        </Container>
        
            <div className="textDiv">
                <div className="textLeft">
                    <TodoForm/>
                </div>
                <div className="textRight">
                    <ThreeJsSection/>
                </div>
            </div>
        <Container maxWidth="xl" disableGutters>
            <div className="todoCardWrap">
            {todos && todos.map((todo) => (
                <TodoCard key={todo._id} todo={todo}/>
            ))}
            </div>
        </Container>
        </>
    )
}

export default Home