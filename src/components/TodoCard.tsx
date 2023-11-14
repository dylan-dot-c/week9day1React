interface props {
    task: string;
}

function TodoCard({ task }: props) {
    return <li className='p-3 col-3 bg-warning-subtle '>{task}</li>;
}

export default TodoCard;
