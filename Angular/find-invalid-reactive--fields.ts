public findInvalidControlsRecursive(formToInvestigate:FormGroup|FormArray):string[] {
  console.log(formToInvestigate);
  var invalidControls:string[] = [];
  let recursiveFunc = (form:FormGroup|FormArray) => {
    Object.keys(form.controls).forEach(field => { 
      const control = form.get(field);
      if (control.invalid) invalidControls.push(field);
      if (control instanceof FormGroup) {
        recursiveFunc(control);
        } else if (control instanceof FormArray) {
        recursiveFunc(control);
        } 
      });
    }
  recursiveFunc(formToInvestigate);
  return invalidControls;
}

// To use it: 
// console.log(this.findInvalidControlsRecursive(this.requisition));
