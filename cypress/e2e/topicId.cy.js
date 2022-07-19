const IssuesPage = require('../support/pageobjects/issues.page');

beforeEach(() => {
	IssuesPage.open();
	cy.disableCheckBoxFilter(IssuesPage.filterCheckBox);
	IssuesPage.apllyeButtonClick();
});

describe('Topic id', () => {
	it('should check if the topic title and url have corect id', () => {
		IssuesPage.getElement(IssuesPage.idTableButton)
			.first()
			.invoke('text')
			.then((text) => {
				IssuesPage.idTableButtonClick(0);
				cy.url().should('include', text);
				IssuesPage.getElement(IssuesPage.title).invoke('text').should('include', text);
			});
	});
});
