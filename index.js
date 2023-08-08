const clockContainer = document.querySelector('.clock-container');

const updateClock = () => {
    const present = new Date()
    const hours = present.getHours()
    const minutes = present.getMinutes()
    const seconds = present.getSeconds()

    const clockHTML = `
        <div>${String(hours).length === 1 ? `0${hours}` : hours}</div>:
        <div>${String(minutes).length === 1 ? `0${minutes}` : minutes}</div> :
        <div>${String(seconds).length === 1 ? `0${seconds}` : seconds}</div>
    `

    clockContainer.innerHTML = clockHTML
}

setInterval(updateClock,1000)