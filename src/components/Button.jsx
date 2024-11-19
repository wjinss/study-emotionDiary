import "./Button.css";
const Button = ({ text, type, onClick }) => {
  return (
    <button onClick={onClick} className={`Button Button_${type}`}>
      {/* 컴포넌트에 props값에 따라서 각각 다른 스타일을 주려면 props값에 따리서 렌더링하려는 요소의 클래스명을 동적으로 변경 */}
      {text}
    </button>
  );
};
export default Button;
