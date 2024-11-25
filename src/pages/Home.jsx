import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";
import usePageTitle from "../hooks/usePageTitle";

const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0 // pivotDate에 해당하는 연,월과 월의 1일에 0시 0분 0초를 의미
  ).getTime(); // 그 값을 숫자값으로 저장
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1, //해당 달의 마지막 날을 구하기 위해 월에 +1을 해 다음달로 만들고 그 달의 0일로 하면 구하고자 하는 달의 마지막 날이 됨
    0,
    23,
    59,
    59
  ).getTime();
  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  ); //beginTime(첫날)보다 나중이고 endTime(막날)보다 과거이면 해달 달이 맞다~
};

const Home = () => {
  const data = useContext(DiaryStateContext);
  usePageTitle("감정 일기장");
  const [pivotDate, setPivotDate] = useState(new Date());
  const monthlyData = getMonthlyData(pivotDate, data);

  const onClickLeftBtn = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };
  const onClickRightBtn = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  //setPivotDate()에 인수로 new Date()를 생성해서 이 객체가 현재값(pivotDate)에서 한달 전 or 후를 저장하고 현재값을 변경
  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={"<"} onClick={onClickLeftBtn} />}
        rightChild={<Button text={">"} onClick={onClickRightBtn} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};
export default Home;
