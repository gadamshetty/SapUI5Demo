sap.ui.jsview("stanmedpharma.app", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf stanmedpharma.app
	*/ 
	getControllerName : function() {
		return "stanmedpharma.app";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf stanmedpharma.app
	*/ 
	createContent : function(oController) {
		var oShell = new sap.ui.ux3.Shell("appMasterShell", {
			appTitle: "Stanmed Pharma",
			showLogoutButton : false,
			showSearchTool : false,
			worksetItems: [ new sap.ui.ux3.NavigationItem("homeid", {key : "Home", text : "Home"}),
			                new sap.ui.ux3.NavigationItem("catalogid", {key : "Catalog",text : "Catalog"}),
			                new sap.ui.ux3.NavigationItem("contactid", {key : "Contact", text : "Contact"})
			               ],
           worksetItemSelected: function(e) {
				this.removeAllContent();
				
				var selected = e.getParameter("key");
				console.log(selected);
				var oHashChanger = new sap.ui.core.routing.HashChanger();
				var appRouter1 = sap.ui.core.routing.Router.getRouter('appRouter')
				oHashChanger.setHash(appRouter1.getURL(selected));
				
           }
		});
		
		return oShell;
	}

});
