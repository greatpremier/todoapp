import { Link } from "react-router-dom"
import './styles.css'
import { useEffect, useState } from "react"
import TodoList from "./TodoList"

let list = ['programming', 'school', 'business', 'motorbikes', 'cricket']

const TagsSelector = ({onClick}) => {
    const [tags, setTags] = useState([]);
    const [select, setSelect] = useState('')

    useEffect(() => {
        setTags(list)
    }, [])

    const Clicked = (index, item) => {
        setSelect(index)
    }
    console.log(select)

    return (
        <div>
            {tags.map((item, index) => (
                <li key={item} className="tags-list" onClick={() => Clicked(index, item)}><Link to={'/todolist'}>{item}</Link></li>
            ))}
            <TodoList data={select} className="todolistcomp"/>
        </div>
    )
}

export default TagsSelector