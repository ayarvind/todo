import { useEffect, useState } from "react"
interface TaskProps {
    title: string,
    desc: string,
}
function Show() {
    const [error, setError] = useState('');
    const [tasks, setTasks] = useState<TaskProps[]>();
    useEffect(() => {
        const getTask = localStorage.getItem('task');
        if (!getTask) {
            setError("No task found");
            return;
        }
        const avail = JSON.parse(getTask!).task;
        setTasks(avail);
        console.log(avail);

    }, [])
    return (
        <>
            <h1>
                Availabel Task
            </h1>
            <div className="error">
                {
                    error && (<>
                        {
                            error
                        }
                    </>)
                }
            </div>

            <div className="tasks">
                {
                    tasks?.map((task, index) => (
                        <div key={index}>
                            <h2>{task.title}</h2>
                            <p>{task.desc}</p>

                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default Show