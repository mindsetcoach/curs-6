launches.calendar = {

    init: function() {

        launches.data.calendarPage.year = moment().year();
        launches.data.calendarPage.month = moment().month() + 1;

        launches.calendar.render();
    },

    render: function() {

        let selectedYear = launches.data.calendarPage.year;
        let selectedMonth = launches.data.calendarPage.month;

        let selectedAsMoment = moment(selectedYear + '-' + selectedMonth);

        let daysInSelectedMonth = selectedAsMoment.daysInMonth();
        let firstMonthDayAsWeekDayNumber = selectedAsMoment.day();

        for (let i = 0; i < firstMonthDayAsWeekDayNumber; i++) {
            // put an empty square in HTML
        }
        for (let i = 0; i < daysInSelectedMonth; i++) {
            // put a day square in HTML
        }

        alert(firstMonthDayAsWeekDayNumber)
    }

};