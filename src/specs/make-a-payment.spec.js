import { MakePaymentPO } from "../page-objects";
import { paymentLocators } from "../locators";
import { credentials } from "../data";

describe("Make a payment: verify if customer is able to make a loan payment ", () => {
  let makePaymentPO = null;

  beforeEach(() => {
    makePaymentPO = new MakePaymentPO();
    makePaymentPO.navigateTo();
  });

  it("should be able to make a loan payment", () => {
    makePaymentPO.type(paymentLocators.child(1), credentials.email);
    makePaymentPO.type(paymentLocators.child(2), credentials.password);
    makePaymentPO.click(paymentLocators.submit);
    makePaymentPO.click(paymentLocators.loanCard);
    makePaymentPO.waitUntil(3000);
    makePaymentPO.containAndClick(
      paymentLocators.makePaymentButton,
      "Make a payment"
    );
    makePaymentPO.click(paymentLocators.dateInput);
    makePaymentPO.click(paymentLocators.dateButton);
    makePaymentPO.click(paymentLocators.otherAmountButton);
    makePaymentPO.type(paymentLocators.otherAmountInput, "10");
    makePaymentPO.click(paymentLocators.paymentMethodButton);
    makePaymentPO.clickOnChildren(paymentLocators.paymentMethodOption, "2");
    makePaymentPO.click(paymentLocators.submit);

    expect(makePaymentPO.should(paymentLocators.messageLabel, "be.visible"));
  });
});
