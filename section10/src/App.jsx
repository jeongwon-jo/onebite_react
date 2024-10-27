import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useState, useRef, useReducer, useCallback } from "react";

const mockData = [
	{
		id: 0,
		isDone: false,
		content: "React Study",
		date: new Date().getTime(),
	},
	{
		id: 1,
		isDone: false,
		content: "채링과 술약속🍻",
		date: new Date().getTime(),
	},
	{
		id: 2,
		isDone: false,
		content: "운동하기 🏃🏻‍♀️",
		date: new Date().getTime(),
	},
];

// todos의 상태변화는 reducer가 담당함
function reducer(state, action) {
	switch (action.type) {
		case "CREATE":
			return [action.data, ...state];
		case "UPDATE":
			return state.map((item) => item.id === action.targetId ? { ...item, isDone: !item.isDone } : item);
		case "DELETE":
			return state.filter((item) => item.id !== action.targetId);
		default : return state
	}
}

function App() {
	// const [todos, setTodos] = useState(mockData);
	const [todos, dispatch] = useReducer(reducer, mockData);
	const idRef = useRef(3);

	// const onCreate = (content) => {
	// 	dispatch({
	// 		type: "CREATE",
	// 		data: {
	// 			id: idRef.current++,
	// 			isDone: false,
	// 			content: content,
	// 			date: new Date().getTime()
	// 		}
	// 	})
	// };

	// const onUpdate = (targetId) => {
	// 	dispatch({
	// 		type: "UPDATE",
	// 		targetId: targetId
	// 	});
	// };

	// const onDelete = (targetId) => {
	// 	dispatch({
	// 		type: "DELETE",
	// 		targetId: targetId,
	// 	});
	// };

	// useCallback : 함수를 메모이제이션 해줌
  // const func = useCallback(() => {}, [])

	const onCreate = useCallback((content) => {
		dispatch({
			type: "CREATE",
			data: {
				id: idRef.current++,
				isDone: false,
				content: content,
				date: new Date().getTime()
			}
		})
	}, [])

	const onUpdate = useCallback((targetId) => {
		dispatch({
			type: "UPDATE",
			targetId: targetId
		});
	}, [])

	const onDelete = useCallback((targetId) => {
		dispatch({
			type: "DELETE",
			targetId: targetId,
		});
	}, [])

	return (
		<div className="App">
			<Header />
			<Editor onCreate={onCreate} />
			<List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
			{/* <Exam /> */}
		</div>
	);
}

export default App;
