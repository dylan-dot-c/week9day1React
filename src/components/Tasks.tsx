import TodoCard from "./TodoCard";

interface TaskProps {
    tasks: string[];
}

// type PropType
function Tasks({ tasks }: TaskProps) {
    return (
        <div className='p-3 rounded-3 shadow row mx-auto mt-3 bg-warning '>
            <h2 className='text-center mb-4'>My Tasks</h2>
            <div className='row gap-3 justify-content-between '>
                {tasks.map((task, index) => (
                    <TodoCard task={task} />
                ))}
            </div>
        </div>
    );
}

export default Tasks;
