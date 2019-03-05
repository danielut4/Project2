
$(document).ready(function() {
    var UserId;
    $.get("api/user_data").then(function(data){
        console.log("User", data)
        UserId = data.id
    })

    var books;
    $.get("api/books").then(function(data){
        console.log(data);
        books = data;
        console.log("Booooks:", books)
        addBookstoScreen(books);
    })

    var title = $("#titleInput")

    $(document).on('click', '#newBook', newBook)

    function addBookstoScreen(books){
        books.forEach(book => {
            var title = book.title
            var newBook = $("<button>").html(title)
            newBook.click(function(){
                document.location.href = '/book/' + book.id
            })
            $("#bookList").append(newBook)
        });
    }

    function newBook(){
        if(!title.val().trim().trim()){
            return;
        }

        upsertBook({
            title: title.val().trim(),
            UserId: UserId
        })
    }

    function upsertBook(bookData){
        
        $.post("/api/createBook", bookData)
        .then(function(data) {
            window.location.replace(data)
            console.log("book was added", bookData)
        })
    }


})