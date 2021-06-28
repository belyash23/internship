import preview from './preview.js';
import('./combobox.js').then(() => {
    $(() => {
        $('.combobox').combobox();
    })
});

$(() => {
    preview.init($('.preview'), $('#select-theme'), $('#select-device'));
    preview.selectThemeEl.autocomplete({
        source: preview.availableThemes
    });
    preview.selectDeviceEl.autocomplete({
        source: preview.availableDevices
    });

    const size = preview.selectDeviceEl.children()[0].value;
    [preview.width, preview.height] = size.split('x');
    preview.setSize();

    const theme = preview.selectThemeEl.children()[0].value;
    preview.changeTheme(theme);

    preview.selectThemeEl.on('change', function() {
        const theme = $(this).val();
        preview.changeTheme(theme);
    });
    preview.selectDeviceEl.on('change', function() {
        [preview.width, preview.height] = $(this).val().split('x');
        preview.setSize()
    })
    $('#device-orientation').on('change', function() {
        preview.isVertical = $('#device-orientation').is(':checked');
        preview.setSize();
    })
})

