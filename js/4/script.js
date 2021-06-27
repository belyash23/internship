$.ajax('index.php', {
    type: 'get',
    dataType: 'html',
}).done(response => {
    $('body').append(response);


    Fancybox.bind("[data-fancybox]", {
        // Your options go here
    });

    const fields = [];
    $('#form').find('.form-control').each(function () {
        const field = {
            name: $(this).attr('name'),
            display: $(this).data().display,
            rules: $(this).data().rules
        };
        fields.push(field);
    });

    const validator = new FormValidator('form', fields, function (errors, event) {
        event.preventDefault();
        $('.text-danger').text('');
        if (errors.length > 0) {
            errors.forEach(error => {
                $(`.${error.id}-error`).text(error.message);
            })
        } else {
            const src = $(form).attr('action');
            const formData = new FormData(form);

            $.ajax(src, {
                method: 'post',
                data: formData
            }).done(response => console.log(response));
        }
    });
    function isUrl(str) {
        const regex = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);
        return str.match(regex);
    }

    validator.registerCallback('min_length', (value, arg) => {
        let length = value.length;
        if (isUrl(value)) {
            length = 22;
        }
        return length >= arg;
    }).setMessage('min_length', 'The %s field must be at list %s characters in length');

    validator.registerCallback('max_length', (value, arg) => {
        let length = value.length;
        if (isUrl(value)) {
            length = 22;
        }
        return length <= arg;
    }).setMessage('max_length', 'The %s field must not exceed %s characters in length');
});