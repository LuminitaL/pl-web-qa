export class MakePaymentPO {
  /**
   * @name navigateTo
   * @description
   * Visit the url of the website
   */
  navigateTo() {
    cy.visit("https://peach-borrower.peach-dev.finance/login");
  }

  /**
   * @name containAndClick
   * @description
   * DOM elements should contain the text
   *
   * @param {string} locator Locator of needed element.
   * @param {string} value Value to assert against locator.
   */
  containAndClick(locator, value) {
    cy.get(locator).contains(value).click();
  }

  /**
   * @name click
   * @description
   * Click on elements
   *
   * @param {string} locator Locator of needed element.
   */
  click(locator) {
    cy.get(locator).click({ force: true });
  }

  /**
   * @name type
   * @description
   * Type into a DOM element
   *
   * @param {string} locator Locator of needed element.
   * @param {string} value Value to assert against locator.
   */
  type(locator, value) {
    cy.get(locator).type(value);
  }

  /**
   * @name waitUntil
   * @description
   * Wait amount of time before moving on to the next command
   *
   * @param {number} seconds The amount of time to wait in milliseconds.
   */
  waitUntil(seconds) {
    cy.wait(seconds);
  }

  /**
   * @name should
   * @description
   * Get and compare locator value
   *
   * @param {string} locator Locator of needed element.
   * @param {string} chainers Any valid chainer that comes from Chai.
   */
  should(locator, chainers) {
    cy.get(locator).should(chainers);
  }

  /**
   * @name clickOnChildren
   * @description
   * Get and compare locator value
   *
   * @param {string} locator Locator of needed element.
   * @param {string} index Index of children.
   */
  clickOnChildren(locator, index) {
    cy.get(locator).children().eq(index).click();
  }

  /**
   * @name contains
   * @description
   * DOM elements should contain the text
   *
   * @param {string} locator Locator of needed element.
   * @param {string} value Value to assert against locator.
   */
  contains(locator, value) {
    cy.get(locator).contains(value);
  }
}
