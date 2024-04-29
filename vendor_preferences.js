function uncheckAllFT() {
  var inputs = document.getElementsByClassName('gvl-vendor');
  for(var i = 0, l = inputs.length; i < l; ++i) {
    if(inputs[i].checked) {
      inputs[i].click()
    }
  }
}
