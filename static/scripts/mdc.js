const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'));
topAppBar.listen('MDCTopAppBar:nav', () => {
 drawer.open = !drawer.open;
});

// Instatiate MDC ripple effect
const buttonEl = document.querySelectorAll('.ripple-effect')
// const buttonRipple = new mdc.ripple.MDCRipple.attachTo(buttonEl)
for (const button of buttonEl) {
   mdc.ripple.MDCRipple.attachTo(button);
}











