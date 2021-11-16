    function testCase() {
        let myAlarms = new AlarmClock();

        myAlarms.addClock('15:00', () => console.log('Пора на пробежку!'), 1);
        myAlarms.addClock('15:01', () => console.log('Пробежка все еще возможна!'), 2);
        myAlarms.addClock('15:02', () => {console.log('Отложим пробежку, пора завтракать!'); myAlarms.removeClock(2)}, 3);

        try {
            myAlarms.addClock('15:03', () => console.log('Пора на работу:('),);
        }
        catch (e) {
            console.error(e.message);
        }

        myAlarms.addClock('15:04', () => console.log('Пора на работу:('), 3);
        
        myAlarms.addClock('15:05', () => {console.log('Пора на работу:('); myAlarms.clearAlarms(); myAlarms.printAlarms()}, 4);
        myAlarms.printAlarms();
        myAlarms.start();    
}

testCase();