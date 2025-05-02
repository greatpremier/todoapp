import { Link } from 'react-router-dom'
import Header, { Nav } from './Header'
import TagsSelector from '../Todo/TagSelector'

const Hero = () => {
    const styling = {
        head: {
            'color' : 'red',
            'fontSize' : '30px',
            'textAlign' : 'center',
        },
        para: {
            'color' : 'blue',
            'fontSize' : '20px',
            'textAlign' : 'center',
            'padding' : '50px'
        }
    }
    return (
        <div>
            <span className="head" style={styling.head}>
                Hi! I'm Tanaka, a web developer based in Johannesburg
            </span><br/>
            <span className="para" style={styling.para}>
                Lets's begin the development of your business apps.
            </span>
            <Link to={'/remote'}>Remote data</Link>
        </div>
    )
}

const Body = () => {
    return (
        <>
        <Hero />
        </>
    )
}

export default Body