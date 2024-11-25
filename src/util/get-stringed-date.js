//input type="date"는 new Date()를 벨류값으로 못받아서 문자열로 받아야됨
export const getStringedDate = (targetDate) => {
  //날짜 > YYYY-MM-DD 형태로 만들어야됨
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};
