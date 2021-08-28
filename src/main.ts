import { ValueInputs } from './inputs/value-inputs';
import { CheckedInputs } from './inputs/checked-inputs';
import { SelectOptions } from './inputs/select-options';

document.addEventListener('DOMContentLoaded', function () {
  const activeForm = document.querySelectorAll('form[data-on-form-diff-check]')

  if (activeForm == null) return

  activeForm.forEach((form: HTMLFormElement) => {
    form.querySelector('button[type=submit]').setAttribute('disabled', 'true')
    const customChanedFunction = form.dataset.onFormChangedFunction
    console.log(customChanedFunction)

    new ValueInputs().initiate(form)
    new CheckedInputs().initiate(form)
    new SelectOptions().initiate(form)
  })
})
