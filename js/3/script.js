let shown = null;
function next(dialog) {
    const next = shown.nextAll('.modal-preview')[0];
    if (next) {
        changeDialogContent($(next), dialog);
    }
}
function prev(dialog) {
    const prev = shown.prevAll('.modal-preview')[0];
    if (prev) {
        changeDialogContent($(prev), dialog);
    }
}
function changeDialogContent(preview, dialog) {
    shown = preview;
    const type = preview.data().type;
    const src = preview.data().src;

    let content = null;
    switch (type) {
        case 'img':
            content = $(`
                    <img class="dialog__content" src="${src}"></img>
                `);
            break;
        case 'video':
            content = $(`
                <iframe
                class="dialog__content"
                src="${src}"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
                </iframe>
            `);
            break;  

    }
    dialog.empty();
    dialog.append(content);
}

$( function() {
    const dialog = $( "#dialog" );
    $('.modal-preview').click(e => {
        const target = $(e.target);
        changeDialogContent(target, dialog);

        dialog.dialog({
            modal: true,
            resizable: false,
            title: null,
            draggable: false,
            width: 'auto',
            position: {
                my: "center top", at: "center top", of: window
            },
            buttons: [
                {
                    text: '<',
                    click: prev.bind(null, dialog)
                }, {
                    text: '>',
                    click: next.bind(null, dialog)
                }
            ],
            classes: {
                'ui-dialog-buttonset': 'dialog__buttons'
            }
        });
    })
} );