function changeTheme(theme) {
    const link = $('link');
    link.attr('href', `themes/${theme}/style.css`);
}
window.changeTheme = changeTheme;