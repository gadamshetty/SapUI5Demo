sap.ui.jsview("stanmedpharma.Contact", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf stanmedpharma.Contact
	*/ 
	getControllerName : function() {
		return "stanmedpharma.Contact";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf stanmedpharma.Contact
	*/ 
	createContent : function(oController) {
		var contactvw = new sap.ui.commons.TextView('contactviewid', {
			text: "This page is all about contact sucker page............."
		});
		
		return contactvw;
	}

});
