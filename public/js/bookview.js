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
        alert("clicked")
        newNote()
    })

})