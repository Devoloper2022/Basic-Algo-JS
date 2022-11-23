const isFriday = (date) => date.toString().slice(0, 3) == 'Fri' ? true : false
const isWeekend = (date) => date.toString().slice(0, 3) == 'Sat' ? true : false
const isLeapYear = (date) => date.toString().slice(11, 15) % 4 == 0 ? true : false
const isLastDayOfMonth = (date) => new Date(date.getTime() + (1000 * 60 * 60 * 24)).getDate() == 1
// console.log(isFriday());