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

        let launchesForSelectedPage = launches.calendar.getLaunchesForPage(
            selectedYear,
            selectedMonth
        );

        let selectedAsMoment = moment(selectedYear + '-' + selectedMonth);

        let daysInSelectedMonth = selectedAsMoment.daysInMonth();
        let firstMonthDayAsWeekDayNumber = selectedAsMoment.day();

        let parentOfSquares = document.querySelector('.si-calendarModal .si-calendarCore');
        parentOfSquares.innerHTML = '';
        let calendarPageSpan = document.querySelector('.si-calendarModal .si-calendarPage');
        calendarPageSpan.innerHTML =
            launches.calendar.monthsOfYear[selectedMonth - 1] +
            ', ' +
            selectedYear
        ;

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
            if (launches.calendar.doesDayMatchLaunches(launchesForSelectedPage, i + 1)) {
                square.classList.add('si-launchDay');
            }
            square.innerHTML = i + 1;
            parentOfSquares.appendChild(square);
        }

    },

    onPrevClicked: function() {
        let month = launches.data.calendarPage.month;

        if (month === 1) {
            launches.data.calendarPage.month = 12;
            launches.data.calendarPage.year -= 1;
        } else {
            launches.data.calendarPage.month -= 1;
        }

        launches.calendar.render();
    },

    onNextClicked: function() {
        let month = launches.data.calendarPage.month;

        if (month === 12) {
            launches.data.calendarPage.month = 1;
            launches.data.calendarPage.year += 1;
        } else {
            launches.data.calendarPage.month += 1;
        }

        launches.calendar.render();
    },

    getLaunchesForPage: function(year, month) {
        let allItems = launches.data.allItems;

        let resultArray = [];
        for (let i = 0; i < allItems.length; i++) {
            if (launches.calendar.doesMonthAndYearMatch(year, month, allItems[i].date_utc)) {
                resultArray.push(allItems[i]);
            }
        }

        return resultArray;

    },

    doesMonthAndYearMatch: function(
        year,
        month,
        dateString
    ) {
        let yearFromString = parseInt(dateString.split('-')[0]);
        let monthFromString = parseInt(dateString.split('-')[1]);

        if (year === yearFromString && month === monthFromString) {
            return true;
        } else {
            return false;
        }
    },

    doesDayMatchLaunches: function(launches, day) {
        for (let i = 0; i < launches.length; i++) {
            let dateString = launches[i].date_utc;
            // 2020-03-07T04:50:31.000Z
            let dayString = dateString.split('T')[0].split('-')[2];
            if (parseInt(dayString) === day) {
                return true;
            }
        }
        return false;
    }

};