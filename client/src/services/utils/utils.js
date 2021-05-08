import getDate from "./dateService";
import Swal from "sweetalert2";
/* swall confirm delete message */
export async function swalConfitm() {
  const deleteAlert = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
      return true;
    } else {
      return false;
    }
  });
  if (deleteAlert) return true;
  return false;
}

/* top 5 products function */
export function top5Funk(arr) {
  const newArr = [];
  arr.sort((a, b) => {
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
  });
  for (let i in arr) {
    if (newArr.length > 0) {
      if (newArr.find(({ id }) => id === arr[i].id)) {
        let index = newArr.indexOf(newArr.find(({ id }) => id === arr[i].id));
        newArr[index].amount = newArr[index].amount + arr[i].amount;
      } else {
        newArr.push(arr[i]);
      }
    } else {
      newArr.push(arr[0]);
    }
  }
  return newArr.sort((a, b) => b.amount - a.amount).splice(0, 5);
}

/* unique 5 products function */
export function unique5Funk(arr) {
  const newArr = [];
  arr.sort((a, b) => {
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
  });
  for (let i in arr) {
    arr[i].unique = 1;
    if (newArr.length > 0) {
      if (newArr.find(({ id }) => id === arr[i].id)) {
        let index = newArr.indexOf(newArr.find(({ id }) => id === arr[i].id));
        newArr[index].unique += 1;
      } else {
        newArr.push(arr[i]);
      }
    } else {
      newArr.push(arr[0]);
    }
  }
  return newArr.sort((a, b) => b.unique - a.unique).splice(0, 5);
}

/* unique 5 products function */
export function stats5daysFunk(arr) {
  const newArr = [];
  const daysNum = 5;
  const today = new Date(getDate.dateToday());
  for (let i = 0; i < daysNum; i++) {
    let date = getDate.days_Back(i);
    newArr.push({ date: date, total: 0 });
  }

  for (let product of arr) {
    const createdAt = new Date(getDate.makeDate(new Date(product.createdAt)));
    const diffTime = Math.abs(today - createdAt);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays + " days");
    if (diffDays < 5) {
      newArr[diffDays].total += product.total;
    }
  }
  return newArr;
}
