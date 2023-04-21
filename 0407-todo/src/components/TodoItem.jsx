
const TodoItem = (props) => {

    const {todo, checkedTodo, deleteTodo} = props

    const printDate = (date) => {
        // date : Date 객체를 받와서 시간을 출력
        return `${date.getMonth()+1}월${date.getDate()}일`
    }
    return (
        <li className={todo.checked ? "checked" : ""}>
        <h3>{printDate(todo.date)}</h3>
        <input
            type="checkbox"
            checked={todo.checked}
            readOnly
            onClick={() => {
                checkedTodo(todo.id);
            }}
        />
        {todo.todo}
        <button
            onClick={() => {
            deleteTodo(todo.id);
            }}
        >
            X
        </button>
        </li>
    );
};

export default TodoItem;