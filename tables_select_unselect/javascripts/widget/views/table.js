(function () {

	window.app.views.TableView = Backbone.View.extend({

		className: "table",

		events: {
			"click button" : "selectTable"
		},

		initialize: function (options) {
			this.model = options.model;
			this.collection = options.collection;

			this.model.on("change:statusSelector", this.render, this);
		},

		render: function () {
			var template = _.template($("#table_tempalte").html());
			this.$el.html(template(this.model.attributes));
			return this;
		},

		selectTable: function () {
			this.collection.selecteTable(this.model.id);
		}

	});
	
})();