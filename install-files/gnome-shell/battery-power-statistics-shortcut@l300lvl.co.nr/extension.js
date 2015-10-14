
const St = imports.gi.St;
const Main = imports.ui.main;
const Lang = imports.lang;
const Shell = imports.gi.Shell;
const PopupMenu = imports.ui.popupMenu;

let item, battery;

function _onPowerStatsActivate() {
    Main.overview.hide();
    let app = Shell.AppSystem.get_default().lookup_app('gnome-power-statistics.desktop');
    app.activate();
}

function init() {
    battery = Main.panel._statusArea.battery.menu;
}

function enable() {
    item = new PopupMenu.PopupMenuItem(_("Power Statistics"));
    item.connect('activate', Lang.bind(item, _onPowerStatsActivate));
    let nItems = battery.numMenuItems;
    battery.addMenuItem(item, nItems - 1);
//    battery.addMenuItem(item, -1);
}

function disable() {
    if (item) {
        item.destroy();
    }
}
