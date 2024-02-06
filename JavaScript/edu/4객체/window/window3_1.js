setInterval(function () {
  let date = new Date(); //현재 날짜 정보를 제공하는 객체
  console.log(
    date.getFullYear() +
      "년 " +
      (date.getMonth() + 1) +
      "월 " +
      date.getDate() +
      "일 " +
      date.getHours() +
      "시 " +
      date.getMinutes() +
      "분 " +
      date.getSeconds() +
      "초 "
  );
}, 1000);
