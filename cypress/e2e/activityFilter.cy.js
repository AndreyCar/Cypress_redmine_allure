const ActivityPage = require('../support/pageobjects/activity.page');

beforeEach(() => {
	ActivityPage.open();
	cy.disableCheckBoxFilter(ActivityPage.acticityCheckBox);
});

describe('Activity filter', () => {
	it('should check if the url contains name of activity', () => {
		ActivityPage.getElement(ActivityPage.acticityCheckBox)
			.its('length')
			.then((length) => {
				for (var index = 0; index < length; index++) {
					ActivityPage.acticityCheckBoxClick(index);
					ActivityPage.submitButtonClick();
					ActivityPage.getElement(ActivityPage.acticityCheckBox)
						.eq(index)
						.invoke('prop', 'name')
						.then((name) => {
							cy.url().should('include', name);
						});
					ActivityPage.acticityCheckBoxClick(index);
				}
			});
	});
});
