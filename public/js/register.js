$(document).ready(function() {
    var email = $("#email")
    var pass = $("#pass")

    $(document).on('click', '#subUser', userFormSubmit)

    function userFormSubmit(event) {
        event.preventDefault()
        if(!email.val().trim().trim()){
            return;
        }

        upsertUser({
            email: email.val().trim(),
            password: pass.val()
        })
    }

    function upsertUser(userData) {
        $.post("/api/register", userData)
          .then(console.log(userData));
    }
})