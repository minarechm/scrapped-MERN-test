import { ThemeContext } from "../App"
import { useContext } from "react"

export const Component = () => {
    const countFromApp = useContext(ThemeContext)

    return (
        <div>HELLO {countFromApp}</div>
    )
}