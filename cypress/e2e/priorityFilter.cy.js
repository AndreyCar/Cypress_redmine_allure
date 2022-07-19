const IssuesPage = require('../support/pageobjects/issues.page');

beforeEach(() => {
	IssuesPage.open();
	cy.disableCheckBoxFilter(IssuesPage.filterCheckBox);
	IssuesPage.apllyeButtonClick();
});

describe('Issues priority filter', () => {
	it('should check if the correct priority is displayed when the priority changes', () => {
		IssuesPage.addFilterInputSelect('priority_id');
		IssuesPage.getElement(IssuesPage.priorityOptionValue).each(($el, index, $list) => {
			cy.wrap($el)
				.invoke('prop', 'value')
				.then((value) => {
					IssuesPage.priorityValueInputSelect(value);
					IssuesPage.apllyeButtonClick();
					IssuesPage.subjectTableButtonClick(0);
					cy.wrap($el)
						.invoke('text')
						.then((text) => {
							IssuesPage.getElement(IssuesPage.priorityLabel).should('have.text', text);
						});
					cy.go('back');
				});
		});
	});
});
