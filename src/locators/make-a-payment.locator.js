export const paymentLocators = {
  child: (index) =>
    `.LoginFormCard__Contents-sc-1d8bieu-3 > :nth-child(${index}) > span`,
  submit: '[data-cy="submit"]',
  loanCard: ".LoanCard__LoanCardContainer-sc-1se89jm-0",
  makePaymentButton: "button.Button__StyledButton-sc-1irh7c3-0",
  dateInput: ".DatepickerStyles__Container-sc-pi6kcl-2",
  dateButton: ".react-datepicker__day--010",
  otherAmountButton:
    '[data-cy="radio-other_amount"] > .RadioStyles__Label-sc-159rbb2-4',
  otherAmountInput: ".MaskedInput__InputMask-sc-dj2lm4-6",
  paymentMethodButton: ".select__value-container",
  paymentMethodOption: ".select__menu .select__menu-list",
  messageLabel: ".message",
};
