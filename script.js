
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisable = 
    user.name.toLowerCase().includes(value) ||
    user.category.toLowerCase().includes(value) 
    user.element.classList.toggle("hide", !isVisable)
  })
})

fetch("https://jcv12.github.io/drinksAlcho/")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      header.textContent = user.name
      body.textContent = user.category
      userCardContainer.append(card)
      return { name: user.name, category: user.category, element: card }
    })
  })