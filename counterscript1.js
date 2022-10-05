document.getElementById("coundetRoot__1").innerHTML =`
<div class="counter_content">
 

  <div class="counter_wrapper">
    <div class="counter_digit">
      <div id="counter_days__1" class="counter_label">
        <div class="counter_inner">
          <span>0</span>
        </div>
        <div class="counter_inner">
          <span>0</span>
        </div>
        <div class="counter_inner">
          <span>0</span>
        </div>
      </div>
    </div>

    <span>,</span>

    <div class="counter_digit">
      <div id="counter_hours__1" class="counter_label">
        <div class="counter_inner">
          <span>0</span>
        </div>
        <div class="counter_inner">
          <span>0</span>
        </div>
        <div class="counter_inner">
          <span>0</span>
        </div>
      </div>
    </div>

    <span>,</span>

    <div class="counter_digit">
      <div id="counter_minutes__1" class="counter_label">
        <div class="counter_inner">
          <span>0</span>
        </div>
        <div class="counter_inner">
          <span>0</span>
        </div>
        <div class="counter_inner">
          <span>0</span>
        </div>
      </div>
    </div>

    <span>,</span>

    <div class="counter_digit">
      <div id="counter_seconds__1" class="counter_label">
        <div class="counter_inner">
          <span>0</span>
        </div>
        <div class="counter_inner">
          <span>0</span>
        </div>
        <div class="counter_inner">
          <span>0</span>
        </div>
      </div>
    </div>
  </div>
  
</div>
`



let styles__1=`

div#counter_days__1,div#counter_hours__1,#counter_minutes__1,#counter_seconds__1{
  display: flex;
  font-size: 55px !important;
}
div#counter_days__1 span,div#counter_hours__1 span,#counter_minutes__1 span,#counter_seconds__1 span{

    color: white;
    margin: 2px;
    font-size: 25px;
    border-radius: 10px;
}
.counter_wrapper {
  display: flex;
  margin-top: 30px;
}
.counter_content {
  font-size: 42px;
  font-family: fantasy;
}
.counter_inner {
  width: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
    background: black;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1px;
    border-radius: 6px;
}
`
let styleSheet__1 = document.createElement("style");
styleSheet__1.type = "text/css";
styleSheet__1.innerText = styles__1;
document.head.appendChild(styleSheet__1);

let count__1;

const dd__1 = document.getElementById("counter_days__1");
const hh__1 = document.getElementById("counter_hours__1");
const mm__1 = document.getElementById("counter_minutes__1");
const ss__1 = document.getElementById("counter_seconds__1");



function start__1() {
  count = setInterval(() => timer__1(), 1000);
}


function timer__1() {
  num__1 +=incress__1;

  const timeToDisplay = {
    days: num__1 / 1000000000,
    hours: (num__1 / 1000000) % 1000,
    minutes: (num__1 / 1000) % 1000,
    seconds: num__1 % 1000,
  };

  setDisplay__1(timeToDisplay);
}



function setDisplay__1({ days, hours, minutes, seconds }) {
  setDigitContent__1(dd__1, days);
  setDigitContent__1(hh__1, hours);
  setDigitContent__1(mm__1, minutes);
  setDigitContent__1(ss__1, seconds);
}

function setDigitContent__1(digit, content) {
  let span0 = digit.children[0].children[0];
  let span1 = digit.children[1].children[0];
  let span2 = digit.children[2].children[0];



  if (content < 10) {
    listenEvent__1(span0, "0");
    listenEvent__1(span1, '0');
    listenEvent__1(span2, content);
  }else if(content < 100){
    listenEvent__1(span0, '0');
    listenEvent__1(span0, Math.floor(content / 10));
    listenEvent__1(span1, Math.floor(content % 10));
  }
   else {
    listenEvent__1(span0, Math.floor(content / 100));
    listenEvent__1(span1, Math.floor((content / 10) % 10));
    listenEvent__1(span2, Math.floor(content % 10));
  }
}

function listenEvent__1(element, content) {
  element.innerText = content;
}

start__1();
