import useInput from "../hooks/useInput";
// 3가지 Hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다.
// 3. 커스텀 훅을 직접 만들 수 있다.


const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return <div>
    <input type="text" value={input} onChange={onChange} />
    {input}
  </div>
}

export default HookExam;