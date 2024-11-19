import "./DiaryItem.css";
import Button from "./Button";
import { getEmotionImage } from "../util/get-emotion-image";

const DiaryItem = () => {
  const emotionId = 5;
  return (
    <div className="DiaryItem">
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className="info_section">
        <div className="createdate">{new Date().toLocaleDateString()}</div>
        <div className="content">일기 콘텐츠</div>
      </div>
      <div className="btn_section">
        <Button text={"수정하기"} />
      </div>
    </div>
  );
};
export default DiaryItem;
