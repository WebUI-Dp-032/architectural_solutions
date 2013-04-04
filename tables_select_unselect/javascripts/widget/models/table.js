(function () {
	window.app.models.TableModel = Backbone.Model.extend({

		initialize: function () {
			this.on("change:isFree", this.changeStatusSelector, this);
			this.on("change:selected", this.changeStatusSelector, this);

			this.changeStatusSelector();
		},

		defaults: {
			isFree: true,
			selected: false,
			statusSelector: ""   // it's special for html
		},

		/**
		 * Generate selector for html
		 */
		changeStatusSelector: function () {
			var statusSelector = "";
			statusSelector += this.get("selected") ? "selected " : " ";
			statusSelector += this.get("isFree") ? "" : "btn-primary";
			this.set({statusSelector: statusSelector});
		},

		setSelected: function (value) {
			this.set({selected: value});
		}

	});

})();