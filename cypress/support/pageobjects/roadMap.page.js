const Page = require('./page');

class RoadMapPage extends Page {
	closedIssue = '.issue.closed';
	roadMapCheckBox = '[name="tracker_ids[]"]';
	submitButton = '[type="submit"]';

	open() {
		super.open('projects/redmine/roadmap');
	}

	roadMapCheckBoxClick(index) {
		this.getElement(this.roadMapCheckBox).eq(index).click();
	}

	closedIssueClick(index) {
		this.getElement(this.closedIssue).eq(index).click();
	}

	submitButtonClick() {
		this.getElement(this.submitButton).click();
	}
}

module.exports = new RoadMapPage();
