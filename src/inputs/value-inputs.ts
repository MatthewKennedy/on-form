export class ValueInputs {
  initiate (form: HTMLElement) {
    const VALUE_BASED_INPUTS = 'input[type=text], input[type=range], textarea'
    const fromInputs = form.querySelectorAll(VALUE_BASED_INPUTS);

    fromInputs.forEach((input: HTMLInputElement) => {
      input.setAttribute('data-onform-initial-value', input.value)
    })
  }
}
