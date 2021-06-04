// const toggle = document.querySelector('.toggle')
// const navigation = document.querySelector('.navigation')

// toggle.addEventListener('click', () => {
//   toggle.classList.toggle('active')
//   navigation.classList.toggle('active')
// })

const toggle = document.querySelector('.flip-card-inner')
const navigation = document.querySelector('.flip-card-back')

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active')
  navigation.classList.toggle('active')
})