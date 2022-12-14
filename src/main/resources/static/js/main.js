$(document).ready(function ($) {
    $('.table .editBtn').on('click', function (event) {
        event.preventDefault();
        const href = $(this).attr('href');

        $.get(href, function (user, status) {
            $('#loginEdit').val(user.login);
            $('#passwordEdit').val(user.password);
            $('#emailEdit').val(user.email);
            $('#ageEdit').val(user.age);
        });

        $('#editModal').modal();
    })

    $('.table .dltBtn').on('click', function (event) {
        event.preventDefault();
        const href = $(this).attr('href');

        $.get(href, function (user, status) {
            $('#loginDelete').val(user.login);
            $('#passwordDelete').val(user.password);
            $('#emailDelete').val(user.email);
            $('#ageDelete').val(user.age);
        });

        $('#deleteModal').modal();
    })
})