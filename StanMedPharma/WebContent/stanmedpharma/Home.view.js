sap.ui.jsview("stanmedpharma.Home", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf stanmedpharma.Home
	*/ 
	getControllerName : function() {
		return "stanmedpharma.Home";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf stanmedpharma.Home
	*/ 
	createContent : function(oController) {
		var homevw = new sap.ui.commons.TextView('homeviewid', {
			text: "This page is all about Home............."
		});
		
		return homevw;
	}

});
