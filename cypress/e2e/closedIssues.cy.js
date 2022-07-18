const RoadMapPage = require('../support/pageobjects/roadMap.page');
const IssuesPage = require('../support/pageobjects/issues.page');

beforeEach(() => {
	RoadMapPage.open();
	RoadMapPage.disableCheckBoxFilter(RoadMapPage.roadMapCheckBox);
});

describe('Closed issues', () => {
	it('should check if the defect closed issue is closed', () => {
		RoadMapPage.roadMapCheckBoxClick(0);
		RoadMapPage.submitButtonClick();
		RoadMapPage.getElement(RoadMapPage.closedIssue)
			.its('length')
			.then((length) => {
				for (var index = 0; index < length; index++) {
					RoadMapPage.closedIssueClick(index);
					cy.url().should('include', 'issues');
					IssuesPage.getElement(IssuesPage.statusLabel).should('have.text', 'Closed');
					cy.go('back');
				}
			});
	});
});
