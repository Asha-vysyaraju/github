var container = document.querySelector('.row')
fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        for (i = 0; i < data.length; i++) {
            // var card = document.querySelector('.row').innerHTML
            const card = document.createElement('div')
            card.classList.add('card')
            card.innerHTML = `<div class="card-header">
            ${data[i].name.common}
        </div>
        <div class="card-body">
            <img src="${data[i].flags.png}" alt="image" width="225px" height="175px">
           
            <p class="card-text">Region:${data[i].region} <br>
            Capital:${data[i].capital}<br>
            Country Code:${data[i].cioc}</p>
            <button class="btn btn-primary" id="wthrbtn">Click for Weather</buttton>
        </div>`
        var wthrbtn=document.createElement('button')
         wthrbtn.classList.add('btn')
         wthrbtn.classList.add('btn-primary')
        wthrbtn.textContent = 'Click for Weather!'
        card.appendChild(wthrbtn)
        //     // var wthrbtn = document.querySelector('button')
        var city=data[i].name.common
           wthrbtn.addEventListener('click', () => {
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9ae271f72ce5677f1897de2c25eb5998`)
                    .then((res) => res.json())
                    .then((data) => {
                        const weather = document.createElement('p')
                        weather.classList.add('card-text')
                        weather.innerHTML = `Temperature:${data.main.temp}`

                        console.log(data.main.temp)
                    }).catch((err) => console.log(err))
            })
            // card.appendChild(weather)
            container.appendChild(card)
            console.log(data[i].name.common)
            console.log(data[i].flags.png)
            console.log(data[i].region)
            console.log(data[i].capital)
            console.log(data[i].cioc)
        }
    }).catch((err) => console.log(err))