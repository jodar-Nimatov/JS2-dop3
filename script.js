let menu = document.querySelector('.menu')
let row = document.querySelector('.row')

fetch(`https://api.sampleapis.com/coffee/hot`)
.then((res) => res.json())
.then((res) => {
    res.forEach((item) => {
        row.innerHTML += `
        <div class = "card">
        <img src = "${item.image}" alt = ""/>
         <h2 class = "card_title">${item.title}</h2>
         <p class = "card_description">${item.description}</p>
         <p class = "ingredients">${item.ingredients}</p>
         <p class = "card_id">${item.id}</p>
        </div>
        `
    })
})
row('all')