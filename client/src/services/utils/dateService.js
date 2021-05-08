const today = new Date();
const days5 = new Date();

days5.setDate(days5.getDate() - 5);

export const daysDiffCheck = (days) => {
  console.log("today", today);
  const day = new Date();
  day.setDate(day.getDate() - days);
  // To calculate the time difference of two dates
  var Difference_In_Time = today.getTime() - day.getTime();

  // To calculate the no. of days between two dates
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  return Difference_In_Days;
};

export const makeDate = (now) => {
  let date = now.getDate(),
    month = now.getMonth() + 1,
    year = now.getFullYear();
  return `${year}-${month}-${date}`;
};
export const showDate = (now) => {
  let date = now.getDate(),
    month = now.getMonth() + 1,
    year = now.getFullYear();
  if (date < 10) date = "0" + date;
  if (month < 10) month = "0" + month;
  return `${date}/${month}/${year}`;
};

export const dateToday = () => {
  const now = new Date();

  const today = makeDate(now);
  return today;
};

function days_Back(days) {
  const day = new Date();
  day.setDate(day.getDate() - days);
  return showDate(day);
}

const getDate = {
  dateToday,
  days_Back,
  makeDate,
};
export default getDate;
