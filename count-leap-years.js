const countLeapYears = (date) => {
    let count = 0
    for (let index = 1; index < date.getFullYear(); index++) {
        if (index % 4 == 0) {
            if (index % 100 == 0) {
                if (index % 400 == 0) {
                    count++
                }
            } else {
                count++
            }
        }
    }
    return count
}