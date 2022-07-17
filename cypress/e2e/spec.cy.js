const ActivityPage = require('../support/pageobjects/activity.page');

beforeEach(() => {
	ActivityPage.open();
	ActivityPage.disableActicityTypes();
});

describe('Activity filter', () => {
	it('should check if the url contains name of activity', () => {
		ActivityPage.getElement(ActivityPage.acticityType)
			.its('length')
			.then((length) => {
				for (var index = 0; index < length; index++) {
					ActivityPage.acticityTypeClick(index);
					ActivityPage.submitButtonClick();
					ActivityPage.getElement(ActivityPage.acticityType)
						.eq(index)
						.invoke('prop', 'name')
						.then((name) => {
							cy.url().should('include', name);
						});
				}
			});
	});
  
});
