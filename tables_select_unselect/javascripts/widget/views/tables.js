(function (TablesCollection, TableView, tablesMock) {

	window.app.views.TablesView = Backbone.View.extend({

		initialize: function (options) {
			options.el.append(this.render());
			
			this.tablesCollection = new TablesCollection();
			this.tablesCollection.on("reset", this.addAllTables, this);
			this.tablesCollection.reset(tablesMock);
		},

		render: function () {
			var template = _.template($("#application_tempalte").html());
			this.$el.html(template());
			return this;
		},

		addAllTables: function () {
			this.tablesCollection.each(this.addOneTables, this);
		},

		addOneTables: function (tableModel) {
			var view = new TableView({model: tableModel, collection: this.tablesCollection});
			$("#table_container").append(view.render().el);
		}

	});

})(
window.app.collections.TablesCollection, 
window.app.views.TableView,
window.app.mocks.tables);