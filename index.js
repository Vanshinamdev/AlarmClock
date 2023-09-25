/*const alarmTimeInput = document.getElementById("input");
const alarmSound = document.getElementById("alarmSound");
let alarmInterval;
function setAlarm() {
    console.log("set alarm clicked!!");

    let alarmTime = alarmTimeInput.Value; //22:50:00
    let now = new Date();

    const hours = alarmTime.substr(0, 2); //Index start,length
    const mintes = alarmTime.substr(3, 2);

    let alarms = new Date();
    alarms.setHours(hours);
    alarms.setMinutes(minutes);
    alarms.setSeconds(0);

    if (alarm < now) {//check the day
        alarm.setDate(alarm.getDate() + 1);
    }
    const timeToalarm = alarm - now;
    alarmInterval = setTimeout(() => {
        playAlarm();

    }, timeToalarm);
}

function playAlarm() {
    alarmSound.play();

}
function stopAlarm() {
    clearTimeout(alarmInterval);
    alarmSound.pause();

}*/


const alarmTimeInput = document.getElementById("alarmTime");
const alarmSound = document.getElementById("alarmSound");
let alarmInterval;
function setAlarm() {
    console.log("set alarm clicked!!");
    let alarmTime = alarmTimeInput.value; // 22:50:00
    let now = new Date();

    const hours = alarmTime.substr(0, 2); // index start, length
    const minutes = alarmTime.substr(3, 2);

    let alarm = new Date();
    alarm.setHours(hours);
    alarm.setMinutes(minutes);
    alarm.setSeconds(0);
    console.log("alarm", alarm);
    if (alarm < now) {
        // check the day
        alarm.setDate(alarm.getDate() + 1);
    }
    const timeToalarm = alarm - now;
    alarmInterval = setTimeout(() => {
        playAlarm();
    }, timeToalarm);
}

function playAlarm() {
    alarmSound.play();
}

function stopAlarm() {
    clearTimeout(alarmInterval);
    alarmSound.pause();
}