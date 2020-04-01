/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"del/proj/ProjectDelaware/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});