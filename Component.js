sap.ui.define([
    'sap/ui/core/UIComponent'
    ], function(UIComponent) {
         'use strict';
         return UIComponent.extend('zebnews.Component', {
              metadata: {
                manifest: "json"
              },
          init: function(){
             // this will call base class constructor
             UIComponent.prototype.init.apply(this);
             // Step - 1: already done in manifest.json
             //Step - 2: Get the router object
             var oRouter = this.getRouter();
             //Step - 3: Initialize the router
             oRouter.initialize();
           }
     });
});