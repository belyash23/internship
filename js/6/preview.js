export default {
    el: null,
    width: null,
    height: null,
    isVertical: false,
    availableThemes: [],
    availableDevices: [],
    selectThemeEl: null,
    selectDeviceEl: null,
    init(el, selectThemeEl, selectDeviceEl) {
        this.el = el;
        this.selectThemeEl = selectThemeEl;
        this.selectDeviceEl = selectDeviceEl;

        this.setAvailableThemes();
        this.setAvailableDevices();
    },
    setSize() {
        let width = this.width;
        let height = this.height;
        if(this.isVertical) {
            [width, height] = [height, width];
        }
        this.el.width(width).height(height);
    },
    setAvailableThemes() {
        const preview = this;
        this.selectThemeEl.children().each(function() {
            preview.availableThemes.push($(this).text());
        })
    },
    setAvailableDevices() {
        const preview = this;
        this.selectDeviceEl.children().each(function() {
            preview.availableDevices.push($(this).text());
        })
    },
    changeTheme(theme) {
        this.el[0].contentWindow.changeTheme(theme);
    }
}