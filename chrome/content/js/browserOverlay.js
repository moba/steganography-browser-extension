/**
 * Stego namespace.
 */

Components.utils.import("resource://browser-stego/stego-contentHandler.jsm");

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
    },
};

Overlay.CustomButton = {

    click: function (aEvent) {
        alert(foo())  ;
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
        var element = document.popupNode;
        var elementLabel = document.getElementById("elementtype");
        var contenthandler = new ContentHandler (element);
        var type=contenthandler.getContentType();
        if(type=="image"){
            var imageData=contenthandler.getImageFromURL(element.src);
            window.alert(imageData);
        }
        else
            window.alert(element);
        //window.alert(element);
       // contenthandler.getContentType();
        //window.alert(contenthandler.getContentType()) ;
       /* if(contenthandler.getContentType()){
            window.alert(contenthandler.getImageFromURL(element.getURI()));
        }*/
    }
};
