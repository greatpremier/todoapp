import { useEffect, useState } from "react";
import { createTask, createCategory } from "./Api";

const CreateTask = () => {
    const [category, setCategory] = useState([])
    const newTask = {
        category_name: "",
        task_name: "",
        task_description: ""
    }
    useEffect(() => {
        createCategory(category)
    }, []);

    return (
        <div></div>
    )
}

export default CreateTask;