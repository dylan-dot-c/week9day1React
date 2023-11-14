interface TaskProps {
    tasks: string[];
}

// type PropType
function Tasks({ tasks }: TaskProps) {
    return (
        <div className='p-3 rounded-3 bg-warning shadow w-50 mx-auto mt-3'>
            <h2>My Tasks</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li className='fs-4' key={index}>
                        {task}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tasks;
