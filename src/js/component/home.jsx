// import React from "react";
import React, { useState } from "react";

{/* TodoItem component represents an individual todo item */ }

function TodoItem({ label, is_done, toggle_todo, delete_todo }) {
	return (
		<div className="todo-item">

			{/* Checkbox for marking todo item as done */}
			<input className="me-2" type="checkbox" checked={is_done} onChange={toggle_todo} />

			{/* Display the label of the todo item */}
			<span className="todo-text">{label}</span>

			{/* Delete button to remove the todo item */}
			<button className="btn btn-danger" onClick={delete_todo}>
				Delete
			</button>

		</div>
	);
}


function Home() {
	// State to manage the list of todos
	const [todos, setTodos] = useState([]);

	// State to manage the input for adding a new todo
	const [item, setItem] = useState({
		label: "Finish my 4Geeks coding assignment!",
		is_done: false,
	});

	// Event handler for input change to update the new todo label
	const handleInputChange = (e) => {
		setItem({
			label: e.target.value,
			is_done: item.is_done,
		});
	};

	// Event handler for adding a new todo to the list
	const handleAddTodo = () => {
		setTodos([...todos, item]);
		setItem({
			label: "",
			is_done: false,
		});
	};

	// Event handler for toggling the completion status of a todo
	const toggleTodo = (index) => {
		const updatedTodos = [...todos];
		updatedTodos[index].is_done = !updatedTodos[index].is_done;
		setTodos(updatedTodos);
	};

	// Event handler for deleting a todo from the list
	const deleteTodo = (index) => {
		const updatedTodos = [...todos];
		updatedTodos.splice(index, 1);
		setTodos(updatedTodos);
	};

	return (
		<form className="container d-flex flex-column align-items-center position-absolute top-50 start-50 translate-middle">
			{/* Application title */}
			<h1>Todo List</h1>

			{/* Text input field for adding a new todo */}
			<input
				className="form-control form-control-lg"
				type="text"
				value={item.label}
				onChange={handleInputChange}
				placeholder="What do you want to get done today?"
				aria-label="todo list input field"
			/>

			{/* Button to add a new todo item */}
			<button className="btn btn-success mt-3" type="button" onClick={handleAddTodo}>
				Add Item to List
			</button>

			{/* Component to display each todo using TodoItem component */}
			{todos.map((todo, index) => (
				<TodoItem
					key={index}
					label={todo.label}
					is_done={todo.is_done}
					toggle_todo={() => toggleTodo(index)}
					delete_todo={() => deleteTodo(index)}
				/>
			))}
		</form>
	);
}

export default Home;