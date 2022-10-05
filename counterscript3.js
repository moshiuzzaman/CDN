document.getElementById("coundetRoot__3").innerHTML =`
<div class="counter_content">
 

  <div class="counter_wrapper">
    <div class="counter_digit">
      <div id="counter_days__3" class="counter_label">
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
      <div id="counter_hours__3" class="counter_label">
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
      <div id="counter_minutes__3" class="counter_label">
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
      <div id="counter_seconds__3" class="counter_label">
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



let styles__3=`

div#counter_days__3,div#counter_hours__3,#counter_minutes__3,#counter_seconds__3{
  display: flex;
  font-size: 55px !important;
}
div#counter_days__3 span,div#counter_hours__3 span,#counter_minutes__3 span,#counter_seconds__3 span{

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
let styleSheet__3 = document.createElement("style");
styleSheet__3.type = "text/css";
styleSheet__3.innerText = styles__3;
document.head.appendChild(styleSheet__3);

let count__3;

const dd__3 = document.getElementById("counter_days__3");
const hh__3 = document.getElementById("counter_hours__3");
const mm__3 = document.getElementById("counter_minutes__3");
const ss__3 = document.getElementById("counter_seconds__3");



function start__3() {
  count = setInterval(() => timer__3(), 1000);
}


function timer__3() {
  num__3 +=incress__3;

  const timeToDisplay = {
    days: num__3 / 1000000000,
    hours: (num__3 / 1000000) % 1000,
    minutes: (num__3 / 1000) % 1000,
    seconds: num__3 % 1000,
  };

  setDisplay__3(timeToDisplay);
}



function setDisplay__3({ days, hours, minutes, seconds }) {
  setDigitContent__3(dd__3, days);
  setDigitContent__3(hh__3, hours);
  setDigitContent__3(mm__3, minutes);
  setDigitContent__3(ss__3, seconds);
}

function setDigitContent__3(digit, content) {
  let span0 = digit.children[0].children[0];
  let span1 = digit.children[1].children[0];
  let span2 = digit.children[2].children[0];



  if (content < 10) {
    listenEvent__3(span0, "0");
    listenEvent__3(span1, '0');
    listenEvent__3(span2, content);
  }else if(content < 100){
    listenEvent__3(span0, '0');
    listenEvent__3(span0, Math.floor(content / 10));
    listenEvent__3(span1, Math.floor(content % 10));
  }
   else {
    listenEvent__3(span0, Math.floor(content / 100));
    listenEvent__3(span1, Math.floor((content / 10) % 10));
    listenEvent__3(span2, Math.floor(content % 10));
  }
}

function listenEvent__3(element, content) {
  element.innerText = content;
}

start__3();
