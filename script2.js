                // (box2) Copying all Above code Same to same with some variable name changes

                   
                // When Set Alarm is Press This Function run to set alarm (box2)

var b=0;
function setAlarm2() {
    const alarmDate = document.getElementById('input-2').value;

    const d = new Date(alarmDate);
    const n = new Date();
    if(document.getElementById('input-2').value==''){
          alert("Enter Date and Time For Your Alarm")     

        }else{
            if (d.getTime() < n.getTime()) {
                alert("alarm Cannot be Set in Past")
            } else {
                const timeLeft = d.getTime() - n.getTime();
                alarmOver1(timeLeft);
                if(b==0){
                    alarmSet2(alarmDate);
                    upcomingAlarm2(alarmDate,timeLeft);
                    b=1;
                }
        }
    }


}
                                  
                //    This function is used to set the alarm time and settimout run when alarm time over  (box2)


let refOfTimeOut2;
function alarmOver1(timeLeft) {
    refOfTimeOut2 = setTimeout(() => {
        // alert('time Over');
        popup1(); //Slider Activate   Common Function For Both boxes
        
        deleteUpcommingAlarm2();

    }, timeLeft)
}
                        // Deletion of Alarm When Delete Button Pressed (box2)
function del2() {
  
    if(document.getElementById('input-2').value==''){
        alert("Kindly Set the Alarm" );
    }else{
        if (refOfTimeOut2) {
            clearTimeout(refOfTimeOut2);
        }
        remove();
        deleteUpcommingAlarm2();
    }

}

     //  Slider Animation for set a Alarm (This is box2)

function alarmSet2(alarmDate) {

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


                    //    Upcoming Alarm for Box 2


 
                    //Add in upcoming List    (box2)

function upcomingAlarm2(alarmDate,timeLeft){
    const box1 =document.getElementById('box2')
    const box2 = document.createElement('h4');
    box2.innerText = `${alarmDate}`;
         box1.appendChild(box2);
    
     
}
                           
        //Delete in upcoming List whether Time over or delete using Delete button  (box2)
function deleteUpcommingAlarm2(){
    const Box2 = document.querySelector('#box2 h4');
    Box2.remove();
    b=0;
    
}

