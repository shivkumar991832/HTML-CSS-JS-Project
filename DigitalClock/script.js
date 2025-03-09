const getTime = () => {
  let currTime = new Date();
  let hour = currTime.getHours();
  let minutes = currTime.getMinutes();
  let second = currTime.getSeconds();

  let hr = document.querySelector(".hours");
  hr.innerHTML = hour;

  let min = document.querySelector(".minutes");
  min.innerHTML = minutes;

  let sec = document.querySelector(".second");
  sec.innerHTML = second;
}


setInterval(getTime, 1000);
