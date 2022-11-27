let breadTypes = ["Thin", "Medium", "Thick"];
let sizes = [25, 30, 35];
let toppings = ["Tomato", "Turkey meat", "Olive", "Picklet cucumber", "Mushroom", "Horse meat"];
let addls = ["Pepper", "Sausages"];

let orderToppings = [];
let orderAddls = [];

let elPizzaForm = document.querySelector(".js-pizza-form");
let elBreadSelect = elPizzaForm.querySelector(".js-bread-select");
let elSizeRadioWrapper = elPizzaForm.querySelector(".js-size-radio-wrapper");
let elToppingsWrapper = elPizzaForm.querySelector(".js-toppings-wrapper");
let elAddlsWrapper = elPizzaForm.querySelector(".js-addl-wrapper");//addl-s

let elOrderState = document.querySelector(".js-order-state");
let elOrderBread = elOrderState.querySelector(".ls-order-bread");
let elOrderSize = elOrderState.querySelector(".js-order-size");
let elOrderToppings = elOrderState.querySelector(".js-order-toppings");
let elOrderAddl = elOrderState.querySelector(".js-order-addl");

let renderToppings = function () {
  elOrderToppings.innerHTML = "";

  for (let i = 0; i <orderToppings.length; i++) {
let elNewOrderLi = document.createElement
("li");
elNewOrderLi.textContent = orderToppings[i];
elOrderToppings.appendChild(elNewOrderLi);
  }
}

let renderAddls = function() {
  elOrderAddl.innerHTML = "";

  for (let i = 0; i < orderAddls.length; i++) {
    let elNewAddlLi = document.createElement("li");
    elNewAddlLi.textContent = orderAddls[i];
    
    elOrderAddl.appendChild(elNewAddlLi);
  }
}

for (let i = 0; i < breadTypes.length; i++) {
  let elBreadOption = document.createElement("option");
  elBreadOption.value = breadTypes[i];
  elBreadOption.textContent = breadTypes[i];

  elBreadSelect.appendChild(elBreadOption);
}

for (let i = 0; i < sizes.length; i++) {
  let elSizeLabel = document.createElement("label");
  let elSizeInput = document.createElement("input");
  let elSizeSpan = document.createElement("span");

  elSizeLabel.className = "me-3";

  elSizeInput.classList.add("size-radio", "js-size-radio");
  elSizeInput.type = "radio";
  elSizeInput.name = "size";
  elSizeInput.value = `${sizes[i]} sm`;

  elSizeSpan.className = "ms-1";
  elSizeSpan.textContent = `${sizes[i]} sm`;

  elSizeInput.addEventListener("change", function() {
    elOrderSize.textContent = this.value;
    console.log(this.value);
  })

  elSizeLabel.append(elSizeInput, elSizeSpan);

  elSizeRadioWrapper.appendChild(elSizeLabel);
}

for (let i = 0; i < toppings.length; i++) {
  let elToppingLabel = document.createElement("label");
  let elToppingInput = document.createElement("input");
  let elToppingSpan = document.createElement("span");

  elToppingLabel.className = "me-3";

  elToppingInput.className = "topping-checkbox js-topping-checkbox";
  elToppingInput.type = "checkbox";
  elToppingInput.name = "topping";
  elToppingInput.value = toppings[i];

  elToppingSpan.className = "ms-1";
  elToppingSpan.textContent = toppings[i];

  elToppingInput.addEventListener("change", function() {
    if (orderToppings.includes(this.value)) {
      let valueIndex = orderToppings.indexOf(this.value);
      orderToppings.splice(valueIndex , 1);
    } else {
      orderToppings.push(this.value);
    }

    renderToppings();
  })

  elToppingLabel.append(elToppingInput, elToppingSpan);

  elToppingsWrapper.appendChild(elToppingLabel);
}

for (let i = 0; i < addls.length; i++) {
  let elAddlLabel = document.createElement("label");
  let elAddlInput = document.createElement("input");
  let elAddlSpan = document.createElement("span");

  elAddlLabel.className = "me-3";

  elAddlInput.className = "addl-ingredient js-addl-ingredient";
  elAddlInput.type = "checkbox";
  elAddlInput.name = "addl";
  elAddlInput.value = addls[i];

  elAddlSpan.className = "ms-1";
  elAddlSpan.textContent = addls[i];

  elAddlInput.addEventListener("change", function() {
    if (orderAddls.includes(this.value)) {
      let valueIndex = orderAddls.indexOf(this.value);
      orderAddls.splice(valueIndex , 1);
    } else {
      orderAddls.push(this.value);
    }

    renderAddls();
  })

  elAddlLabel.append(elAddlInput, elAddlSpan);

  elAddlsWrapper.appendChild(elAddlLabel);
}

let updateBreadType = function() {
  elOrderBread.textContent = elBreadSelect.value;
};
updateBreadType();

elBreadSelect.addEventListener("change", updateBreadType)
