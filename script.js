                                   //   CURRENT TIME SET
const curr = document.querySelector('#current-T span');


function updateCurrTime() {
    const time = new Date();
    const hour = String(time.getHours()).padStart(2, '0');;
    const min = String(time.getMinutes()).padStart(2, '0');
    const sec = String(time.getSeconds()).padStart(2, '0');
    if (hour < 9) {
        curr.innerText = `0${hour}:${min}:${sec}`
    }

    if (min < 9) {
        curr.innerText = `${hour}:0${min}:${sec}`
    }
    if (sec < 10) {
        curr.innerText = `${hour}:${min}:0${sec}`
    }

    curr.innerText = `${hour}:${min}:${sec}`
}

setInterval(updateCurrTime, 1000);
//

                      //   onclick is used to set Alarm

var a = 0; // To prevent from multiple alarm alert

function setAlarm1() {
    const alarmDate = document.getElementById('input-1').value;

    const d = new Date(alarmDate);
    const n = new Date();
    if (document.getElementById('input-1').value == '') {
        alert("Enter Date and Time For Your Alarm")

    } else {
        if (d.getTime() < n.getTime()) {
            alert("alarm Cannot be Set in Past")
        } else {

            const timeLeft = d.getTime() - n.getTime();

            alarmOver(timeLeft); // Set Time Out Run When Alarm Time Out
            if (a == 0) {
                alarmSet1(alarmDate);
                upcomingAlarm(alarmDate, timeLeft);
                a = 1;
            }

        }

    }
}

let refOfTimeOut1; // Variable created to used as a reference to clear Timeout
function alarmOver(timeLeft) {
    refOfTimeOut1 = setTimeout(() => {
        // alert('time Over');
        popup1(); //Slider Activate
        deleteUpcommingAlarm();

    }, timeLeft)
}

                   // Deletion of Alarm When Delete Button Pressed (box1)
function del1() {

    if (document.getElementById('input-1').value == '') {
        alert("Kindly Set the Alarm");
    } else {
        if (refOfTimeOut1) {
            clearTimeout(refOfTimeOut1);
        }
        deleteUpcommingAlarm();
        remove();

    }


}




             // Slider Animation Appear When Alarm Over To show "Alarm Time Out" (for Box1 and Box2)


function popup1() {

    //   Outer Box Created
    const section = document.getElementById('alarm');
    const slider = document.createElement('div');
    slider.id = "Time-Over-set-slider1";
    section.appendChild(slider);

    // images

    const img = document.createElement('img');
    img.src = "images/TimeOut.png"
    slider.appendChild(img);

    // Text (Span)

    const span = document.createElement('span');
    span.innerText = "TimeOut !";
    slider.appendChild(span);

    //  Text Tips P tag
    // const Tips = document.createElement('p');
    // Tips.innerText = "THe most powerful warrior is Time.";
    // slider.appendChild(Tips);
    setTimeout(() => {
        slider.remove();
    }, 6000)
};


                        //  Slider Animation for set a Alarm (This is box1)


function alarmSet1(alarmDate) {

    //   Outer Box Created
    const section = document.getElementById('alarm');
    const slider = document.createElement('div');
    slider.id = "Time-Over-set-slider1"; // Using Style for add alarm
    section.appendChild(slider);

    // images

    const img = document.createElement('img');
    img.src = "images/AdaAlarmBG.png";
    slider.appendChild(img);

    // Text (Span)

    const span = document.createElement('span');
    span.innerText = "Alarm Sucessfully set";
    span.style.fontSize = "2.5rem";
    slider.appendChild(span);

    //  Text Tips P tag
    const Tips = document.createElement('p');
    Tips.innerText = `${alarmDate}`;
    slider.appendChild(Tips);
    setTimeout(() => {
        slider.remove();
    }, 4000);


}

                //  Slider Animation Comes when Alarm is Delete using delete button (For both box1 and box2)

function remove() {

    //   Outer Box Created
    const section = document.getElementById('alarm');
    const slider = document.createElement('div');
    slider.id = "Time-Over-set-slider1"; // Using Style for remove alarm
    section.appendChild(slider);

    // images

    const img = document.createElement('img');
    img.src = "images/deleteAlarm.png";
    slider.appendChild(img);

    // Text (Span)

    const span = document.createElement('span');
    span.innerText = "Alarm Removed";
    span.style.fontSize = "3rem";
    slider.appendChild(span);

    //  Text Tips P tag
    const Tips = document.createElement('p');

    slider.appendChild(Tips);
    setTimeout(() => {
        slider.remove();
    }, 5000);


}

                                     //  Upcoming Alarm (box1)


                                     // Add in upcomming List

function upcomingAlarm(alarmDate, timeLeft) {
    const box1 = document.getElementById('box1')
    const box2 = document.createElement('h4');
    box2.innerText = `${alarmDate}`;
    box1.appendChild(box2);



}
             // Delete alarm from upcoming list whether Times out or delete via delete button

function deleteUpcommingAlarm() {
    const Box1 = document.querySelector('#box1 h4');
    Box1.remove();
    a = 0;

}



