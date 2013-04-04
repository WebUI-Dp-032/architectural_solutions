(function (TableModel) {

	window.app.collections.TablesCollection = Backbone.Collection.extend({

		model: TableModel,

		selecteTable: function (id) {
			this.each(function (tableModel) {
				var value = tableModel.id === id;
				tableModel.setSelected(value);
			});
		}
	});

})(window.app.models.TableModel);