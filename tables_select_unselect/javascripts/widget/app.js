window.app = {
	views: {},
	models: {},
	collections: {},
	mocks: {},
	start: function ($el) {
		var view = new window.app.views.TablesView({el: $el});
	}
};


