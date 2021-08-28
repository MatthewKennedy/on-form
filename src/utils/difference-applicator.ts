import { ChangeReporter } from './change-reporter';

export class DifferenceApplicator {
  initiate (form: HTMLElement) {
    const fromInputs = form.querySelectorAll('[data-onform-initial-value]')

    fromInputs.forEach((input: HTMLInputElement) => {
      if (input.type === 'checkbox' || input.type === 'radio') {
        if (input.checked && input.dataset.onformInitialValue === 'checked') {
          input.setAttribute('data-onform-changed', 'false')
        } else if (!input.checked && input.dataset.onformInitialValue === 'not-checked') {
          input.setAttribute('data-onform-changed', 'false')
        } else {
          input.setAttribute('data-onform-changed', 'true')
        }
      } else {
        if (input.value !== input.dataset.onformInitialValue) {
          input.setAttribute('data-onform-changed', 'true')
        } else {
          input.setAttribute('data-onform-changed', 'false')
        }
      }
    })

    new ChangeReporter().initiate(form)
  }
}
