import { useEffect, useState } from "react";
import './styles.css';
import {getTasks, getToken} from "./Api"
import TaskItem from "./TaskItem"
import Api from "./Api"

const taskList = [
    {
        name: ['django', 'react', 'postgresql', 'git'],
        description: ['complete django', 'do react in time', 'finish postgresql', 'understand git']
    },
    { name: [], description: [] },
    {
        name: ['systems', 'sales', 'marketing', 'operations'],
        description: ['design the business systems', 'conduct sales process', 'perform marketing', 'complete business operations']
    }
];

const TodoList = ({ data }) => {
    const [tasks, setTask] = useState([]);
    const [taskIndex, setTaskIndex] = useState(0); // Start with a valid index (0)
    const [loading, setLoading] = useState(true)
    const [token, setToken] = useState([])

    useEffect(() => {
        //setTask(taskList);
        //setTaskIndex(data); // Uncomment if `data` is expected to change `taskIndex`
        async function getData(){
            const res = await getTasks() //fetch('http://127.0.0.1:8000/main/api/tasks');
            const data = await res.data;
            setTask(data);
            setLoading(false);
        }
        //getTasks().then((res) => setTask(res.data)).catch((err) => console.error(err));
        getData();
    }, []);

    useEffect(() => {
        async function Token(){
            const tok = await getToken();
            setToken(tok)
        }
    
    }, []);
    
    return (
        <div>
            <h2>All Tasks</h2>
            {loading ? (
                <div>...loading</div>
            ) : (
            <div>
                {tasks.tasks.map((task) => (
                    <div>
                        {task.category}
                    </div>
                ))}
            </div>
            )}
            {console.log(token)}
        </div>
    )

    /*return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>
                            <ul className="list-group">
                                {
                                    task[taskIndex]?.name?.map((item) => (
                                        <li key={item} className="list-group-item">{item}</li>
                                    ))
                                }
                            </ul>
                        </td>
                        <td>
                            <ul className="list-group">
                                {
                                    task[taskIndex]?.description?.map((item) => (
                                        <li key={item} className="list-group-item">{item}</li>
                                    ))
                                }
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );*/
};

export default TodoList;
