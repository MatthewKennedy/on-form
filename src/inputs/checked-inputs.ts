import { DifferenceApplicator } from '../utils/difference-applicator';

export class CheckedInputs {
  initiate (form: HTMLElement) {
    const CHECK_BASED_INPUTS = 'input[type=checkbox], input[type=radio]'
    const fromCheckboxes = form.querySelectorAll(CHECK_BASED_INPUTS)

    fromCheckboxes.forEach((input: HTMLInputElement) => {
      if (input.checked) {
        input.setAttribute('data-onform-initial-value', 'checked')
      } else {
        input.setAttribute('data-onform-initial-value', 'not-checked')
      }

      input.addEventListener('change', () => {
        new DifferenceApplicator().initiate(form)
      })
    })
  }
}
