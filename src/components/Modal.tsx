import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TaskType from "../types/task";

type EditProps = {
    editTask: TaskType;
    setEditTask: React.Dispatch<React.SetStateAction<TaskType>>;
    showEditModal: boolean;
    setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
    handleUpdate: () => void;
};

function ModalEdit({
    editTask,
    setEditTask,
    showEditModal,
    setShowEditModal,
    handleUpdate,
}: EditProps) {
    const handleClose = () => setShowEditModal(false);
    const handleSubmit = () => console.log("HEY");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setEditTask({ ...editTask, [name]: value });
    }

    return (
        <>
            {/* <Button variant='primary'>
                Launch demo modal
            </Button> */}

            <Modal show={showEditModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='mt-3'>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                value={editTask.title}
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
                                value={editTask.description}
                                onChange={handleChange}
                                name='description'
                                type='text'
                                placeholder='Enter Description'
                                required
                                className='p-3'></Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant='primary'
                        onClick={() => {
                            handleUpdate();
                            setShowEditModal(false);
                        }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalEdit;
