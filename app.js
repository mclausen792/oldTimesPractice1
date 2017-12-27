var button1 = document.getElementById('drinkBtn')
var main = document.getElementById('mainDiv')


button1.addEventListener('click', function(event) {
  event.preventDefault()
  console.log("Do I work?");

  fetch('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + alcoholInput.value)
    .then(function(result) {
      return result.json()
        .then(function(myDrink) {
          console.log(myDrink);

          main.innerHTML = ''
          for (i = 0; i < myDrink.drinks.length; i++) {

            var newDiv = document.createElement('div')
            var drink = document.createElement('h2')
            var drinkImg = document.createElement('img')
            var drinkSection = document.getElementsByClassName('drinks')[0]

            drink.innerText = myDrink.drinks[i].strDrink
            newDiv.appendChild(drink)

            drinkImg.setAttribute('src', myDrink.drinks[i].strDrinkThumb)
            newDiv.appendChild(drinkImg)

            drinkSection.append(newDiv)


          }
        })
    })
})
