import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import Tasks from "../components/Tasks";

function Home() {
    const [tasks, setTasks] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (inputRef.current) {
            let value: string = inputRef.current.value;
            if (value == "") {
                alert("Please enter a value");
                return;
            }
            setTasks((prev) => {
                const newVal = [...prev];
                newVal.push(value);
                return newVal;
            });
            inputRef.current.value = "";
        }
    }

    return (
        <Container>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <div className='d-flex mt-5 gap-3 align-items- '>
                    <Form.Control
                        name='Todo'
                        ref={inputRef}
                        type='text'
                        placeholder='Enter New Task'
                        required
                        className='p-3'></Form.Control>
                    <Button
                        variant='warning'
                        type='submit'
                        className='w-25 text-capitalize  fw-bold  fs-5'>
                        Add Task
                    </Button>
                </div>
            </Form>
            <div className='mt-3'>
                {tasks.length == 0 ? (
                    <h1 className='text-center'>
                        You have no tasks currently. Add one now!
                    </h1>
                ) : (
                    <Tasks tasks={tasks} />
                )}
            </div>
        </Container>
    );
}

export default Home;
