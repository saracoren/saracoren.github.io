// console.log('hello')

$(() => {
    // GET https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=yourAPIKey

const getData = () => {$.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=time&printType=books&key=AIzaSyD4fQutk55ce3kvbO8in6uPvpLpWwVieOM",
    type: "GET",
    data: {
        items: {}
    }
}).then(function(data) {
    for (let i = 0; i < 10; i++)
    console.log(data.items[i].volumeInfo.title)
})
}
 getData()

    // $('button').on('click', (event) => {
    //     event.preventDefault()
    //     someFunctiontoSaveValue()
    // })




})