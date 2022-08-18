function getElementById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.innerText);
    return elementValue;
  }
  
  function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.value);
    element.value = "";
    return elementValue;
  }
  
  function setTextElementValueById(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.innerText = newValue;
  }