var startbtn = document.querySelector('.start-btn');
var stopbtn = document.querySelector('.stop-btn');
var resetbtn = document.querySelector('.reset-btn');
var sechalf = document.querySelector('.secondhalf');
var timecheck;
let hourstr = '0';
let minstr = '0';
let secstr = '0';
let count = '0';

startbtn.addEventListener('click', startfunc);

function startfunc() {
    timecheck = true;
    stopwatch();
}

stopbtn.addEventListener('click', stopfunc);

function stopfunc() {
    timecheck = false;
    if (!timecheck) {
        var li = document.createElement('li'); // Create a new list item
        li.textContent = `Time: ${hourstr}:${minstr}:${secstr}:${count}`;
        var main = document.querySelector('ul');
        main.appendChild(li); // Append the list item to the ul
        li.addEventListener('click', function() {
            this.remove(); // Remove the clicked list item
        });
    }
}

resetbtn.addEventListener('click', resetfunc);

function resetfunc() {
    timecheck = false;
    hourstr = '0';
    minstr = '0';
    secstr = '0';
    count = '0';
    document.querySelector('.hr').innerHTML = "00";
    document.querySelector('.min').innerHTML = "00";
    document.querySelector('.sec').innerHTML = "00";
    document.querySelector('.count').innerHTML = "00";
}

function stopwatch() {
    if (timecheck) {
        count++;
        if (count == 100) {
            secstr++;
            count = 0;
        }
        if (secstr == 60) {
            minstr++;
            secstr = 0;
            count = 0;
        }
        if (minstr == 60) {
            hourstr++;
            minstr = 0;
            secstr = 0;
            count = 0;
        }

        let hourstring = hourstr;
        let minstring = minstr;
        let secondstring = secstr;
        let cstr = count;

        if (hourstring < 10) {
            hourstring = '0' + hourstring;
        }
        if (minstring < 10) {
            minstring = '0' + minstring;
        }
        if (secondstring < 10) {
            secondstring = '0' + secondstring;
        }
        if (cstr < 10) {
            cstr = '0' + cstr;
        }
        document.querySelector('.hr').innerHTML = hourstring;
        document.querySelector('.min').innerHTML = minstring;
        document.querySelector('.sec').innerHTML = secondstring;
        document.querySelector('.count').innerHTML = cstr;
        setTimeout(stopwatch, 10);
    }
}
