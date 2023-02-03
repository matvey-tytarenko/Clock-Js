function getDateTime() {
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let seconds = date.getSeconds()

    document.getElementById("hour").innerHTML = hour
    document.getElementById("minutes").innerHTML = minute
    document.getElementById("seconds").innerHTML = seconds
}

setInterval(getDateTime, 1000)