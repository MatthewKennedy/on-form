export class SelectOptions {
  initiate (form: HTMLElement) {
    const SELECT_BASED_INPUTS = 'select'
    const fromSelects = form.querySelectorAll(SELECT_BASED_INPUTS)

    fromSelects.forEach((select: HTMLSelectElement) => {
      const selectedValue = select.options[select.selectedIndex].value

      select.setAttribute('data-onform-initial-value', selectedValue)
    })
  }
}
