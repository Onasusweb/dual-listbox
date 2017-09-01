!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var i=e();for(var s in i)("object"==typeof exports?exports:t)[s]=i[s]}}(this,function(){return function(t){function e(s){if(i[s])return i[s].exports;var l=i[s]={exports:{},id:s,loaded:!1};return t[s].call(l.exports,l,l.exports,e),l.loaded=!0,l.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),a="dual-listbox__item--selected",n=function(){function t(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,t),this.setDefaults(),this.selected=[],this.available=[],t.isDomElement(e)?this.select=e:this.select=document.querySelector(e),this._initOptions(s),this._initReusableElements(),this._splitSelectOptions(this.select),this._buildDualListbox(this.select.parentNode),this._addActions(),this.redraw()}return l(t,[{key:"setDefaults",value:function(){this.addEvent=null,this.removeEvent=null,this.availableTitle="Available options",this.selectedTitle="Selected options",this.addButtonText="add",this.removeButtonText="remove",this.addAllButtonText="add all",this.removeAllButtonText="remove all",this.searchPlaceholder="Search"}},{key:"addSelected",value:function(t){var e=this.available.indexOf(t);e>-1&&(this.available.splice(e,1),this.selected.push(t),this._selectOption(t.dataset.id),this.redraw())}},{key:"redraw",value:function(){this.updateAvailableListbox(),this.updateSelectedListbox()}},{key:"removeSelected",value:function(t){var e=this.selected.indexOf(t);e>-1&&(this.selected.splice(e,1),this.available.push(t),this._deselectOption(t.dataset.id),this.redraw())}},{key:"searchLists",value:function(t,e){for(var i=e.querySelectorAll(".dual-listbox__item"),s=t.toLowerCase(),l=0;l<i.length;l++){var a=i[l];-1===a.textContent.toLowerCase().indexOf(s)?a.style.display="none":a.style.display="list-item"}}},{key:"updateAvailableListbox",value:function(){this._updateListbox(this.availableList,this.available)}},{key:"updateSelectedListbox",value:function(){this._updateListbox(this.selectedList,this.selected)}},{key:"_actionAllSelected",value:function(t){for(t.preventDefault();this.available.length>0;)this.addSelected(this.available[0])}},{key:"_updateListbox",value:function(t,e){t.innerHTML="";for(var i=0;i<e.length;i++){var s=e[i];t.appendChild(s)}}},{key:"_actionItemSelected",value:function(t){t.preventDefault();var e=this.dualListbox.querySelector("."+a);e&&this.addSelected(e)}},{key:"_actionAllDeselected",value:function(t){for(t.preventDefault();this.selected.length>0;)this.removeSelected(this.selected[0])}},{key:"_actionItemDeselected",value:function(t){t.preventDefault();var e=this.dualListbox.querySelector("."+a);e&&this.removeSelected(e)}},{key:"_actionItemDoubleClick",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e&&(e.preventDefault(),e.stopPropagation()),this.selected.indexOf(t)>-1?this.removeSelected(t):this.addSelected(t)}},{key:"_actionItemClick",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;i&&i.preventDefault();for(var s=e.querySelectorAll(".dual-listbox__item"),l=0;l<s.length;l++){var n=s[l];n!==t&&n.classList.remove(a)}t.classList.contains(a)?t.classList.remove(a):t.classList.add(a)}},{key:"_addActions",value:function(){this._addButtonActions(),this._addSearchActions()}},{key:"_addButtonActions",value:function(){var t=this;this.add_all_button.addEventListener("click",function(e){return t._actionAllSelected(e)}),this.add_button.addEventListener("click",function(e){return t._actionItemSelected(e)}),this.remove_button.addEventListener("click",function(e){return t._actionItemDeselected(e)}),this.remove_all_button.addEventListener("click",function(e){return t._actionAllDeselected(e)})}},{key:"_addClickActions",value:function(t){var e=this;return t.addEventListener("dblclick",function(i){return e._actionItemDoubleClick(t,i)}),t.addEventListener("click",function(i){return e._actionItemClick(t,e.dualListbox,i)}),t}},{key:"_addSearchActions",value:function(){var t=this;this.search.addEventListener("change",function(e){return t.searchLists(e.target.value,t.dualListbox)}),this.search.addEventListener("keyup",function(e){return t.searchLists(e.target.value,t.dualListbox)})}},{key:"_buildDualListbox",value:function(t){this.select.style.display="none",this.dualListBoxContainer.appendChild(this._createList(this.availableListTitle,this.availableList)),this.dualListBoxContainer.appendChild(this.buttons),this.dualListBoxContainer.appendChild(this._createList(this.selectedListTitle,this.selectedList)),this.dualListbox.appendChild(this.search),this.dualListbox.appendChild(this.dualListBoxContainer),t.insertBefore(this.dualListbox,this.select)}},{key:"_createList",value:function(t,e){var i=document.createElement("div");return i.appendChild(t),i.appendChild(e),i}},{key:"_createButtons",value:function(){this.buttons=document.createElement("div"),this.buttons.classList.add("dual-listbox__buttons"),this.add_all_button=document.createElement("button"),this.add_all_button.classList.add("dual-listbox__button"),this.add_all_button.innerHTML=this.addAllButtonText,this.add_button=document.createElement("button"),this.add_button.classList.add("dual-listbox__button"),this.add_button.innerHTML=this.addButtonText,this.remove_button=document.createElement("button"),this.remove_button.classList.add("dual-listbox__button"),this.remove_button.innerHTML=this.removeButtonText,this.remove_all_button=document.createElement("button"),this.remove_all_button.classList.add("dual-listbox__button"),this.remove_all_button.innerHTML=this.removeAllButtonText,this.buttons.appendChild(this.add_all_button),this.buttons.appendChild(this.add_button),this.buttons.appendChild(this.remove_button),this.buttons.appendChild(this.remove_all_button)}},{key:"_createListItem",value:function(t){var e=document.createElement("li");return e.classList.add("dual-listbox__item"),e.innerHTML=t.innerHTML,e.dataset.id=t.value,this._addClickActions(e),e}},{key:"_createSearch",value:function(){this.search=document.createElement("input"),this.search.classList.add("dual-listbox__search"),this.search.placeholder=this.searchPlaceholder}},{key:"_deselectOption",value:function(t){for(var e=this.select.options,i=0;i<e.length;i++){var s=e[i];s.value===t&&(s.selected=!1)}this.removeEvent&&this.removeEvent(t)}},{key:"_initOptions",value:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e])}},{key:"_initReusableElements",value:function(){this.dualListbox=document.createElement("div"),this.dualListbox.classList.add("dual-listbox"),this.select.id&&this.dualListbox.classList.add(this.select.id),this.dualListBoxContainer=document.createElement("div"),this.dualListBoxContainer.classList.add("dual-listbox__container"),this.availableList=document.createElement("ul"),this.availableList.classList.add("dual-listbox__available"),this.selectedList=document.createElement("ul"),this.selectedList.classList.add("dual-listbox__selected"),this.availableListTitle=document.createElement("div"),this.availableListTitle.classList.add("dual-listbox__title"),this.availableListTitle.innerText=this.availableTitle,this.selectedListTitle=document.createElement("div"),this.selectedListTitle.classList.add("dual-listbox__title"),this.selectedListTitle.innerText=this.selectedTitle,this._createButtons(),this._createSearch()}},{key:"_selectOption",value:function(t){for(var e=this.select.options,i=0;i<e.length;i++){var s=e[i];s.value===t&&(s.selected=!0)}this.addEvent&&this.addEvent(t)}},{key:"_splitSelectOptions",value:function(t){for(var e=t.options,i=0;i<e.length;i++){var s=e[i],l=this._createListItem(s);s.attributes.selected?this.selected.push(l):this.available.push(l)}}}],[{key:"isDomElement",value:function(t){return"object"===("undefined"==typeof HTMLElement?"undefined":s(HTMLElement))?t instanceof HTMLElement:t&&"object"===(void 0===t?"undefined":s(t))&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName}}]),t}();e.default=n,e.DualListbox=n}])});