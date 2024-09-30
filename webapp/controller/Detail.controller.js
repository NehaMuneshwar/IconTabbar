sap.ui.define(
  [
    "sap/ui/core/mvc/Controller"
  ],
  function (Controller) {
    "use strict";
var that;
    return Controller.extend("com.ibs.dynamicform.controller.Detail", {
      onInit: function () {
        that=this;
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this)
        oRouter.getRoute("Product").attachMatched(this.getId, this)
      },

      getId(oEvent) {
        var id = oEvent.getParameter("arguments").productid
        this.getView().bindElement("/Products(" + id)
       // this.getView().byId("detailpage").setTitle(id)

      },
      listChange(oEvent) {
        debugger;
        var sContextPath = oEvent.getParameter("listItem").getBindingContextPath();
         var oModel = this.getView().getModel();
        var sCategoryID = oModel.getProperty(sContextPath + "/CategoryID");
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
         oRouter.navTo("Category", {
            categoryId: sCategoryID
        });
    },
    navBack : function(){
      window.history.go[-1]
    }
    
    });
  }
);
