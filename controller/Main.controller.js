sap.ui.define(
    [
    'sap/ui/core/mvc/Controller',
    "zebnews/model/Model"
    ], 
    function(Controller, Model) {
    'use strict';
    return Controller.extend("zebnews.controller.Main", {

        onInit: function() {
            
        },
        onExit: function() {
            
        },
        onBeforeRendering: function() {
            
        },
        onAfterRendering: function() {
            
        },
        select: function(params) {
            // debugger;
            if (params.mParameters.id == '__xmlview0--001') {
                this.getOwnerComponent().getRouter().navTo("001");
            } else if (params.mParameters.id == '__xmlview0--002') {
                this.getOwnerComponent().getRouter().navTo("002");
            } else if (params.mParameters.id == '__xmlview0--003') {
                this.getOwnerComponent().getRouter().navTo("003");
            } else if (params.mParameters.id == '__xmlview0--004') {
                this.getOwnerComponent().getRouter().navTo("004");
            } else if (params.mParameters.id == '__xmlview0--005') {
                this.getOwnerComponent().getRouter().navTo("005");
            } else if (params.mParameters.id == '__xmlview0--006') {
                this.getOwnerComponent().getRouter().navTo("006");
            } else if (params.mParameters.id == '__xmlview0--007') {
                this.getOwnerComponent().getRouter().navTo("007");
            } else if (params.mParameters.id == '__xmlview0--008') {
                this.getOwnerComponent().getRouter().navTo("008");
            } else if (params.mParameters.id == '__xmlview0--009') {
                this.getOwnerComponent().getRouter().navTo("009");
            } else if (params.mParameters.id == '__xmlview0--010') {
                this.getOwnerComponent().getRouter().navTo("010");
            } else if (params.mParameters.id == '__xmlview0--011') {
                this.getOwnerComponent().getRouter().navTo("011");
            } else if (params.mParameters.id == '__xmlview0--012') {
                this.getOwnerComponent().getRouter().navTo("012");
            } else if (params.mParameters.id == '__xmlview0--013') {
                this.getOwnerComponent().getRouter().navTo("013");
            } else if (params.mParameters.id == '__xmlview0--014') {
                this.getOwnerComponent().getRouter().navTo("014");
            } else if (params.mParameters.id == '__xmlview0--015') {
                this.getOwnerComponent().getRouter().navTo("015");
            } else if (params.mParameters.id == '__xmlview0--016') {
                this.getOwnerComponent().getRouter().navTo("016");
            }
        },
        expand: function(oExpand) {
           var oEx = this.getView().byId("AAA");
           var oValue = oEx.getExpanded();
           if (oValue === true) {
            oEx.setExpanded(false);
           } else {
            oEx.setExpanded(true);
           }
        }
    });
});