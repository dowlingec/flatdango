// Your code here
let moviePoster = document.getElementById('poster')
let movieTitle = document.getElementById('movieTitle')
let movieRuntime = document.getElementById('runtime')
let movieShowtime = document.getElementById('showtime')
let ticketsRemain = document.getElementById('ticket-num')
let filmInfo = document.getElementById('film-info')
let titleMenu = document.getElementById('titleMenu')

const apiRequest = async () => {
    let req = await fetch('http://localhost:3000/films')
    let res = await req.json()
    
    //del1
    moviePoster.src = res[0].poster
    moviePoster.alt = res[0].title
    movieTitle.innerHTML = res[0].title
    movieRuntime.innerText = `${res[0].runtime} minutes`
    movieShowtime.innerText = `${res[0].showtime}`
    let tickNo = (res[0].capacity - res[0].tickets_sold)
    ticketsRemain.innerText = `${tickNo}`
    filmInfo.innerText = res[0].description

    res.forEach((e) =>{
        titleMenu.innerHTML = `${res[0].title} ${res[1].title} ${res[2].title}`
    })
}
 apiRequest()




// movieTitle.innerText(element.title)
// movieRuntime.innerText(element.runtime)
