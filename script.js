console.log("everything is ready")


const frame = document.querySelector(".frame")
const image = document.querySelector("#image")

const border = document.querySelector("#border")


console.log(frame, image, border)

image.addEventListener("change", () => {

  console.log(image.value)
  frame.style.backgroundImage = `url('./${image.value}.jpeg')`
  

})

border.addEventListener("input", () => {
  console.log(border.value)
  frame.style.border = `${border.value}px solid black`

})


const size = document.querySelector("#size")
console.log(size)
size.addEventListener("input", () => {
  console.log(size.value)
  frame.style.width = `${size.value}px`
  frame.style.height = `${size.value}px`
})

