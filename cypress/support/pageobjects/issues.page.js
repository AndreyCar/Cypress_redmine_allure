const Page = require('./page');

class IssuesPage extends Page {
	statusLabel = '.attributes td.status';

	open() {
		super.open('issues');
	}
}

module.exports = new IssuesPage();
