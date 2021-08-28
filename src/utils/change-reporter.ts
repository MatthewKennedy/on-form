export class ChangeReporter {
  initiate (form: HTMLElement) {
    const changedInputs = form.querySelectorAll('[data-onform-changed=true]')

    const changeCount = []

    changedInputs.forEach(() => changeCount.push(1))


    if (changeCount.length > 0) {
      console.log('this form has changed')
      form.querySelector('button[type=submit]').removeAttribute('disabled')
    } else {
      console.log('this form has NOT changed!')
      form.querySelector('button[type=submit]').setAttribute('disabled', 'true')
    }
  }
}
