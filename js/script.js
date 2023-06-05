const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlusFive = document.querySelector('.plusFive')
const buttonMinusFive = document.querySelector('.minusFive')

const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffee = document.querySelector('.coffee')
const buttonFireplace = document.querySelector('.fireplace')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const forestAudio = new Audio("https://drive.google.com/file/d/1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA/view")
const rainAudio = new Audio("https://drive.google.com/file/d/1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2/view")
const coffeeAudio = new Audio("https://drive.google.com/file/d/1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA/view")
const fireplaceAudio = new Audio("https://drive.google.com/file/d/1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB/view")

let timerTimeOut
let isTimerRunning = false
let minutes = Number(minutesDisplay.textContent)


function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer() {
  updateDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function countdown() {
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateDisplay(minutes, 0)

    if(minutes <= 0) {
      return
    }

    if(seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

buttonPlay.addEventListener('click', function() {
  countdown()
})

buttonStop.addEventListener('click', function() {
  resetTimer()
})

buttonPlusFive.addEventListener('click', function() {
  let minutes = Number(minutesDisplay.textContent)

  if (minutes < 99) {
    minutes = Math.min(minutes + 5, 99)
  }

  
  updateDisplay(minutes, 0)
})

buttonMinusFive.addEventListener('click', function() {
  let minutes = Number(minutesDisplay.textContent)

  if(minutes >= 5) {
   minutes -= 5
  } else {
    minutes = 0
  }


  updateDisplay(minutes, 0)
})

function removeSelect() {
  buttonForest.classList.remove('selected')
  buttonRain.classList.remove('selected')
  buttonCoffee.classList.remove('selected')
  buttonFireplace.classList.remove('selected')
}

buttonForest.addEventListener('click', function() {
  removeSelect()
  buttonForest.classList.add('selected')
  forestAudio.play()
})

buttonRain.addEventListener('click', function() {
  removeSelect()
  buttonRain.classList.add('selected')
  rainAudio.play()
})

buttonCoffee.addEventListener('click', function() {
  removeSelect()
  buttonCoffee.classList.add('selected')
  coffeeAudio.play()
})

buttonFireplace.addEventListener('click', function() {
  removeSelect()
  buttonFireplace.classList.add('selected')
  fireplaceAudio.play()
})