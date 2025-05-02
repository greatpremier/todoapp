import { Link } from "react-router-dom"
import Body from "./Body"
import Header, { Nav } from "./Header"

const Home = () => {
    return (
        <div>
            <Header />
            <Body />
            <Link to='/todolist'>Tasks</Link>
        </div>
    )
}

export default Home