const Page = require('./page');

class IssuesPage extends Page {
	statusLabel = '.attributes td.status';
	filterCheckBox = '#filters-table [type="checkbox"]';
	statusOperatorList = '#operators_status_id';
	statusOperatorValue = '#operators_status_id option';
	statusTable = 'td.status';
	statusValue = '#values_status_id_1';
	statusValueOption = '#values_status_id_1 option';
	apllyeButton = '.icon.icon-checked';

	open() {
		super.open('issues');
	}

	statusOperatorListSelect(operatorValue) {
		this.getElement(this.statusOperatorList).select(operatorValue);
	}

	statusValueSelect(valueStatus) {
		this.getElement(this.statusValue).select(valueStatus);
	}

	apllyeButtonClick() {
		this.getElement(this.apllyeButton).click();
	}

	checkStatus(operatorValue) {
		if (operatorValue == '=' || operatorValue == '!') {
			this.getElement(this.statusValueOption).each(($el, index, $list) => {
				cy.wrap($el)
					.invoke('prop', 'value')
					.then((value) => {
						this.statusValueSelect(value);
						this.apllyeButtonClick();
						cy.wrap($el)
							.invoke('text')
							.then((text) => {
								this.getElement(this.statusTable).each(($el, index, $list) => {
									if (operatorValue == '=') cy.wrap($el).should('have.text', text);
									if (operatorValue == '!') cy.wrap($el).should('not.have.text', text);
								});
							});
					});
			});
		}
		if (operatorValue == 'o' || operatorValue == 'c')
		{
			this.getElement(this.statusTable).each(($el, index, $list) => {
				if (operatorValue == 'o') cy.wrap($el).should('not.have.text', 'Closed');
				if (operatorValue == 'c') cy.wrap($el).should('have.text', 'Closed');
			});
		}

	}
}

module.exports = new IssuesPage();
