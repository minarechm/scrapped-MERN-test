import { ThemeContext } from "../App"
import { useContext } from "react"

export const Component2 = () => {
    const countFromApp = useContext(ThemeContext)

    return (
        <div>HELLO2 {countFromApp}</div>
    )
}