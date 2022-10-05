document.getElementById("coundetRoot__2").innerHTML =`
<div class="counter_content">
 

  <div class="counter_wrapper">
    <div class="counter_digit">
      <div id="counter_days__2" class="counter_label">
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
      <div id="counter_hours__2" class="counter_label">
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
      <div id="counter_minutes__2" class="counter_label">
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
      <div id="counter_seconds__2" class="counter_label">
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



let styles__2=`

div#counter_days__2,div#counter_hours__2,#counter_minutes__2,#counter_seconds__2{
  display: flex;
  font-size: 55px !important;
}
div#counter_days__2 span,div#counter_hours__2 span,#counter_minutes__2 span,#counter_seconds__2 span{

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
let styleSheet__2 = document.createElement("style");
styleSheet__2.type = "text/css";
styleSheet__2.innerText = styles__2;
document.head.appendChild(styleSheet__2);

let count__2;

const dd__2 = document.getElementById("counter_days__2");
const hh__2 = document.getElementById("counter_hours__2");
const mm__2 = document.getElementById("counter_minutes__2");
const ss__2 = document.getElementById("counter_seconds__2");



function start__2() {
  count = setInterval(() => timer__2(), 1000);
}


function timer__2() {
  num__2 +=incress__2;

  const timeToDisplay = {
    days: num__2 / 1000000000,
    hours: (num__2 / 1000000) % 1000,
    minutes: (num__2 / 1000) % 1000,
    seconds: num__2 % 1000,
  };

  setDisplay__2(timeToDisplay);
}



function setDisplay__2({ days, hours, minutes, seconds }) {
  setDigitContent__2(dd__2, days);
  setDigitContent__2(hh__2, hours);
  setDigitContent__2(mm__2, minutes);
  setDigitContent__2(ss__2, seconds);
}

function setDigitContent__2(digit, content) {
  let span0 = digit.children[0].children[0];
  let span1 = digit.children[1].children[0];
  let span2 = digit.children[2].children[0];



  if (content < 10) {
    listenEvent__2(span0, "0");
    listenEvent__2(span1, '0');
    listenEvent__2(span2, content);
  }else if(content < 100){
    listenEvent__2(span0, '0');
    listenEvent__2(span0, Math.floor(content / 10));
    listenEvent__2(span1, Math.floor(content % 10));
  }
   else {
    listenEvent__2(span0, Math.floor(content / 100));
    listenEvent__2(span1, Math.floor((content / 10) % 10));
    listenEvent__2(span2, Math.floor(content % 10));
  }
}

function listenEvent__2(element, content) {
  element.innerText = content;
}

start__2();
