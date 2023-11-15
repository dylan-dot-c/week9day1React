import TaskType from "../types/task";
import { Trash, PencilSquare } from "react-bootstrap-icons";

interface TaskProps {
    task: TaskType;
    handleDelete: (id: string) => void;
}

function TodoCard({ task, handleDelete }: TaskProps) {
    return (
        <div className='p-3 col-5 bg-warning-subtle '>
            <div className='d-flex'>
                <h2>{task.title}</h2>
                <div className='d-flex gap-2'>
                    <PencilSquare className='bg-warning' size={30} />
                    <Trash
                        className='bg-danger'
                        size={30}
                        onClick={() => {
                            handleDelete(task.id!);
                        }}
                    />
                </div>
            </div>
            <p>{task.description}</p>
        </div>
    );
}

export default TodoCard;
