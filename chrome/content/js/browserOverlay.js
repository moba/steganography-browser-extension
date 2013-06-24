/**
 * Stego namespace.
 */
if ("undefined" == typeof(Overlay)) {
    var Overlay = {};
}
;


Overlay.ContextEncrypt = {
    start: function (aEvent) {
        window.open(
            "chrome://browser-stego/content/stego-context-encryptwindow.xul",
            "stego-contextencrypt",
            "chrome,centerscreen");
    }
};

Overlay.CustomButton = {

    click: function (aEvent) {
        alert("Just testing")
    }

};


Overlay.ContextDecrypt = {
    start: function (aEvent) {
        window.open(
            "chrome://browser-stego/content/stego-context-decryptwindow.xul",
            "stego-contextdecrypt",
            "chrome,centerscreen");
    }
};

Overlay.Decrypt = {
    start: function (aEvent) {
        window.open(
            "chrome://browser-stego/content/stego-decryptwindow.xul",
            "stego-contextdecrypt",
            "chrome,centerscreen");
    }
};
Overlay.Encrypt = {
    start: function (aEvent) {
        window.open(
            "chrome://browser-stego/content/stego-encryptwindow.xul",
            "stego-contextdecrypt",
            "chrome,centerscreen");
    }
};


Overlay.ContextOptionsMenu = {
    start: function (aEvent) {
        window.open(
            "chrome://browser-stego/content/stego-options.xul",
            "stego-contextoptions",
            "chrome,centerscreen");
    }
};

Overlay.PopUpNode = {
    init: function (aEvent) {
        window.element = document.popupNode;
    }


};
