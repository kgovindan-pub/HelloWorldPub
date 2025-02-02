sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("kiru.btp.helloworldui5.controller.View1", {
        onInit() {
        },
        onPress() {
            MessageBox.alert("You have been alerted!");
        }
    });
});