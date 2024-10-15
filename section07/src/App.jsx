import { useState, useEffect, useRef } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

function App() {
	const [count, setCount] = useState(0);
	const [input, setInput] = useState("");

	const isMount = useRef(false);

	// 1. 마운트 : 탄생
	useEffect(() => {
		// 최초에 실행되고, 그 이후에는 이 콘솔로그가 출력되지 않음
		console.log("mount");
	}, []);

	// 2. 업데이트 : 변화, 리렌더링
	useEffect(() => {
		// 최초에는 발생시키지 않고싶을 때
		if (!isMount.current) {
			isMount.current = true;
			return;
		}

		// 무언가가 업데이트 될때 실행됨
		console.log("update");
	});

	// 3. 언마운트 : 죽음

	// count라는 state가 바뀔때마다 함수가 실행됨
	// useEffect(() => {
	// 	console.log(`count :  ${count} / input: ${input}`);
	// }, [count, input]);
	// 의존성 배열
	// dependency array
	// deps

	const onClickButton = (value) => {
		setCount(count + value);
	};

	return (
		<div className="App">
			<h1>Simple Counter</h1>
			<section>
				<input
					type="text"
					value={input}
					onChange={(e) => {
						setInput(e.target.value);
					}}
				/>
			</section>
			<section>
				<Viewer count={count} />
				{count % 2 === 0 ? <Even /> : null}
			</section>
			<section>
				<Controller onClickButton={onClickButton} />
			</section>
		</div>
	);
}

export default App;
