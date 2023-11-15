import TodoCard from "./TodoCard";
import TaskType from "../types/task";

interface TaskProps {
    tasks: TaskType[];
    handleDelete: (id: string) => void;
}

// type PropType
function Tasks({ tasks, handleDelete }: TaskProps) {
    return (
        <div className='p-3 rounded-3 shadow row mx-auto mt-3 bg-warning '>
            <h2 className='text-center mb-4'>My Tasks</h2>
            <div className='row gap-3 justify-content-between '>
                {tasks.map((task, index) => (
                    <TodoCard
                        key={index}
                        task={task}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
}

export default Tasks;
