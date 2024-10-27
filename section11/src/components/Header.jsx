import "./Header.css";
import {memo} from "react"

const Header = () => {
	return (
		<div className="Header">
			<h3>오늘은 📆</h3>
			<h1>{new Date().toLocaleDateString()}</h1>
		</div>
	);
};

// const memoizedHeader = memo(Header);
// 자신이 받는 props가 변동되지않으면 리렌더링되지않음.

export default memo(Header);
