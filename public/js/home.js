
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
    })

    var title = $("#titleInput")

    $(document).on('click', '#newBook', newBook)

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
            console.log("book was added", bookData)
            window.location.replace("/home")
            location.reload(true);
        })
    }


})