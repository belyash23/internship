import languages from './languages.js';

async function getLocals() {
    for (let key in languages) {
        await import(`./i18n/datepicker-${key}.js`);
        const option = $(`<option>`).attr('value', key).text(languages[key].nativeName);
        if (key === 'en') {
            option.attr('selected', true);
            dateFormat = $.datepicker.regional['en'].dateFormat;
        }
        $('#locale').append(option);
    }
}

function getDate(element) {
    let date = null;
    try {
        date = $.datepicker.parseDate(dateFormat, element.value);
    } catch (error) {
        date = null;
    }
    return date;
}

function highlightDay(date) {
    if (dateStart != null && dateEnd != null) {
        if (dateStart <= date && date <= dateEnd) {
            return [true, "text-primary"];
        }
    } else if (dateStart != null && dateStart <= date || dateEnd != null && date <= dateEnd) {
        return [true, "text-primary"];
    }
    return [true]
}

const datepicker = $('.datepicker');
let dateFormat = null;
let dateStart = null;
let dateEnd = null;

getLocals().then(() => {
    const start = $(".datepicker-start").datepicker({
        beforeShowDay: highlightDay
    }).datepicker('option', $.datepicker.regional['en']).on("change", function () {
        dateStart = getDate(this);
        end.datepicker("option", "minDate", getDate(this));
    })
    const end = $(".datepicker-end").datepicker({
        beforeShowDay: highlightDay
    }).datepicker('option', $.datepicker.regional['en']).on("change", function () {
        dateEnd = getDate(this);
        start.datepicker("option", "maxDate", getDate(this));
    });
    $('#locale').on("change", function () {
        datepicker.datepicker("option", $.datepicker.regional[$(this).val()]);
        dateFormat = $.datepicker.regional[$(this).val()].dateFormat;
    });
});

$('.form').on('submit', e => {
    e.preventDefault();
    const error = $('.error');
    error.text('');
    if (!dateStart && !dateEnd) {
        error.text('Необходимо задать дату начала или дату конца');
    }
})
