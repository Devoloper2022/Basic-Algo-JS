const firstDayWeek = (week, year) => {
    var date = new Date(year)
    if (week == 1) {
        date.setHours(24)
        return formatDate(date)
    }
    var days = week * 7 * 24
    date.setHours(days - 123)
    for (let i = 0; i < 7; i++) {
        let today = getWeekDay(date)
        if (today === 'Monday') {
            return formatDate(date)
        }
        date.setHours(-24)
    }
    return formatDate(date)
}
const formatDate = (date) => (("0" + (date.getDate() - 1)).slice(-2) + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("000" + date.getFullYear()).slice(-4))
const getWeekDay = (date) => (['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay() - 1])
