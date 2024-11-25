import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    nav("/", { replace: true }); //replace: true 뒤로가기 방지
  };

  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button text={`< 뒤로 가기`} onClick={() => nav(-1)} />} // 네비게이션 함수에 -1 입력시 뒤로가기가 됨
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};
export default New;
