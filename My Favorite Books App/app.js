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
    // for (let i = 0; i < 1; i++)
    // console.log(data.items[i].volumeInfo.imageLinks.thumbnail)
    //make a new thumbnail div and append it to current container
    const $div = $('<div>').attr('class', 'thumbnail-div').appendTo('.current-container')

    console.log(this)
    //make a new image tag with the user input thumbnail data and append it to thumbnail div
    $('<img>').attr('src', data.items[0].volumeInfo.imageLinks.thumbnail).appendTo($div)
    //make a div for the buttons and append it to the thumbnail div
    const $buttonDiv = $('<div>').attr('class', 'button-div').appendTo($div)
    //make a button and append it to the thumbnail
    $('<button>').attr('class', 'move-to-finished').appendTo($buttonDiv).on('click', () => {
        $moveToFinished()
    })
    // $('<br>').appendTo($('img'))
    
})
}

const $moveToFinished = () => {
        $(event.currentTarget).parent().parent().appendTo('.finished-container')
        // console.log('test test')
    }

$('.search').on('click', (event) => {
    event.preventDefault()
    titleQuery = $('input[type="text"]').val()
    // getUserInput()
    getBook()
    // $('event.currentTarget').trigger('reset')
    // $('form').trigger('reset')
    // $('.input-text').empty()
    $('.input-text').val('')
})

})