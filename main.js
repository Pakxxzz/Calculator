let displayvalue = "";

function press(value) {
 displayvalue += value;
 document.querySelector("#display").value = displayvalue;
}

function clearDisplay() {
 displayvalue = "";
 document.querySelector("#display").value = displayvalue;
}

function eraseDisplay() {
 if (displayvalue.length > 0)
 {
  displayvalue = displayvalue.slice(0, -1);
  document.querySelector("#display").value = displayvalue;
 }
}

function outPut() {
 try {
  displayvalue = eval(displayvalue);
  document.querySelector("#display").value = displayvalue;
 } catch (error) {
  document.querySelector("#display").value = "Syntax Error";
 }
}
function negative(){
 if (displayvalue.startsWith("-")) {
  displayvalue = displayvalue.substring(1);
  document.querySelector("#display").value = displayvalue;
 } else {
  displayvalue = "-" + displayvalue;
  document.querySelector("#display").value = displayvalue;
 }
}