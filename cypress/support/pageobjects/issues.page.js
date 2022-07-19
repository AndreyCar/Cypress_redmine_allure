const Page = require('./page');

class IssuesPage extends Page {
	statusLabel = '.attributes td.status';
	filterCheckBox = '#filters-table [type="checkbox"]';
	statusOperatorInput = '#operators_status_id';
	statusOperatorValue = '#operators_status_id option';
	statusValueInput = '#values_status_id_1';
	statusOptionValue = '#values_status_id_1 option';

	apllyeButton = '.icon.icon-checked';
	filterCheckBox = '.filter [type="checkbox"]';
	addFilterInput = '#add_filter_select';

	priorityValueInput = '#values_priority_id_1';
	priorityOptionValue = '#values_priority_id_1 option';
	priorityLabel = 'td.priority';

	idTableButton = 'td.id a';
	trackerTableLabel = 'td.tracker';
	statusTableLabel = 'td.status';
	subjectTableButton = 'td.subject a';
	updateOnTablLabel = 'td.updated_on';
	categoryTablLabel = 'td.category';

	title = 'h2';

	open() {
		super.open('issues');
	}

	statusOperatorInputSelect(operatorValue) {
		this.getElement(this.statusOperatorInput).select(operatorValue);
	}

	statusValueInputSelect(statusValue) {
		this.getElement(this.statusValueInput).select(statusValue);
	}

	addFilterInputSelect(addFilterValue) {
		this.getElement(this.addFilterInput).select(addFilterValue);
	}

	priorityValueInputSelect(priorityValue) {
		this.getElement(this.priorityValueInput).select(priorityValue);
	}

	apllyeButtonClick() {
		this.getElement(this.apllyeButton).click();
	}

	filterCheckBoxClick(index) {
		this.getElement(this.filterCheckBox).eq(index).click();
	}

	idTableButtonClick(index) {
		this.getElement(this.idTableButton).eq(index).click();
	}

	subjectTableButtonClick(index) {
		this.getElement(this.subjectTableButton).eq(index).click();
	}

	checkStatus(operatorValue) {
		if (operatorValue == '=' || operatorValue == '!') {
			this.getElement(this.statusOptionValue).each(($el, index, $list) => {
				cy.wrap($el)
					.invoke('prop', 'value')
					.then((value) => {
						this.statusValueInputSelect(value);
						this.apllyeButtonClick();
						cy.wrap($el)
							.invoke('text')
							.then((text) => {
								this.getElement(this.statusTableLabel).each(($el, index, $list) => {
									if (operatorValue == '=') cy.wrap($el).should('have.text', text);
									if (operatorValue == '!') cy.wrap($el).should('not.have.text', text);
								});
							});
					});
			});
		}
		if (operatorValue == 'o' || operatorValue == 'c') {
			this.getElement(this.statusTableLabel).each(($el, index, $list) => {
				if (operatorValue == 'o') cy.wrap($el).should('not.have.text', 'Closed');
				if (operatorValue == 'c') cy.wrap($el).should('have.text', 'Closed');
			});
		}
	}
}

module.exports = new IssuesPage();
