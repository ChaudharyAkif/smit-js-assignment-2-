output = (id) => {
  return document.getElementById(id);
};

let ConcationateString = document.querySelector("#ConcationateString");
ConcationateString.addEventListener("click", () => {
  ConcationateString.classList.add("active");
  setTimeout(() => {
    ConcationateString.classList.remove("active");
    ConcationateString.querySelector("i").classList.replace(
      "bx-cloud-download",
      "bx-check-circle"
    );
    ConcationateString.querySelector(".button-text").innerHTML = "successfully";
    let fistnama = "akif";
    let Lastnama = "Hussain";
    output("outputStatment").innerHTML = "akif" + "hussain";
    output("outputResult").innerHTML = fistnama + " " + Lastnama;
  }, 3800);
});

let userName = document.querySelector("#userName");
userName.addEventListener("click", () => {
  userName.classList.add("active");
  setTimeout(() => {
    userName.classList.remove("active");
    userName
      .querySelector("i")
      .classList.replace("bx-cloud-download", "bx-check-circle");
    userName.querySelector(".button-text").innerHTML = "successfully";
    let fistnama = prompt("What is your name");

    output("outputStatment").innerHTML = fistnama;
    output("outputResult").innerHTML = `The name of user  is ${fistnama} `;
  }, 3800);
});
let ComparisonOperator = document.querySelector("#ComparisonOperator");
ComparisonOperator.addEventListener("click", () => {
  ComparisonOperator.classList.add("active");
  setTimeout(() => {
    ComparisonOperator.classList.remove("active");
    ComparisonOperator.querySelector("i").classList.replace(
      "bx-cloud-download",
      "bx-check-circle"
    );
    ComparisonOperator.querySelector(".button-text").innerHTML = "successfully";

    output("outputStatment").innerHTML = "== , === , != , !== , < , > <= ,=> ";
    output("outputResult").innerHTML = `This is a  Comparison Operator  `;
  }, 3800);
});

let IfElse22 = document.querySelector("#IfElse22");
IfElse22.addEventListener("click", () => {
  IfElse22.classList.add("active");
  setTimeout(() => {
    IfElse22.classList.remove("active");
    IfElse22.querySelector("i").classList.replace(
      "bx-cloud-download",
      "bx-check-circle"
    );
    IfElse22.querySelector(".button-text").innerHTML = "successfully";

    let user = prompt("enter any number i tell to you can put less 5 or not");
    if (!user) {
      alert("please enter the number ");
      return;
    } else if (user.length > 1) {
      alert("please enter the only one number ");
      return;
    } else if (user < 5) {
      output("outputStatment").innerHTML = `you can enter this number ${user}`;
      output("outputResult").innerHTML = `you can enter less then 5 `;
      return;
    } else {
      output("outputStatment").innerHTML = `you can enter this number ${user}`;
      output("outputResult").innerHTML = `you can enter greater then 5  `;
      return;
    }
  }, 3800);
});

let AgeCheck = document.querySelector("#AgeCheck");
AgeCheck.addEventListener("click", () => {
  AgeCheck.classList.add("active");

  setTimeout(() => {
    AgeCheck.classList.remove("active");
    AgeCheck.querySelector("i").classList.replace(
      "bx-cloud-download",
      "bx-check-circle"
    );
    AgeCheck.querySelector(".button-text").innerHTML = "successfully";
    let user = prompt("Please enter your date of birthday");
    if (!user || user.length > 3) {
      alert("please enter the  correct age ");
      return;
    } else if (user > 18 && user < 40) {
      output("outputStatment").innerHTML = `you can enter this age ${user}`;
      output("outputResult").innerHTML = `you are young boy `;
      return;
    } else if (user > 40 && user < 60) {
      output("outputStatment").innerHTML = `you can enter this age ${user}`;
      output("outputResult").innerHTML = `you are young old `;
      return;
    } else if (user > 60) {
      output("outputStatment").innerHTML = `you can enter this age ${user}`;
      output("outputResult").innerHTML = `you are  old `;
      return;
    } else {
      output("outputStatment").innerHTML = `you can enter this age ${user}`;
      output("outputResult").innerHTML = `you are baby `;
      return;
    }
  }, 3800);
});

let Login = document.querySelector("#Login");
Login.addEventListener("click", () => {
  Login.classList.add("active");

  setTimeout(() => {
    Login.classList.remove("active");
    Login.querySelector("i").classList.replace(
      "bx-cloud-download",
      "bx-check-circle"
    );
    Login.querySelector(".button-text").innerHTML = "successfully";
    let user = prompt("please enter your email ");
    let password = prompt("please enter your password ");

    if (!user || user.length < 3) {
      alert("invalid ! ");
      return;
    } else if (user =="makifhussainmn@gmail.com" && password == "akif") {
        alert("succesffuly login")
      output("outputStatment").innerHTML = `you can enter this email  ${user} <br> you can enter this password  ${password} `;
      output("outputResult").innerHTML = `you are successfully Login `;
      return;
    } 
     else if (user !=="makifhussainmn@gmail.com" && password !== "akif") {
        alert("invalid ! please enter correctly ")
      output("outputStatment").innerHTML = `you can enter this email  ${user} <br> you can enter this password  ${password} `;
      output("outputResult").innerHTML = `please enter correctly email & password `;
      return;
    } 
  }, 3800);
});


let clearoutput = document.querySelector("#clearoutput");
clearoutput.addEventListener("click", () => {
  output("outputResult").innerHTML = "";
});

let clearOutputStatment = document.querySelector("#clearOutputStatment");
clearOutputStatment.addEventListener("click", () => {
  output("outputStatment").innerHTML = "";
});
