const divsImage = document.querySelectorAll('.image')
const rightArrow = document.querySelector('.right-arrow')
const leftArrow = document.querySelector('.left-arrow')

const hideArrow = arrow => {
    arrow.style.display = 'none'
    arrow.style.cursor = 'default'
}

const showArrow = arrow => {
    arrow.style.display = 'block'
    arrow.style.cursor = 'pointer'
}

let currentImage = 0

rightArrow
    .addEventListener('click', () => {
        if (currentImage < 3) {
            divsImage[currentImage].classList.remove('show')
            currentImage++
            divsImage[currentImage].classList.add('show')
        }
        if (currentImage > 0) {
            showArrow(leftArrow)
        }
        if (currentImage >= 3) {
            hideArrow(rightArrow)
        }
    })

leftArrow
    .addEventListener('click', () => {
        if (currentImage > 0) {
            divsImage[currentImage].classList.remove('show')
            currentImage--
            divsImage[currentImage].classList.add('show')
            if (currentImage < 3) {
                showArrow(rightArrow)
            }
        }
        if (currentImage == 0) {
            hideArrow(leftArrow)
        }
    })
