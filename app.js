const d = document
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const $btn = d.getElementById("btn")
const $color = d.querySelector(".color")

$btn.addEventListener("click", function(){
  const randomNumber = getRandomNumber()
  console.log(randomNumber);
  d.body.style.backgroundColor = colors[randomNumber]
  $color.textContent = colors[randomNumber]
})

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length)
}

