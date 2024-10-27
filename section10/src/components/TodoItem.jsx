import "./TodoItem.css";
import {memo} from "react"

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
	const onChangeCheckbox = () => {
		onUpdate(id);
	};

	const onClickDeleteBtn = () => {
		onDelete(id);
	};
	return (
		<div className="TodoItem">
			<input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
			<div className="content">{content}</div>
			<div className="date">{new Date(date).toLocaleDateString()}</div>
			<button type="button" onClick={onClickDeleteBtn}>
				삭제
			</button>
		</div>
	);
};

// 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
// 	// 반환값에 따라 Props가 바뀌었는지 안바뀌었는지 판단
//   // True : Props가 바뀌지 않음 -> 리렌더링 하지마라
//   // False : Props가 바뀜 -> 리렌더링을 해라!

// 	if(prevProps.id !== nextProps.id) return false;
// 	if(prevProps.isDone !== nextProps.isDone) return false;
// 	if(prevProps.content !== nextProps.content) return false;
// 	if(prevProps.date !== nextProps.date) return false;

// 	return true;
// });

export default memo(TodoItem);
