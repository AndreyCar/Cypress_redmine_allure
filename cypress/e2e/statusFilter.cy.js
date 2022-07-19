const IssuesPage = require('../support/pageobjects/issues.page');

beforeEach(() => {
	IssuesPage.open();
});

describe('Issues status filter ', () => {
	it('should check if the correct status is displayed when the status changes', () => {
		IssuesPage.getElement(IssuesPage.statusOperatorValue).each(($el, index, $list) => {
			cy.wrap($el)
				.invoke('prop', 'value')
				.then((operatorValue) => {
					IssuesPage.statusOperatorInputSelect(operatorValue);
					IssuesPage.apllyeButtonClick();
					IssuesPage.checkStatus(operatorValue);
				});
		});
	});
});
