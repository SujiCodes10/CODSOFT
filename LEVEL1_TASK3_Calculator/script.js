let display =
document.getElementById('display');

function appendValue(value) {
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearAll() {
    display.innerText ='0';
}

function deleteOne() {
   let current = display.innerText;
   if (current.length > 1) {
    display.innerText =
   current.slice(0, -1);
   } else {
    display.innerText ='0';
   }
}

function calculate() {
    try {
        display.innerText =
        eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}

function toggleSign() {
    let current = display.innerText;
    if (!isNaN(current) && current !== '0') {
        if (current.startsWith('-')) {
            display.slice(1);
        } else {
            display.innerText = '-'+ current;
        }
    }
}
