import { ValueInputs } from './inputs/value-inputs';
import { CheckedInputs } from './inputs/checked-inputs';
import { SelectOptions } from './inputs/select-options';
import { DifferenceApplicator } from './utils/difference-applicator';

document.addEventListener('DOMContentLoaded', function () {
  const activeForm = document.querySelectorAll('form[data-on-form-diff-check]')

  if (activeForm == null) return

  activeForm.forEach((form: HTMLFormElement) => {
    const onFromInitFunction: String = form.dataset.onFromInitFunction || 'onFromInitFunction'
    const onFormChangedFunction: String = form.dataset.onFormChangedFunction || 'onFormChangedFunction'
    const onFormNotChangedFunction: String = form.dataset.onFormNotChangedFunction || 'onFormNotChangedFunction'

    /* @ts-ignore */
    window[onFromInitFunction](form)

    new ValueInputs().initiate(form)
    new CheckedInputs().initiate(form)
    new SelectOptions().initiate(form)

    const VALUE_BASED_INPUTS = '[data-onform-initial-value]'
    const fromInputs = form.querySelectorAll(VALUE_BASED_INPUTS)

    fromInputs.forEach((input: HTMLInputElement) => {
      input.addEventListener('change', () => {
        new DifferenceApplicator().initiate(form, onFormChangedFunction, onFormNotChangedFunction)
      })
    })
  })
})
