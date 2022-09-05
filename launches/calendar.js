launches.calendar = {

    monthsOfYear: [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December',
    ],

    init: function() {

        launches.data.calendarPage.year = moment().year();
        launches.data.calendarPage.month = moment().month() + 1;

        let prevButton = document.querySelector('.si-calendarModal .si-prevButton');
        let nextButton = document.querySelector('.si-calendarModal .si-nextButton');

        prevButton.addEventListener('click', launches.calendar.onPrevClicked);
        nextButton.addEventListener('click', launches.calendar.onNextClicked);

        launches.calendar.render();
    },

    render: function() {

        let selectedYear = launches.data.calendarPage.year;
        let selectedMonth = launches.data.calendarPage.month;

        let selectedAsMoment = moment(selectedYear + '-' + selectedMonth);

        let daysInSelectedMonth = selectedAsMoment.daysInMonth();
        let firstMonthDayAsWeekDayNumber = selectedAsMoment.day();

        let parentOfSquares = document.querySelector('.si-calendarModal .si-calendarCore');
        parentOfSquares.innerHTML = '';
        let calendarPageSpan = document.querySelector('.si-calendarModal .si-calendarPage');
        calendarPageSpan.innerHTML = launches.calendar.monthsOfYear[selectedMonth - 1];

        for (let i = 0; i < firstMonthDayAsWeekDayNumber; i++) {
            // put an empty square in HTML
            let emptySquare = document.createElement('div');
            emptySquare.classList.add('si-day');
            parentOfSquares.appendChild(emptySquare);
        }
        for (let i = 0; i < daysInSelectedMonth; i++) {
            // put a day square in HTML
            let square = document.createElement('div');
            square.classList.add('si-day');
            square.classList.add('si-borderedDay');
            square.innerHTML = i + 1;
            parentOfSquares.appendChild(square);
        }

    },

    onPrevClicked: function() {
        launches.data.calendarPage.month -= 1;
        launches.calendar.render();
    },

    onNextClicked: function() {
        launches.data.calendarPage.month += 1;
        launches.calendar.render();
    }

};