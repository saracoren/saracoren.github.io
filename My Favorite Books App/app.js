// console.log('hello')

// GET https://www.googleapis.com/books/v1/volumes?q=time&printType=books&key=yourAPIKey

//key = AIzaSyD4fQutk55ce3kvbO8in6uPvpLpWwVieOM

// https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=yourAPIKey

const baseUrl = "https://www.googleapis.com/books/v1/volumes?q="

//api key is not needed for this search
// const apiKey = "key=AIzaSyD4fQutk55ce3kvbO8in6uPvpLpWwVieOM"

// const queryType = "q="

let titleQuery = ""

// let queryUrl = baseUrl + titleQuery + apiKey

$(() => {

// const getUserInput = () => {
//     userInput = $('.input-text').val()
//     console.log(userInput)
// }

const getBook = () => {$.ajax({
    url: baseUrl + titleQuery,
    type: "GET"
}).then(function(data) {
    for (let i = 0; i < 1; i++)
    // console.log(data.items[i].volumeInfo.imageLinks.thumbnail)
    $('<img><br>').attr('src', data.items[i].volumeInfo.imageLinks.thumbnail).appendTo(
    $('.current-container'))
    // $('<br>').appendTo($('img'))
    
})
}


$('button').on('click', (event) => {
    event.preventDefault()
    titleQuery = $('input[type="text"]').val()
    // getUserInput()
    getBook()
    // $('event.currentTarget').trigger('reset')
    // $('.input-text').trigger('reset')
    // $('.input-text').empty()
    $('.input-text').val('')
})

})