sap.ui.jsview("stanmedpharma.Catalog", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf stanmedpharma.Catalog
	*/ 
	getControllerName : function() {
		return "stanmedpharma.Catalog";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf stanmedpharma.Catalog
	*/ 
	createContent : function(oController) {
		var catalogvw = new sap.ui.commons.TextView('catalogviewid', {
			text: "This page is all catolog............."
		});
		
		return catalogvw;
	}

});
