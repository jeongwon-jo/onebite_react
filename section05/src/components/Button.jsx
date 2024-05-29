const Button = ({ text, color, children }) => {
  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(text);
    console.log(e);
  }
  return (
    <button
      onClick={onClickButton}
      style={{
      color: color
    }}>{text} - {color.toUpperCase()}
      {children}
    </button>
  )
}

Button.defaultProps = {
  color: "black",
}

export default Button;