jQuery.prototype.html = function (html) {
if (html) {
this.each(element=> element.innerHTML = html)
return this.innerHTML
}
else {
this.each(element=>element.innerHTML)
return this.innerHTML
}
}


jQuery.prototype.text = function (text) {
if (text) {
this.each(element=> element.innerText = text)
return this.innerText
}
else {
this.each(element=>element.innerText)
return this.innerText
}
}

