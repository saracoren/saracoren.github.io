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
    //make a move button and append it to the thumbnail
    $('<button>').attr('class', 'move-to-finished').text('Move').appendTo($buttonDiv).on('click', () => {
        $moveToFinished()
    })
    //make an blurb button and append it to the thumbnail
    $('<button>').attr('class', 'blurb').text('Blurb').appendTo($buttonDiv).on('click', () => {
        $openModal()
    })
    //make a delete button and append it to the thumbnail
    $('<button>').attr('class', 'delete').text('Delete').appendTo($buttonDiv).on('click', () => {
        $delete()
    })
    const $openModal = () => {
        const $modal = $('<div>').attr('class', 'modal')
        const $modalTextBox = $('<div>').attr('class', 'modal-textbox')
        const $closeModalLink = $('<a>').attr('class', 'close-modal').attr('href', '#').text('Close')
        $('body').append($modal)
        $($modal).append($modalTextBox)
        $modalTextBox.append($closeModalLink)
        const $blurbTitle = $('<h1>').text(data.items[0].volumeInfo.title)
        $modalTextBox.append($blurbTitle)
        const $closeBtn = $('.close-modal')
        $closeBtn.on('click', () => {
            // console.log('close button')
            $modal.css('display', 'none')
        })
    }
    
})
}



const $moveToFinished = () => {
        $(event.currentTarget).parent().parent().appendTo('.finished-container')
        // console.log('test test')
    }

// const $moveToCurrent = () => {
//         $(event.currentTarget).parent().parent().appendTo()
// }
const $delete = () => {
        $(event.currentTarget).parent().parent().remove()
}

$('.search').on('click', (event) => {
    event.preventDefault()
    titleQuery = $('input[type="text"]').val()
    // getUserInput()
    getBook()
    // $('form').trigger('reset')
    // $('.input-text').empty()
    $('.input-text').val('')
})

})

// $('<button>').attr('class', 'move-to-finished').text('Move').appendTo($buttonDiv)
// if ($(event.currentTarget).parent().parent().parent() === ".current-container") {
//     on('click', () => {
//     $moveToFinished()
// })
// } else {
//     $moveToCurrent()
// }