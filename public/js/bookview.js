$(document).ready(function() {

    var noteForm = $("form#note-form")
    var heading = $("input#heading")
    var notebody = $("input#notebody")
    var notecatg = $("input#notecategory")
    var BookId = $("#bookid").text()


    function upsertNote(noteData){
        $.post("/api/createNote", noteData)
        .then(function(data){
            // window.location.replace(data)
            console.log("note was added", data)
        })
    }

    function newNote(){
        console.log("Heading" + heading.val())
        console.log("body" + notebody.val())
        console.log("category" + notecatg.val())
        if(!heading || !notebody || !notecatg){
            return;
        }

        upsertNote({
            heading: heading.val(),
            text: notebody.val(),
            note_category: notecatg.val(),
            BookId: parseInt(BookId)
        })
    }


    noteForm.on('submit', function(event){
        event.preventDefault();
        newNote()
    })

    function deleteBook() {
       if(confirm("Are you sure you want to delete this book?")){

        $.ajax({
            url: "/api/delete/book/" + BookId,
            type: 'DELETE'
        })
        .then(function (data) {
            console.log("Book was deleted");
        });
       } else {
           console.log('Book ' + BookId + ' not deleted')
       } 
    }

    
    $("#deleteBook").on('click', function (event){
        event.preventDefault()
        deleteBook()
    })

})
