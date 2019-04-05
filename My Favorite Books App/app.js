// console.log('hello')

$(() => {
    // GET https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=yourAPIKey

const getData = () => {$.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=AIzaSyD4fQutk55ce3kvbO8in6uPvpLpWwVieOM",
    type: "GET",
    data: {
        totalItems : 1
    }
}).then(function(data) {
    console.log(data)
})
}
 getData()

    // $('button').on('click', (event) => {
    //     event.preventDefault()
    //     someFunctiontoSaveValue()
    // })




})