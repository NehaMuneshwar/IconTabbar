sap.ui.define(
    [
      "sap/ui/core/mvc/Controller"
    ],
    function (Controller) {
      "use strict";
  var that;
      return Controller.extend("com.ibs.dynamicform.controller.Detaildetail", {
        onInit: function () {
          that=this;
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this)
          oRouter.getRoute("Category").attachMatched(this.getId, this)
        },
  
        getId(oEvent) {
          var id = oEvent.getParameter("arguments").categoryId
          this.getView().bindElement("/Categories(" + id + ")")
         // this.getView().byId("detailpage").setTitle(id)
  
        }
        
      });
    }
  );
  