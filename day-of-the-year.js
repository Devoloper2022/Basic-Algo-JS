const dayOfTheYear = (date) => {
    const epoch = new Date('0001-01-01')
    epoch.setFullYear(date.getFullYear())
    const time = (date - epoch) / (1000 * 60 * 60 * 24)
    return Math.round(time) + 1
}