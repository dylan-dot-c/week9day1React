import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Tasks from "../components/Tasks";
import TaskType from "../types/task";
import AlertMessage from "../components/AlertMessage";
import AlertType from "../types/alert";
import ModalEdit from "../components/Modal";

const emptyForm: TaskType = {
    title: "",
    description: "",
};

function Home() {
    const [tasks, setTasks] = useState<TaskType[]>([]);
    const [taskFormData, setFormTaskData] = useState<TaskType>(emptyForm);
    const [alertInfo, setAlertInfo] = useState<AlertType>({
        variant: null,
        message: "",
    });
    const [currentEditTask, setCurrentEditTask] = useState<TaskType>(emptyForm);
    const [showEditModal, setShowEditModal] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormTaskData({ ...taskFormData, [name]: value });
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newTask: TaskType = {
            id: uuidv4(),
            title: taskFormData.title!,
            description: taskFormData.description!,
        };
        let newTasks = [...tasks, newTask];
        setTasks(newTasks);
        setFormTaskData(emptyForm);
        setAlertInfo({
            variant: "primary",
            message: `${newTask.title} has been added`,
        });
    }

    function handleDelete(id: string) {
        setTasks((prevTasks) => {
            let taskToDelete = prevTasks.find((task) => task.id == id);
            let filteredTasks = prevTasks.filter((task) => task.id != id);
            setAlertInfo({
                variant: "danger",
                message: `${taskToDelete?.title} has been deleted!`,
            });

            return filteredTasks;
        });
    }

    function handleEditTask(id: string) {
        // first find task to do
        const taskToEdit = tasks.find((task) => task.id == id);
        setCurrentEditTask(taskToEdit as TaskType);
        setShowEditModal(true);
    }

    function handleDismiss() {
        setAlertInfo({ message: "", variant: null });
    }

    function handleUpdate() {
        setAlertInfo({
            variant: "warning",
            message: `Task ID: ${currentEditTask.id} has been updated!`,
        });
        setTasks((prevTask) => {
            // find index of editing task
            let taskEditIndex = prevTask.findIndex(
                (task) => task.id == currentEditTask.id
            );
            prevTask[taskEditIndex] = currentEditTask;

            return prevTask;
        });
    }

    return (
        <Container>
            {alertInfo.message && alertInfo.variant && (
                <AlertMessage
                    message={alertInfo.message}
                    variant={alertInfo.variant}
                    onDismiss={handleDismiss}
                />
            )}
            {showEditModal && (
                <ModalEdit
                    editTask={currentEditTask}
                    setEditTask={setCurrentEditTask}
                    showEditModal={showEditModal}
                    setShowEditModal={setShowEditModal}
                    handleUpdate={handleUpdate}
                />
            )}
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className='mt-3'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        value={taskFormData.title}
                        onChange={handleChange}
                        name='title'
                        type='text'
                        placeholder='Enter Title'
                        required
                        className='p-3'></Form.Control>
                </Form.Group>
                <Form.Group className='mt-3'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        value={taskFormData.description}
                        onChange={handleChange}
                        name='description'
                        type='text'
                        placeholder='Enter Description'
                        required
                        className='p-3'></Form.Control>
                </Form.Group>
                <Button
                    variant='warning'
                    type='submit'
                    className='w-100 text-capitalize  fw-bold  fs-5 mt-3'>
                    Add New Task
                </Button>
            </Form>
            <div className='mt-3'>
                {tasks.length == 0 ? (
                    <h1 className='text-center'>
                        You have no tasks currently. Add one now!
                    </h1>
                ) : (
                    <Tasks
                        tasks={tasks}
                        handleDelete={handleDelete}
                        handleEdit={handleEditTask}
                    />
                )}
            </div>
        </Container>
    );
}

export default Home;
