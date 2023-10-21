let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let age = document.getElementById("age");
let qad = document.getElementById("qad");
let vazn = document.getElementById("vazn");
let btn = document.getElementById("btn");
let modal = document.getElementById("modal");
let img = document.getElementById("img");
let box = document.getElementById("box");
btn.addEventListener("click", function () {
  let vazn2 = document.getElementById("vazn").value;
  let qad2 = document.getElementById("qad").value;
  let fname2 = document.getElementById("fname").value;
  let lname2 = document.getElementById("lname").value;

  let bmi = vazn2 / (qad2 * qad2);
  if (bmi > 18.5 && bmi < 24.9) {
    box.classList.add("active");

    modal.innerHTML = `${fname2} ${lname2}  وزن شما ایده آل است`;
    modal.style.backgroundColor = "lightblue";
  } else if (bmi > 25 && bmi < 29.9) {
    box.classList.add("active");

    modal.innerHTML = `${fname2} ${lname2}  شما اضافه وزن دارید`;
    modal.style.backgroundColor = "lightgreen";
  } else if (bmi > 30 && bmi < 39.9) {
    box.classList.add("active");

    modal.innerHTML = `${fname2} ${lname2}  شما چاق هستید`;
    modal.style.backgroundColor = "yellow";
  } else if (bmi > 40) {
    box.classList.add("active");

    modal.innerHTML = `${fname2} ${lname2}  شما چاقی مفرط دارید`;
    modal.style.backgroundColor = "red";
  } else {
    alert("مشخصات خود را به درستی وارد کنید");
  }
});
