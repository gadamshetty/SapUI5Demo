jQuery.sap.declare("sap.stanmed.Component");

sap.ui.core.UIComponent.extend("sap.stanmed.Component",{
	
	metadata: {
		
		routing: {
			
			config: {
				viewType: "JS",
				viewPath: "stanmedpharma",
				targetControl: "appMasterShell",
				clearTarget: true,
				targetAggregation: "content"
			},
			
			routes: [
			       {
			    	   pattern: "Contact",
			    	   name: "contact",
			    	   view: "stanmedpharma.Contact"
			       },
			       {
			    	   pattern: "",
			    	   name: "default",
			    	   view: "stanmedpharma.Home"
			       } 
	        ]
			
		}
		
	},
	
	init: function() {
		
		
		//jQuery.sap.require("sap.ui.core.routing.HashChanger");
		
		
		//call createContent
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		
		//this._router = this.getRouter();
		
		//initlialize the router
		//this._routeHandler = new sap.m.routing.RouteMatchedHandler(this._router);
		//this._router.initialize();
		
		var router = new sap.ui.core.routing.Router([
		                          				   {
		                          					   pattern: "",
		                          					   name: "Home",
		                          					   view: "stanmedpharma.Home",
		                          					   viewType: sap.ui.core.mvc.ViewType.JS,
		                          					   targetControl: "appMasterShell",
		                          					   targetAggregation: "content", //content/Page
		                          					   clearTarget: true
		                          				   },
		                          				   {
		                          					   pattern: ["Contact", "Contact"],
		                          					   name: "Contact",
		                          					   view: "stanmedpharma.Contact",
		                          					   viewType: sap.ui.core.mvc.ViewType.JS,
		                          					   targetControl: "appMasterShell",
		                          					   targetAggregation: "content", //content/Page
		                          					   clearTarget: true
		                          				   },
		                          				   {
		                          					   pattern: ["Catalog"],
		                          					   name: "Catalog",
		                          					   view: "stanmedpharma.Catalog",
		                          					   viewType: sap.ui.core.mvc.ViewType.JS,
		                          					   targetControl: "appMasterShell",
		                          					   targetAggregation: "content", //content/Page
		                          					   clearTarget: true
		                          				   } 
		                          				                                             
		                          				                                             
		                          				]); 
		                          				
		                          				router.register("appRouter");
		                          				router.initialize();
		
	},
	
	createContent: function() {
		
		var view = sap.ui.view({id:"idapp1", viewName:"stanmedpharma.app", type:sap.ui.core.mvc.ViewType.JS});
		view.placeAt("content");
		
		//sap.ui.core.

	}
	
	
})