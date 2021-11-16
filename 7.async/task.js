class Alarm {
    constructor(time, callback, id) {
        this.time = time;
        this.alarmId = id;
        this.callback = callback;
    }
}

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null; 
    }

    addClock(time, callback, id) {
        if (!id) throw new Error ('id value is not set');               // Отслеживать ошибку!

        if (this.alarmCollection.find(item => item.alarmId === id)) {
            console.error ('There is an alarm with the same id already');
            return;
        }

        this.alarmCollection.push(new Alarm(time, callback, id));
    }

    removeClock(id) {
        let alarmNumber = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(item => item.alarmId !== id);
        (alarmNumber < this.alarmCollection.length) ? true : false;
    }

    getCurrentFormattedTime() {
        let currentTime = new Date();
        let hour = currentTime.getHours();
        let min = currentTime.getMinutes();

        return (`${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}`);
    }

    start() {
        let saveThis = this;

        function checkClock() {
            saveThis.alarmCollection.forEach((alarm) => {
                if (alarm.time === saveThis.getCurrentFormattedTime()) {
                    alarm.callback();
                }
            });
        }

        if (!this.timerId) {
           this.timerId = setInterval(checkClock, 5000);
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(element => 
            console.log(`Alarm № ${element.alarmId}, alarm time ${element.time}`));
    }

    clearAlarms () {
        this.stop();
        this.alarmCollection.splice(0, this.alarmCollection.length);
    }
}