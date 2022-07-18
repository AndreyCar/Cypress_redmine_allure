module.exports = class Page {
	open(url) {
		cy.visit(`https://redmine.org/${url}`);
	}
	getElement(selector) {
		return cy.get(selector);
	}

	disableCheckBoxFilter(element) {
		this.getElement(element).each(($el, index, $list) => {
			cy.wrap($el)
				.invoke('prop', 'checked')
				.then((state) => {
					if (state) cy.wrap($el).click();
				});
		});
	}
};
