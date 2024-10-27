import { useState, useMemo, useContext } from "react";
import "./List.css";
import TodoItem from "./TodoItem";
import { TodoStateContext } from "../App";

const List = () => {
	const todos = useContext(TodoStateContext)
	const [search, setSearch] = useState("");

	const onChangeSearch = (e) => {
		setSearch(e.target.value);
	};

	const getFilteredData = () => {
		if (search === "") {
			return todos;
		}

		return todos.filter((todo) =>
			todo.content.toLowerCase().includes(search.toLowerCase())
		);
	};

	const filteredTodos = getFilteredData();

	// const getAnalyzedData = () => {
	// 	console.log("getAnalyzedData 호출")
	// 	const totalCount = todos.length;
	// 	const doneCount = todos.filter((todo) => todo.isDone).length;
	// 	const notDoneCount = totalCount - doneCount;

	// 	return {
	// 		totalCount, doneCount, notDoneCount
	// 	}
	// }

	const {totalCount, doneCount, notDoneCount} = useMemo(() => {
		console.log("getAnalyzedData 호출")
		const totalCount = todos.length;
		const doneCount = todos.filter((todo) => todo.isDone).length;
		const notDoneCount = totalCount - doneCount;

		return {
			totalCount, doneCount, notDoneCount
		}
	}, [todos])

	//[] : 의존성 배열 : deps
	// deps의 값이 변경되면 콜백함수를 다시 실행함 (useEffect처럼!)
	// const {totalCount, doneCount, notDoneCount} = getAnalyzedData()
	return (
		<div className="List">
			<h4>TODOLIST 🌱</h4>
			<div>
				<div>total : {totalCount}</div>
				<div>done : {doneCount}</div>
				<div>not_done : {notDoneCount}</div>
			</div>
			<input
				type="text"
				placeholder="검색어를 입력하세요"
				value={search}
				onChange={onChangeSearch}
			/>
			<div className="todos_wrapper">
				{filteredTodos.map((todo) => {
					return (
						<TodoItem
							key={todo.id}
							{...todo}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default List;
