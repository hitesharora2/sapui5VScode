sap.ui.define(["sap/ui/test/opaQunit","sap/ui/Device","./pages/Worklist","./pages/Browser","./pages/Object","./pages/App"],function(e,o){"use strict";var t=o.browser.msie||o.browser.edge?1500:1e3;QUnit.module("Navigation");e("Should see the objects list",function(e,o,t){e.iStartMyApp();t.onTheWorklistPage.iShouldSeeTheTable()});e("Should react on hash change",function(e,o,t){o.onTheWorklistPage.iRememberTheItemAtPosition(2);o.onTheBrowser.iChangeTheHashToTheRememberedItem();t.onTheObjectPage.iShouldSeeTheRememberedObject().and.theViewIsNotBusyAnymore()});e("Should go back to the TablePage",function(e,o,t){o.onTheBrowser.iPressOnTheBackwardsButton();t.onTheWorklistPage.iShouldSeeTheTable()});e("Object Page shows the correct object Details",function(e,o,t){o.onTheWorklistPage.iRememberTheItemAtPosition(1).and.iPressATableItemAtPosition(1);t.onTheObjectPage.iShouldSeeTheRememberedObject()});e("Should be on the table page again when browser back is pressed",function(e,o,t){o.onTheBrowser.iPressOnTheBackwardsButton();t.onTheWorklistPage.iShouldSeeTheTable()});e("Should be on the object page again when browser forwards is pressed",function(e,o,t){o.onTheBrowser.iPressOnTheForwardsButton();t.onTheObjectPage.iShouldSeeTheRememberedObject();t.iTeardownMyApp()});e("Start the App and simulate metadata error: MessageBox should be shown",function(e,o,a){e.iStartMyApp({delay:t,metadataError:true});a.onTheAppPage.iShouldSeeTheMessageBox();o.onTheAppPage.iCloseTheMessageBox();a.iTeardownMyApp()});e("Start the App and simulate bad request error: MessageBox should be shown",function(e,o,a){e.iStartMyApp({delay:t,errorType:"serverError"});a.onTheAppPage.iShouldSeeTheMessageBox();o.onTheAppPage.iCloseTheMessageBox();a.iTeardownMyApp()})});