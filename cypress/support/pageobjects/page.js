module.exports = class Page {
	open(url) {
		cy.visit(`https://redmine.org/${url}`);
	}
	getElement(selector) {
		return cy.get(selector);
	}
};
