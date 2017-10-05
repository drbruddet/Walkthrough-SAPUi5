sap.ui.require([
	"sap/ui/test/Opa5"
],
function (Opa5) {
	"use strict";
	Opa5.createPageObjects({
		onTheAppPage: {
			actions: {
				iPressTheSayHelloWithDialogButton: function () {
					return this.waitFor({
						//viewName : "HelloPanel",
						//id: "__xmlview1--tutu",
						controlType: "sap.m.Button",
						success: function (aButtons) {
							//sap.ui.getCore().byId("tutu").trigger("tap");
							//aButtons.$().trigger("tap");
							aButtons[0].$().trigger("tap");
						},
						errorMessage: "Did not find the helloDialogButton button on the app page"
					});
				}
			},
			assertions: {
				iShouldSeeTheHelloDialog: function () {
					return this.waitFor({
						controlType: "sap.m.Dialog",
						success: function () {
							// we set the view busy, so we need to query the parent of the app
							Opa5.assert.ok(true, "The dialog is open");
						},
						errorMessage: "Did not find the dialog control"
					});
				}
			}
		}
	});
});