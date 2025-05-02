import { useEffect, useState } from "react";

const Remote = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        async function fetchData() {
            const res = await fetch('http://127.0.0.1:8000/main/api/tasks/');
            const data = await res.json();
            console.log(data);
            const dataArray = Object.values(data)
            setData(data);
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <ul>
                    {data.tasks.map((task) => (
                        <li key={task.name}>
                            {task.name} | {task.category}
                        </li>
                    )
                    )}<br></br>

                    <h3>Categories</h3>
                    {data.category.map((category) => (
                        <li key={category}>
                            {category}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Remote;