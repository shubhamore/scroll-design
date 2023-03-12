// let cursor = document.getElementById("cursor")

// document.addEventListener("mousemove", function (e) {
//     cursor.style.cssText = "left:" + e.pageX + "px; top:" + e.pageY + "px"
// })



let home = document.querySelector('.home')
let sec1 = document.getElementById('section-1')
let sec2 = document.getElementById('section-2')
setInterval(() => console.log(window.scrollY), 500)
document.addEventListener('scroll', function (e) {
    let value = window.scrollY;
    if (value < 1.5) {
        home.style.borderRadius = "0rem"
        home.style.transform = `scale(1)`
    }
    if (value >= 1.5 && value < 350) {
        home.style.borderRadius = "2rem"
        home.style.transform = `scale(${1 - 0.001 * value})`
        home.style.transition = "all 0s ease-in-out"
        home.style.filter = `brightness(${100 - 0.15 * value}%)`
    }
    if (value >= 350) {
        home.style.transform = "translateY(-1000px)"
        home.style.transition = "all 1s ease-in-out"
    }
    if (value < 1104) {
        sec1.style.transition = "all 0s ease-in-out"
        sec1.style.borderRadius = "2rem"
        sec1.style.transform = `scale(${1 - 0.001 * (1104 - value)})`
        sec1.style.filter = `brightness(${100 - 0.15 * (1104 - value)}%)`
    }
    if (value >= 1104 && value < 1250) {
        sec1.style.borderRadius = "0rem"
        sec1.style.position = "sticky"
        sec1.style.transform = `scale(1)`
        sec1.style.top = "0"
    }
    if (value < 1490 && value >= 1250) {
        sec1.style.transition = "all 0s ease-in-out"
        sec1.style.borderRadius = "2rem"
        sec1.style.transform = `scale(${1 - 0.001 * (value - 1250)})`
        sec1.style.filter = `brightness(${100 - 0.15 * (value - 1250)}%)`
    }
    if (value >= 1490) {
        sec1.style.transform = "translateY(-1000px)"
        sec1.style.transition = "all 1s ease-in-out"
    }
    if (value < 2208) {
        sec2.style.transition = "all 0s ease-in-out"
        sec2.style.borderRadius = "2rem"
        sec2.style.transform = `scale(${1 - 0.001 * (2208 - value)})`
        sec2.style.filter = `brightness(${100 - 0.15 * (2208 - value)}%)`
    }
    if (value >= 2208) {
        sec2.style.borderRadius = "0rem"
        sec2.style.position = "sticky"
        sec2.style.transform = `scale(1)`
        sec2.style.top = "0"
    }
})