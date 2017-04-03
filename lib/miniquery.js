/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
const SweetSelector = {
  select : (selector) => {
    return document.querySelectorAll(selector)
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

const DOM = {
  hide: (selector) => {
    for (var i = 0; i < SweetSelector.select(selector).length; i++) {
      SweetSelector.select(selector)[i].style.display = 'none';
    }
  },
  show: (selector) => {
    for (var i = 0; i < SweetSelector.select(selector).length; i++) {
      SweetSelector.select(selector)[i].style.display = '';
    }
  },
  addClass: (selector, className) => {
    for (var i = 0; i < SweetSelector.select(selector).length; i++) {
      SweetSelector.select(selector)[i].classList.add(className)
    }
  },
  removeClass: (selector, className) => {
    for (var i = 0; i < SweetSelector.select(selector).length; i++) {
      SweetSelector.select(selector)[i].classList.remove(className)
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
const EventDispatcher = {
  on: (selector, eventName, eventHandler) => {
    for (var i = 0; i < SweetSelector.select(selector).length; i++) {
      SweetSelector.select(selector)[i].addEventListener(eventName, eventHandler())
    }
  }
  trigger: (selector, eventName) => {
    for (var i = 0; i < SweetSelector.select(selector).length; i++) {
      SweetSelector.select(selector)[i].addEventListener(eventName, () => {
        console.log("Awesome");
      })
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

const AjaxWrapper = {
  request: (input) => {
    let = xhttp = new XMLHttpRequest()
    xhttp.open(input.type, input.url)
    xhttp.onload = function() {
      if (xhttp.status >= 200 && xhttp.status < 400) {
        return input.success('Login')
      } else {
        return input.fail()
      }
    }
    xhttp.onerror = function() {
      return input.fail()
    }
    xhttp.send()
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

class Miniquery {
  constructor(selector) {
    this.miniquery = document.querySelectorAll(selector)
  }
  hide(){
    for (var i = 0; i < this.miniquery.length; i++) {
      this.miniquery[i].style.display = 'none';
    }
  }
  show(){
    for (var i = 0; i < this.miniquery.length; i++) {
      this.miniquery[i].style.display = '';
    }
  }
}

let miniquery = (selector) => {
  return new Miniquery(selector)
}

let $ = (selector) => {
  return new Miniquery(selector)
}
