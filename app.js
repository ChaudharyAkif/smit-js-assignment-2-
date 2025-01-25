output = (id) => {
    return document.getElementById(id);
  };
  
  let ConcationateString = document.querySelector("#ConcationateString");
  ConcationateString.addEventListener("click", () => {
    ConcationateString.classList.add("active");
    setTimeout(() => {
      ConcationateString.classList.remove("active");
      ConcationateString
        .querySelector("i")
        .classList.replace("bx-cloud-download", "bx-check-circle");
      ConcationateString.querySelector(".button-text").innerHTML = "successfully";
      let fistnama = "akif";
      let Lastnama = "Hussain";
   output("outputStatment").innerHTML = "akif" + "hussain" ;
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
     
   output("outputStatment").innerHTML = fistnama ;
   output("outputResult").innerHTML =  `The name of user  is ${fistnama} `;
}, 3800);
});
let ComparisonOperator = document.querySelector("#ComparisonOperator");
ComparisonOperator.addEventListener("click", () => {
    ComparisonOperator.classList.add("active");
    setTimeout(() => {
      ComparisonOperator.classList.remove("active");
      ComparisonOperator
      .querySelector("i")
      .classList.replace("bx-cloud-download", "bx-check-circle");
      ComparisonOperator.querySelector(".button-text").innerHTML = "successfully";
      
      output("outputStatment").innerHTML =  "== , === , != , !== , < , > <= ,=> ";
      output("outputResult").innerHTML =  `This is a  Comparison Operator  `;

    }, 3800);
  });
  
  let canelcase = document.querySelector("#canelcase");
  canelcase.addEventListener("click", () => {
    canelcase.classList.add("active");
    setTimeout(() => {
      canelcase.classList.remove("active");
      canelcase
        .querySelector("i")
        .classList.replace("bx-cloud-download", "bx-check-circle");
      canelcase.querySelector(".button-text").innerHTML = "successfully";
  
      let fistnama = "akif";
      let Lastnama = "Hussain";
  
      alert(fistnama + " " + Lastnama);
    }, 3800);
  });
  
  let sum2number = document.querySelector("#sum2number");
  sum2number.addEventListener("click", () => {
    sum2number.classList.add("active");
  
    setTimeout(() => {
      sum2number.classList.remove("active");
      sum2number
        .querySelector("i")
        .classList.replace("bx-cloud-download", "bx-check-circle");
      sum2number.querySelector(".button-text").innerHTML = "successfully";
      let a = 10;
      let b = 20;
      output("outputStatment").innerHTML = `10 + 20 `;
      output("outputResult").innerHTML = a + b;
    }, 3800);
  });
  
  let sub2number = document.querySelector("#sub2number");
  sub2number.addEventListener("click", () => {
    sub2number.classList.add("active");
  
    setTimeout(() => {
      sub2number.classList.remove("active");
      sub2number
        .querySelector("i")
        .classList.replace("bx-cloud-download", "bx-check-circle");
      sub2number.querySelector(".button-text").innerHTML = "successfully";
      let a = 20;
      let b = 10;
      output("outputStatment").innerHTML = `20 - 10 `;
      output("outputResult").innerHTML = a - b;
    }, 3800);
  });
  
  let multi2number = document.querySelector("#multi2number");
  multi2number.addEventListener("click", () => {
    multi2number.classList.add("active");
  
    setTimeout(() => {
      multi2number.classList.remove("active");
      multi2number
        .querySelector("i")
        .classList.replace("bx-cloud-download", "bx-check-circle");
      multi2number.querySelector(".button-text").innerHTML = "successfully";
      let a = 20;
      let b = 10;
      output("outputStatment").innerHTML = `20 * 10 `;
      output("outputResult").innerHTML = a * b;
    }, 3800);
  });
  
  let divide2number = document.querySelector("#divide2number");
  divide2number.addEventListener("click", () => {
    divide2number.classList.add("active");
  
    setTimeout(() => {
      divide2number.classList.remove("active");
      divide2number
        .querySelector("i")
        .classList.replace("bx-cloud-download", "bx-check-circle");
      divide2number.querySelector(".button-text").innerHTML = "successfully";
      let a = 20;
      let b = 10;
      output("outputStatment").innerHTML = `20 / 10 `;
      output("outputResult").innerHTML = a / b;
    }, 3800);
  });
  
  let calnum = document.querySelector("#calnum");
  calnum.addEventListener("click", () => {
    calnum.classList.add("active");
  
    setTimeout(() => {
      calnum.classList.remove("active");
      calnum
        .querySelector("i")
        .classList.replace("bx-cloud-download", "bx-check-circle");
      calnum.querySelector(".button-text").innerHTML = "successfully";
      let a = 20 + 10 + 50 - (80 / 50) * 50 + 10;
      output("outputStatment").innerHTML = `20+10+50-80/50*50 `;
      output("outputResult").innerHTML = `${a} `;
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
  