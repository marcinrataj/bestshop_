//WYBIERZ PAKIET DIV
let div = document.querySelector(".choose-package")
//ROZWIN ABY WYBRAĆ PAKIET
div.addEventListener("click", () => {
  div.classList.toggle(".choose-package-active")
  //LISTA 3 PAKIETOW
  let divEl = document.querySelector(".choose-package-elements")
  //ROZWIN , ZWIN
  if (div.classList.value === "choose-package") {
    divEl.style.display = "none"
    var label1 = (document.querySelector(".checkbox-label-pay1").style.display =
      "inherit")
    var label2 = (document.querySelector(".checkbox-label-pay2").style.display =
      "inherit")
  } else {
    divEl.style.display = "block"
    var label1 = (document.querySelector(".checkbox-label-pay1").style.display =
      "none")
    var label2 = (document.querySelector(".checkbox-label-pay2").style.display =
      "none")
  }
  div.classList.value === "choose-package .choose-package-active"

  var list = document.querySelector(".list")
  var element = document.querySelector(".element")





})

// OBSŁUGA PAKIETU BASIC ABY SIĘ POJAWIŁ NA LIŚCIE TYLKO RAZ A POTEM DO EDYCJI 
basic()
function basic() {
    var basic = document.querySelector(".basic").addEventListener("click", () => {
      div.innerHTML = "&nbsp Basic"
      div.setAttribute("data-value", "basic")
      //WSTAWI SIE PO PRAWEJ STRONIE KALKULATORA
      if (div.getAttribute("data-value") === "basic") {
        console.log("data-value = basic")
  
        class Basic {
          constructor(package_text, package_basic, package_value) {
            this.package_text = package_text
            this.package_basic = package_basic
            this.package_value = package_value
          }
        }
  
        const class1 = new Basic(`Package `, "Basic ", " $0")
        console.log(class1)
  
        if (
          div.getAttribute("data-value") === "basic"
        ) {
          const list = document.querySelector(".list") // ODWOŁUJEMY SIĘ DO LISTY
          var basicElement = document.createElement("LI")
          basicElement.classList = "basicElement"
          list.append(basicElement)
  
          var span1basic = document.createElement("SPAN")
          span1basic.classList = "span1basic"
          span1basic.innerHTML = `${class1.package_text}`
          basicElement.append(span1basic)
  
          var span2basic = document.createElement("SPAN")
          span2basic.classList = "span2basic"
          span2basic.innerHTML = `${class1.package_basic}`
          basicElement.append(span2basic)
  
          var span3basic = document.createElement("SPAN")
          span3basic.classList = "span3basic"
          span3basic.innerHTML = `${class1.package_value}`
          basicElement.append(span3basic)
  
          var el = document.querySelector(".basicElement")
          list.replaceChild(el, basicElement)[0]


          var list2 = document.querySelector('.list2')
          list2.classList = 'list2';
        
          var countElement = document.createElement('LI');
          countElement.classList = 'valueLI'
        
          var countSpan1 = document.createElement('SPAN');
          countSpan1.classList = 'countSpan1';
          var countSpan2 = document.createElement('SPAN');
          countSpan2.classList = 'countSpan2';
          countSpan1.innerHTML = 'Total';
          countSpan2.innerHTML = `$${quantity.value * 0.5 + orders.value * 0.25}`;
          list2.appendChild(countElement)
          countElement.appendChild(countSpan1)
          countElement.appendChild(countSpan2)
        
          var newCountElement = document.createElement('LI');
          list2.replaceChildren(newCountElement, countElement)
  
        
        
        }
      }
      

  })

}

// OBSŁUGA PAKIETU PROFESSIONAL ABY SIĘ POJAWIŁ NA LIŚCIE TYLKO RAZ A POTEM DO EDYCJI 
professional()
function professional() {
  var professional = document
  .querySelector(".professional")
  .addEventListener("click", () => {
    div.innerHTML = "&nbsp Professional"
    div.setAttribute("data-value", "professional")

    if (div.getAttribute("data-value") === "professional") {
      console.log("data-value = professional")

      class Professional {
        constructor(package_text, package_professional, package_value) {
          this.package_text = package_text
          this.package_professional = package_professional
          this.package_value = package_value
        }
      }

      const class2 = new Professional(`Package `, " Professional ", " 25")
      console.log(class2)

      if (
        div.getAttribute("data-value") === "professional" 
      ) {
        const list = document.querySelector(".list") // ODWOŁUJEMY SIĘ DO LISTY
        var basicElement = document.createElement("LI")
        basicElement.classList = "basicElement"
        list.append(basicElement)

        var span1basic = document.createElement("SPAN")
        span1basic.classList = "span1basic"
        span1basic.innerHTML = `${class2.package_text}`
        basicElement.append(span1basic)

        var span2basic = document.createElement("SPAN")
        span2basic.classList = "span2basic"
        span2basic.innerHTML = `${class2.package_professional}`
        basicElement.append(span2basic)

        var span3basic = document.createElement("SPAN")
        span3basic.classList = "span3basic"
        span3basic.innerHTML = `$${class2.package_value}`
        basicElement.append(span3basic)

        var el = document.querySelector(".basicElement")
        list.replaceChild(el, basicElement)[1]




       var list2 = document.querySelector('.list2')
       list2.classList = 'list2';
      
       var countElement = document.createElement('LI');
       countElement.classList = 'valueLI'
      
       var countSpan1 = document.createElement('SPAN');
       countSpan1.classList = 'countSpan1';
       var countSpan2 = document.createElement('SPAN');
       countSpan2.classList = 'countSpan2';
       countSpan1.innerHTML = 'Total';

       countSpan2.innerHTML = `$${quantity.value * 0.5 + orders.value * 0.25 + 25.00}`;
       countSpanContinue = 0;
       countSpanContinue = countSpan2;

       list2.appendChild(countElement)
       countElement.appendChild(countSpan1)
       countElement.appendChild(countSpan2)
      
       var newCountElement = document.createElement('LI');
       list2.replaceChildren(newCountElement, countElement)














        
      }
    }
  })
}

// OBSŁUGA PAKIETU PREMIUM ABY SIĘ POJAWIŁ NA LIŚCIE TYLKO RAZ A POTEM DO EDYCJI 
premium()
function premium(){
var premium = document.querySelector(".premium").addEventListener("click", () => {
    div.innerHTML = "&nbsp Premium"
    div.setAttribute("data-value", "premium")

    if (div.getAttribute("data-value") === "premium") {
      console.log("data-value = premium")

      class Premium {
        constructor(package_text, package_premium, package_value) {
          this.package_text = package_text
          this.package_premium = package_premium
          this.package_value = package_value
        }
      }

      const class3 = new Premium(`Package `, "Premium ", " $60")
      console.log(class3)

      if (
        div.getAttribute("data-value") === "premium" 
      ) {
        const list = document.querySelector(".list") // ODWOŁUJEMY SIĘ DO LISTY
        var basicElement = document.createElement("LI")
        basicElement.classList = "basicElement"
        list.append(basicElement)

        var span1basic = document.createElement("SPAN")
        span1basic.classList = "span1basic"
        span1basic.innerHTML = `${class3.package_text}`
        basicElement.append(span1basic)

        var span2basic = document.createElement("SPAN")
        span2basic.classList = "span2basic"
        span2basic.innerHTML = `${class3.package_premium}`
        basicElement.append(span2basic)

        var span3basic = document.createElement("SPAN")
        span3basic.classList = "span3basic"
        span3basic.innerHTML = `${class3.package_value}`
        basicElement.append(span3basic)

        var el = document.querySelector(".basicElement")
        list.replaceChild(el, basicElement)[2]


        var list2 = document.querySelector('.list2')
        list2.classList = 'list2';
       
        var countElement = document.createElement('LI');
        countElement.classList = 'valueLI'
       
        var countSpan1 = document.createElement('SPAN');
        countSpan1.classList = 'countSpan1';
        var countSpan2 = document.createElement('SPAN');
        countSpan2.classList = 'countSpan2';
        countSpan1.innerHTML = 'Total';
 
        countSpan2.innerHTML = `$${packagesValues.premium + quantity.value * 0.5 + orders.value * 0.25}`;
        countSpanContinue = 0;
        countSpanContinue = countSpan2;
 
        list2.appendChild(countElement)
        countElement.appendChild(countSpan1)
        countElement.appendChild(countSpan2)
       
        var newCountElement = document.createElement('LI');
        list2.replaceChildren(newCountElement, countElement)
      }
    }
  })
}

//PRZYCISK BASIC ZMIENIA WSZYSTKO NA OPCJĘ Z BASIC
var button1 = document.querySelector('.basic');
var button1 = document.querySelector('.basic');
button1.addEventListener('click',()=>{
  var span2 = document.querySelector('.span2basic');
  var span3 = document.querySelector('.span3basic');
  span3.innerHTML = '$0';
  span2.innerHTML = 'Basic';
  basic()



})

//PRZYCISK PROFESSIONAL ZMIENIA WSZYSTKO NA OPCJĘ Z PROFESSIONAL
var button2 = document.querySelector('.professional');
button2.addEventListener('click',()=>{
  var span2 = document.querySelector('.span2basic');
  var span3 = document.querySelector('.span3basic');
  span3.innerHTML = '$25';
  span2.innerHTML = 'Professional';
  professional()
})

//PRZYCISK PREMIUM ZMIENIA WSZYSTKO NA OPCJĘ Z PREMIUM
var button3 = document.querySelector('.premium');
button3.addEventListener('click',()=>{
  var span2 = document.querySelector('.span2basic');
  var span3 = document.querySelector('.span3basic');
  span3.innerHTML = '$60';
  span2.innerHTML = 'Premium';
  premium()
})


class Packages {
  constructor(productValue, ordersValue, packageValue, accountingValue, terminalValue) {
  this.productValue = document.querySelector('.span3products');
  this.ordersValue = document.querySelector('.span3orders');
  this.packageValue = document.querySelector('.span3basic');
  this.accountingValue = document.querySelector('.span3accounting');
  this.terminalValue = document.querySelector('.span3terminal');
  }
}

var packagesValues = new Packages(basic)




// OBSŁUGA PIERWSZEGO INPUTA "Products quantity"
var quantity = document.querySelector(".product-input") // ODWOŁAJ SIĘ DO PIERWSZEGO INPUTA
quantity.addEventListener("change", () => {
  console.log(`Pierwszy input: ${quantity.value}`)
  const list = document.querySelector(".list") // ODWOŁUJEMY SIĘ DO LISTY
  var qualityElement = document.createElement("LI") // TWORZYMY NOWY LIST-ELEMENT DLA PIERWSZEGO INPUTA
  qualityElement.classList = "element quantityElement"
  const element = document.querySelector(".element")
  // qualityElement.innerHTML = 123
  list.append(qualityElement) // GDY DOJDZIE DO RUCHU WRZUC ELEMENT NA LISTĘ

  var span1products = document.createElement("SPAN")
  span1products.classList = "span1products"
  span1products.innerHTML = "Product"
  qualityElement.append(span1products)

  var span2products = document.createElement("SPAN")
  span2products.classList = "span2products"
  qualityElement.append(span2products)

  var span3products = document.createElement("SPAN")
  span3products.classList = "span3products"
  span3products.innerHTML = `${quantity.value}`
  qualityElement.append(span3products)
  span2products.innerHTML = `${quantity.value}`




  
  var list2 = document.querySelector('.list2')
  list2.classList = 'list2';

  var countElement = document.createElement('LI');
  countElement.classList = 'valueLI'

  var countSpan1 = document.createElement('SPAN');
  countSpan1.classList = 'countSpan1';
  var countSpan2 = document.createElement('SPAN');
  countSpan2.classList = 'countSpan2';
  countSpan1.innerHTML = 'Total';
  countSpan2.innerHTML = `$${quantity.value * 0.5 + orders.value * 0.25}`;
  list2.appendChild(countElement)
  countElement.appendChild(countSpan1)
  countElement.appendChild(countSpan2)

  var newCountElement = document.createElement('LI');
  list2.replaceChildren(newCountElement, countElement)





  if (
    `${quantity.value}` > "0" ||
    `${quantity.value}` < "0" ||
    `${quantity.value}` === "0"
  ) {
    var el = document.querySelector(".quantityElement")
    list.replaceChild(el, qualityElement)
    span1products.innerHTML = "Products"
    var span2Change = document.querySelector(".span2products")
    span2Change.innerHTML = `${quantity.value} * $0.5`
  
    var span3Change = document.querySelector(".span3products")
    span3Change.innerHTML = `$${quantity.value * 0.5}`
    
  }








})

// OBSŁUGA DRUGIEGO INPUTA "Estimated orders in month"
var orders = document.querySelector(".orders-input") //drugi input
orders.addEventListener("change", () => {
  console.log(`Drugi input: ${orders.value}`)
  const list = document.querySelector(".list") // ODWOŁUJEMY SIĘ DO LISTY
  var ordersElement = document.createElement("LI") // TWORZYMY NOWY LIST-ELEMENT DLA PIERWSZEGO INPUTA
  ordersElement.classList = "element ordersElement"
  const element = document.querySelector(".element")
  // qualityElement.innerHTML = 123
  list.appendChild(ordersElement) // GDY DOJDZIE DO RUCHU WRZUC ELEMENT NA LISTĘ

  var span1orders = document.createElement("SPAN")
  span1orders.classList = "span1orders"
  span1orders.innerHTML = "Orders"
  ordersElement.append(span1orders)

  var span2orders = document.createElement("SPAN")
  span2orders.classList = "span2orders"
  ordersElement.append(span2orders)

  var span3orders = document.createElement("SPAN")
  span3orders.classList = "span3orders"
  span3orders.innerHTML = `${orders.value}`
  ordersElement.append(span3orders)
  span2orders.innerHTML = `${orders.value}`



  var list2 = document.querySelector('.list2')
  list2.classList = 'list2';

  var countElement = document.createElement('LI');
  countElement.classList = 'valueLI'

  var countSpan1 = document.createElement('SPAN');
  countSpan1.classList = 'countSpan1';
  var countSpan2 = document.createElement('SPAN');
  countSpan2.classList = 'countSpan2';
  
  countSpan1.innerHTML = 'Total';
  countSpan2.innerHTML = `$${quantity.value * 0.5 + orders.value * 0.25}`;
  list2.appendChild(countElement)
  countElement.appendChild(countSpan1)
  countElement.appendChild(countSpan2)

  var newCountElement = document.createElement('LI');
  list2.replaceChildren(newCountElement, countElement)
















  if (
    `${orders.value}` > "0" ||
    `${orders.value}` < "0" ||
    `${orders.value}` === "0"
  ) {
    var el = document.querySelector(".ordersElement")
    list.replaceChild(el, ordersElement)
    span1orders.innerHTML = "Orders"
  }

  var span2Change = document.querySelector(".span2orders")
  span2Change.innerHTML = `${orders.value} * $0.25`

  var span3Change = document.querySelector(".span3orders")
  span3Change.innerHTML = `$${orders.value * 0.25} `
})


// OBSŁUGA 2 CHECKBOXÓW POD NAJWAŻNIEJSZYMI INPUTAMI

//PIERWSZY "Accounting"
document.querySelector('.accounting').onclick = function () {
    console.log("Checkbox accounting is clicked");

  const list = document.querySelector(".list") // ODWOŁUJEMY SIĘ DO LISTY
  var accountingElement = document.createElement("LI") // TWORZYMY NOWY LIST-ELEMENT DLA PIERWSZEGO INPUTA
  accountingElement.classList = 'accountingElement'
  list.appendChild(accountingElement) // GDY DOJDZIE DO RUCHU WRZUC ELEMENT NA LISTĘ


    var span1accounting = document.createElement("SPAN")
    span1accounting.classList = "span1accounting"
    span1accounting.innerHTML = `Accounting`;
    accountingElement.append(span1accounting)

    var span3accounting = document.createElement("SPAN")
    span3accounting.classList = "span3accounting"
    span3accounting.innerHTML = `$35`
    accountingElement.append(span3accounting)

    var el = document.querySelector(".accountingElement")
    list.replaceChild(el, accountingElement)



    var list2 = document.querySelector('.list2')
    list2.classList = 'list2';
   
    var countElement = document.createElement('LI');
    countElement.classList = 'valueLI'
   
    var countSpan1 = document.createElement('SPAN');
    countSpan1.classList = 'countSpan1';
    var countSpan2 = document.createElement('SPAN');
    countSpan2.classList = 'countSpan2';
    countSpan1.innerHTML = 'Total';

    countSpan2.innerHTML = `$${quantity.value * 0.5 + orders.value * 0.25 + packagesValues.accounting}`;
    countSpanContinue = 0;
    countSpanContinue = countSpan2;

    list2.appendChild(countElement)
    countElement.appendChild(countSpan1)
    countElement.appendChild(countSpan2)
   
    var newCountElement = document.createElement('LI');
    list2.replaceChildren(newCountElement, countElement)
}

//DRUGI "Rental of a payment terminal"
document.querySelector('.terminal').onclick = function () {
  console.log("Checkbox terminal is clicked");

const list = document.querySelector(".list") // ODWOŁUJEMY SIĘ DO LISTY
var terminalElement = document.createElement("LI") // TWORZYMY NOWY LIST-ELEMENT DLA PIERWSZEGO INPUTA
terminalElement.classList = 'terminalElement'
list.appendChild(terminalElement) // GDY DOJDZIE DO RUCHU WRZUC ELEMENT NA LISTĘ

  var span1terminal = document.createElement("SPAN")
  span1terminal.classList = "span1accounting"
  span1terminal.innerHTML = `Terminal`;
  terminalElement.append(span1terminal)

  var span3terminal = document.createElement("SPAN")
  span3terminal.classList = "span3terminal"
  span3terminal.innerHTML = `$5`
  terminalElement.append(span3terminal)

  var el = document.querySelector(".terminalElement")
  list.replaceChild(el, terminalElement);

  var list2 = document.querySelector('.list2')
  list2.classList = 'list2';

  var countElement = document.createElement('LI');
  countElement.classList = 'valueLI'

  var countSpan1 = document.createElement('SPAN');
  countSpan1.classList = 'countSpan1';
  var countSpan2 = document.createElement('SPAN');
  countSpan2.classList = 'countSpan2';
  countSpan1.innerHTML = 'Total';
  countSpan2.innerHTML = `$${quantity.value * 0.5 + orders.value * 0.25 + packagesValues.terminal}`;
  list2.appendChild(countElement)
  countElement.appendChild(countSpan1)
  countElement.appendChild(countSpan2)

  var newCountElement = document.createElement('LI');
  list2.replaceChildren(newCountElement, countElement)
}


// TOTAL PODSUMOWUJĄCY WARTOŚĆ PAKIETU
var productValue = document.querySelector('.span3products');
var ordersValue = document.querySelector('.span3orders');
var packageValue = document.querySelector('.span3basic');
var accountingValue = document.querySelector('.span3accounting');
var terminalValue = document.querySelector('.span3terminal');

const list2 = document.querySelector(".list2") // ODWOŁUJEMY SIĘ DO LISTY



// if (
//   `${productValue.value}` > "0" ||
//   `${productValue.value}` < "0"
//   `${productValue.value}` === "0"
// ) {

// }


function Calculator(form, summary) {      //funkcja Calculator
  this.prices = {                             // obiekt ceny
      products: 0.5,
      orders: 0.25,
      package: {
          basic: 0,
          professional: 25,
          premium: 60,
      },
      accounting: 35,
      terminal: 5

  }
  this.form = {                                 // obiekt formularz
      products: form.querySelector("#products"),
      orders: form.querySelector("#orders"),
      package: form.querySelector("#package"),
      accounting: form.querySelector("#accounting"),
      terminal: form.querySelector("#terminal")
  };

  this.summary = {                              // obiekt podsumowanie
      list: summary.querySelector("ul"),
      items: summary.querySelector("ul").children,
      total: {
          container: summary.querySelector("#total-price"),
          price: summary.querySelector(".total__price")
      }
  };
  this.addEvents();
}
