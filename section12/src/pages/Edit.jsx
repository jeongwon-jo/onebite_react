import { useParams } from "react-router-dom";

const Edit = () => {
	// 객체형태로 params에 파라미터가 저장되어있음
	const params = useParams();

	return <div>{params.id}번 일기 수정페이지입니다.</div>;
};

export default Edit;
