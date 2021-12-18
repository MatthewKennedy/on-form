export class ChangeReporter {
  initiate(form: HTMLElement, onFormChangedFunction: String, onFormNotChangedFunction: String) {
    const changedInputs = form.querySelectorAll('[data-onform-changed=true]')
    const changeCount = []

    changedInputs.forEach(() => changeCount.push(1))

    if (changeCount.length > 0) {
      /* @ts-ignore */
      window[onFormChangedFunction](form)
    } else {
      /* @ts-ignore */
      window[onFormNotChangedFunction](form)
    }
  }
}
