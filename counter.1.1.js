


function start() {
  getHtml1.innerHTML =`
<div class="counter_content">
 

  <div class="counter_wrapper">
    <div class="counter_digit">
      <div id="counter_days_1" class="counter_label">
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
      <div id="counter_hours_1" class="counter_label">
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
      <div id="counter_minutes_1" class="counter_label">
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
      <div id="counter_seconds_1" class="counter_label">
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



let styles=`

div#counter_days_1,div#counter_hours_1,#counter_minutes_1,#counter_seconds_1{
  display: flex;
  font-size: 55px !important;
}
div#counter_days_1 span,div#counter_hours_1 span,#counter_minutes_1 span,#counter_seconds_1 span{

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
let styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

let count;


  count = setInterval(() => timer(), 1000);
}


function timer() {
  num1 +=incress1;

  const timeToDisplay = {
    days: num1 / 1000000000,
    hours: (num1 / 1000000) % 1000,
    minutes: (num1 / 1000) % 1000,
    seconds: num1 % 1000,
  };

  setDisplay(timeToDisplay);
}



function setDisplay({ days, hours, minutes, seconds }) {
  
const dd = document.getElementById("counter_days_1");
const hh = document.getElementById("counter_hours_1");
const mm = document.getElementById("counter_minutes_1");
const ss = document.getElementById("counter_seconds_1");
  setDigitContent(dd, days);
  setDigitContent(hh, hours);
  setDigitContent(mm, minutes);
  setDigitContent(ss, seconds);
}

function setDigitContent(digit, content) {
  let span0 = digit.children[0].children[0];
  let span1 = digit.children[1].children[0];
  let span2 = digit.children[2].children[0];



  if (content < 10) {
    listenEvent(span0, "0");
    listenEvent(span1, '0');
    listenEvent(span2, content);
  }else if(content < 100){
    listenEvent(span0, '0');
    listenEvent(span0, Math.floor(content / 10));
    listenEvent(span1, Math.floor(content % 10));
  }
   else {
    listenEvent(span0, Math.floor(content / 100));
    listenEvent(span1, Math.floor((content / 10) % 10));
    listenEvent(span2, Math.floor(content % 10));
  }
}

function listenEvent(element, content) {
  element.innerText = content;
}

start();
