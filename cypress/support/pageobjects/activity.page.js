const Page = require('./page');

class ActivityPage extends Page {
	acticityCheckBox = '#sidebar li [type="checkbox"]';
	submitButton = '[type="submit"]';

	open() {
		super.open('projects/redmine/activity');
	}

	acticityCheckBoxClick(index) {
		this.getElement(this.acticityCheckBox).eq(index).click();
	}

    submitButtonClick() {
		this.getElement(this.submitButton).click();
	}
}

module.exports = new ActivityPage();
