sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter"
],
    function (Controller, Filter) {
        "use strict";

        return Controller.extend("com.ibs.dynamicform.controller.Master", {
            onInit: function () {

            },
            intitialuptrequired: true,
            selectList: function (oEvent) {
                debugger
                var Select = oEvent.getParameter("listItem").getBindingContextPath();
                // var Select = oEvent.getParameter("listItem").getBindingContext().getObject().ProductName
                Select = Select.split("(")[1].split("(")[0];
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("Product", {
                    productid: Select
                })
            },
            onsearch: function (oEvent) {
                debugger
                var value = oEvent.getParameter('newValue')
                console.log(value)
                var filter = new Filter('ProductName', sap.ui.model.FilterOperator.Contains, value)
                var aFilter = [filter]
                var oList = this.getView().byId("idMasterList")
                oList.getBinding("items").filter(aFilter)
            },
            intupd: function (oEvent) {
                debugger
                if (this.intitialuptrequired) {
                    this.intitialuptrequired = false
                    var oList = oEvent.getSource()
                    var path = oList.getItems()[1].getBindingContextPath()
                    oList.setSelectedItem(oList.getItems()[1])
                    path = path.split("(")[1].split("(")[0];
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("Product", {
                        productid: path
                    })
                }
            }




        });
    });
