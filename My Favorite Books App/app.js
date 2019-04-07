// console.log('hello')
let userInput = ""

$(() => {
    // GET https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=yourAPIKey

const getUserInput = () => {
    userInput = $('.input-text').val()
    console.log(userInput)
}

const getData = () => {$.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=time&printType=books&key=AIzaSyD4fQutk55ce3kvbO8in6uPvpLpWwVieOM",
    type: "GET"
}).then(function(data) {
    for (let i = 0; i < 5; i++)
    // console.log(data.items[i].volumeInfo.imageLinks.thumbnail)
    $('<img><br>').attr('src', data.items[i].volumeInfo.imageLinks.thumbnail).appendTo(
    $('.current-container'))
    // $('<br>').appendTo($('img'))

})
}


$('button').on('click', (event) => {
    event.preventDefault()
    // getUserInput()
    getData()
})

})