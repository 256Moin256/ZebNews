sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/m/MessageBox",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    'sap/ui/core/BusyIndicator',
    "sap/ui/core/Core"
  ],
  function (Controller,
	History,
	MessageBox,
	Filter,
	FilterOperator,
	BusyIndicator,
	core) {
    "use strict";
    return Controller.extend("zebnews.controller.Main", {
      onInit: function () {
        var oView = this.getView();
        // if (oView.sViewName === "zebnews.view.MyXML") {
        //   MessageBox.confirm("Do you want enable night mode?", {
        //     title: "Confirm", // default
        //     onClose: null, // default
        //     styleClass: "", // default
        //     actions: [MessageBox.Action.YES, MessageBox.Action.NO], // default
        //     initialFocus: null, // default
        //     textDirection: sap.ui.core.TextDirection.Inherit, // default
        //     onClose: function (oAction) {
        //       if (oAction === MessageBox.Action.YES) {
        //         sap.ui.getCore().applyTheme("sap_fiori_3_dark");
        //       }
        //     },
        //   });
        // }
      },
      onExit: function () {},
      onBeforeRendering: function () {},
      onAfterRendering: function () {},
      select: function (params) {
        if (params.mParameters.id == "__xmlview0--001") {
          this.getOwnerComponent().getRouter().navTo("001");
        } else if (params.mParameters.id == "__xmlview0--002") {
          this.getOwnerComponent().getRouter().navTo("002");
        } else if (params.mParameters.id == "__xmlview0--003") {
          this.getOwnerComponent().getRouter().navTo("003");
        } else if (params.mParameters.id == "__xmlview0--004") {
          this.getOwnerComponent().getRouter().navTo("004");
        } else if (params.mParameters.id == "__xmlview0--005") {
          this.getOwnerComponent().getRouter().navTo("005");
        } else if (params.mParameters.id == "__xmlview0--006") {
          this.getOwnerComponent().getRouter().navTo("006");
        } else if (params.mParameters.id == "__xmlview0--007") {
          this.getOwnerComponent().getRouter().navTo("007");
        } else if (params.mParameters.id == "__xmlview0--008") {
          this.getOwnerComponent().getRouter().navTo("008");
        } else if (params.mParameters.id == "__xmlview0--009") {
          this.getOwnerComponent().getRouter().navTo("009");
        } else if (params.mParameters.id == "__xmlview0--010") {
          this.getOwnerComponent().getRouter().navTo("010");
        } else if (params.mParameters.id == "__xmlview0--011") {
          this.getOwnerComponent().getRouter().navTo("011");
        } else if (params.mParameters.id == "__xmlview0--012") {
          this.getOwnerComponent().getRouter().navTo("012");
        } else if (params.mParameters.id == "__xmlview0--013") {
          this.getOwnerComponent().getRouter().navTo("013");
        } else if (params.mParameters.id == "__xmlview0--014") {
          this.getOwnerComponent().getRouter().navTo("014");
        } else if (params.mParameters.id == "__xmlview0--015") {
          this.getOwnerComponent().getRouter().navTo("015");
        } else if (params.mParameters.id == "__xmlview0--016") {
          this.getOwnerComponent().getRouter().navTo("016");
        } else if (params.mParameters.id == "__xmlview0--017") {
          this.getOwnerComponent().getRouter().navTo("017");
        } else if (params.mParameters.id == "__xmlview0--018") {
          this.getOwnerComponent().getRouter().navTo("018");
        }
      },
      expand: function (oExpand) {
        //    var oValue = oEx.getExpanded();
        if (oExpand.getSource().getExpanded() === true) {
          oExpand.getSource().setExpanded(false);
          // oEx.setExpanded(false);
        } else {
          oExpand.getSource().setExpanded(true);
          // oEx.setExpanded(true);
        }
      },
      back: function () {
        var sPreviousHash = History.getInstance().getPreviousHash();
        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          this.getOwnerComponent().getRouter().navTo("overview", {}, true);
        }
      },
      onSearch: function (oEvent) {
        // add filter for search
        var aFilters = [];
        var sQuery = oEvent.getSource().getValue();
        if (sQuery && sQuery.length > 0) {
          var filter = new Filter("text", FilterOperator.Contains, sQuery);
          aFilters.push(filter);
        }

        // update list binding
        var oList = this.byId("idTable");
        var oBinding = oList.getBinding("items");
        oBinding.filter(aFilters, "Application");
      },
    });
  }
);
