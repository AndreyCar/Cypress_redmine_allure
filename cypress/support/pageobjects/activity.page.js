const Page = require('./page');

class ActivityPage extends Page {
	acticityType = '#sidebar li [type="checkbox"]';
	submitButton = '[type="submit"]';

	open() {
		super.open('projects/redmine/activity');
	}

	disableActicityTypes() {
		this.getElement(this.acticityType).each(($el, index, $list) => {
			cy.wrap($el)
				.invoke('prop', 'checked')
				.then((state) => {
					if (state) cy.wrap($el).click();
				});
		});
	}

	acticityTypeClick(index) {
		this.getElement(this.acticityType).eq(index).click();
	}

    submitButtonClick(index) {
		this.getElement(this.submitButton).click();
	}
}

module.exports = new ActivityPage();
