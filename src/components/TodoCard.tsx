import TaskType from "../types/task";
import { Trash, PencilSquare } from "react-bootstrap-icons";

interface TaskProps {
    task: TaskType;
    handleDelete: (id: string) => void;
    handleEdit: (id: string) => void;
}

function TodoCard({ task, handleDelete, handleEdit }: TaskProps) {
    return (
        <div className='p-3 col-5 bg-warning-subtle shadow rounded-3 '>
            <div className='d-flex justify-content-between align-items-center '>
                <h2>{task.title}</h2>
                <div className='d-flex gap-2'>
                    <PencilSquare
                        className='bg-warning'
                        size={30}
                        onClick={() => handleEdit(task.id!)}
                    />
                    <Trash
                        className='bg-danger'
                        size={30}
                        onClick={() => {
                            handleDelete(task.id!);
                        }}
                    />
                </div>
            </div>
            <p className='fs-4'>{task.description}</p>
        </div>
    );
}

export default TodoCard;
