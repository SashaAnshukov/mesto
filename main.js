(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameCard=e.name,this._linkCard=e.link,this._cardSelector=r,this.handleCardClick=o.bind(this),this._cardOwnerId=e.owner._id,this.cardId=e._id,this._currentUserId=n,this._handleCardDelete=i,this._likes=e.likes,this._handleCardLike=a,console.log("this._currentUserId",this._currentUserId)}var n,r;return n=t,(r=[{key:"setLikesInfo",value:function(e){var t=this;e&&(this._likes=e.likes);var n=this._likes.length;this._element.querySelector(".rectangle__mesto-numbersLike").textContent=n,this.isLiked=this._likes.find((function(e){return e._id===t._currentUserId})),this.isLiked?this._element.querySelector(".rectangle__mesto-like").classList.add("rectangle__mesto-like_active"):this._element.querySelector(".rectangle__mesto-like").classList.remove("rectangle__mesto-like_active")}},{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".rectangle").cloneNode(!0)}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._setEventListeners();var e=this._element.querySelector(".rectangle__image"),t=this._element.querySelector(".rectangle__mesto-text");return e.src=this._linkCard,t.textContent=this._nameCard,e.alt=this._nameCard,this.setLikesInfo(),this._cardOwnerId!==this._currentUserId&&this._element.querySelector(".rectangle__trash").classList.add("rectangle__trash_hidden"),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".rectangle__image").addEventListener("click",(function(){return e.handleCardClick(e._nameCard,e._linkCard)})),this._element.querySelector(".rectangle__mesto-like").addEventListener("click",(function(){return e._handleCardLike(e)})),this._element.querySelector(".rectangle__trash").addEventListener("click",(function(){return e._handleCardDelete(e)}))}},{key:"handleTrash",value:function(){this._element.closest(".rectangle").remove()}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r={popupFormSelector:".popup__form",popupInputSelector:".popup__input",submitButtonSelector:".popup__button",spanInputErrorClass:".popup__input-error",popupErrorClass:"popup__input-error_active",popuplineError:"popup__input_type_error"},o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._validationMassive=t,this._inputList=Array.from(this._formElement.querySelectorAll(this._validationMassive.popupInputSelector)),this._buttonElement=this._formElement.querySelector(this._validationMassive.submitButtonSelector)}var t,r;return t=e,(r=[{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))})),this._toggleButtonState()}},{key:"_showInputError",value:function(e,t){console.log(e.name,t);var n=e.closest(".popup__label").querySelector(this._validationMassive.spanInputErrorClass);n.textContent=t,n.classList.add(this._validationMassive.popupErrorClass),e.classList.add(this._validationMassive.popuplineError)}},{key:"_hideInputError",value:function(e){var t=e.closest(".popup__label").querySelector(this._validationMassive.spanInputErrorClass);t.textContent="",t.classList.remove(this._validationMassive.popupErrorClass),e.classList.remove(this._validationMassive.popuplineError)}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_checkInputValidity",value:function(e){if(e.validity.valid)this._hideInputError(e);else{var t=e.validationMessage;this._showInputError(e,t)}}},{key:"_toggleButtonState",value:function(){this._inputList.some((function(e){return!e.validity.valid}))?this._buttonElement.setAttribute("disabled",!0):this._buttonElement.removeAttribute("disabled")}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(t.prototype,r),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closePopupOnEcs=this._closePopupOnEcs.bind(this),this._closePopupOnOverlay=this._closePopupOnOverlay.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_visible"),document.addEventListener("click",this._closePopupOnOverlay),document.addEventListener("keydown",this._closePopupOnEcs)}},{key:"close",value:function(){this._popup.classList.remove("popup_visible"),document.removeEventListener("click",this._closePopupOnOverlay),document.removeEventListener("keydown",this._closePopupOnEcs)}},{key:"_closePopupOnEcs",value:function(e){"Escape"==e.key&&this.close()}},{key:"_closePopupOnOverlay",value:function(e){var t=e.target.closest(".popup__overlay");e.target==t&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){e.close()}))}}])&&i(t.prototype,n),e}();function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"open",value:function(e,t){u(f(a.prototype),"open",this).call(this),this._popup.querySelector(".popup__figure-caption").textContent=e,this._popup.querySelector(".popup__figure-image").src=t,this._popup.querySelector(".popup__figure-image").alt=e}}])&&c(t.prototype,n),a}(a);function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"prepend",value:function(e){this._container.prepend(e)}}])&&_(t.prototype,n),e}();function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=t,n._popupButton=n._popup.querySelector(".popup__button"),n._defaultPopupButtonText=n._popupButton.textContent,n._inputs=Array.from(n._popup.querySelectorAll(".popup__input")),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"setFormAction",value:function(e){this._handleFormSubmit=e}},{key:"setEventListeners",value:function(){var e=this;m(g(a.prototype),"setEventListeners",this).call(this),this._form=this._popup.querySelector(".popup__form"),this._form.addEventListener("submit",(function(t){t.preventDefault();var n=e._getInputValues();e._handleFormSubmit(n)}))}},{key:"preLoader",value:function(e){this._popupButton.textContent=e?"Сохранение...":this._defaultPopupButtonText}},{key:"close",value:function(){this._form.reset(),m(g(a.prototype),"close",this).call(this)}}])&&y(t.prototype,n),a}(a);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){var n=t.name,r=t.about,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._job=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._job.textContent=e.about}},{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"setAvatarInfo",value:function(e){this._avatar.src=e.avatar}},{key:"getAvatarInfo",value:function(){return{avatar:this._avatar.src}}}])&&S(t.prototype,n),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){var n=t.adress,r=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._adress=n,this._token=r}var t,n;return t=e,(n=[{key:"getFullPageInfo",value:function(){return Promise.all([this.getInitialCards(),this.getUserData()])}},{key:"getInitialCards",value:function(){return fetch("".concat(this._adress,"/cards"),{method:"GET",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"getUserData",value:function(){return fetch("".concat(this._adress,"/users/me"),{method:"GET",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"setUserData",value:function(e){return fetch("".concat(this._adress,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(e){var t=e.avatar;return console.log("!!!",t),fetch("".concat(this._adress,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then(this._checkResponse)}},{key:"setMyCard",value:function(e){return fetch("".concat(this._adress,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._adress,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"setLikeCard",value:function(e){return fetch("".concat(this._adress,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"deleteLikeCard",value:function(e){return fetch("".concat(this._adress,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}}])&&C(t.prototype,n),e}(),O=(document.querySelector(".elements"),document.querySelector(".popup_type_edit")),I=document.querySelector(".popup_type_add-card"),P=document.querySelector(".popup_type_change-avatar"),j=document.querySelector(".profile__edit-button"),q=document.querySelector(".profile__add-button"),T=document.querySelector(".profile__avatar-button"),R=document.querySelector(".popup__input_text_name"),x=document.querySelector(".popup__input_text_profession"),U=new o(r,O);U.enableValidation();var A=new o(r,I);A.enableValidation(),new o(r,P).enableValidation();var B=new w({adress:"https://mesto.nomoreparties.co/v1/cohort-26",token:"86724e9f-206a-43a9-ab92-a5e8d301d078"}),M=new E(".popup_type_confirm");function V(e){M.setFormAction((function(){M.preLoader(!0),B.deleteCard(e.cardId).then((function(t){e.handleTrash(),M.close()})).catch((function(e){return console.log("Ошибка удаления карточки: ".concat(e))})).finally((function(){M.preLoader(!1)}))})),M.open()}function D(e){e.isLiked?B.deleteLikeCard(e.cardId).then((function(t){e.setLikesInfo(t)})).catch((function(e){return console.log("Ошибка удаления лайка: ".concat(e))})):B.setLikeCard(e.cardId).then((function(t){e.setLikesInfo(t)})).catch((function(e){return console.log("Ошибка постановки лайка: ".concat(e))}))}M.setEventListeners(),B.getFullPageInfo().then((function(e){var n=e[0];console.log(n);var r=e[1];console.log(r);var o=r._id;z.setUserInfo(r),z.setAvatarInfo(r);var i=new h(".popup_type_image"),a=i.open.bind(i);function s(e,n){return new t(e,o,n,a,V,D).generateCard()}i.setEventListeners();var c=new d({items:n,renderer:function(e){var t=s(e,".rectangle-item-template");c.addItem(t)}},".elements");c.renderItems();var u=new E(".popup_type_add-card",(function(e){u.preLoader(!0),B.setMyCard({name:e.name,link:e.link}).then((function(e){var t=s(e,".rectangle-item-template");c.prepend(t),u.close()})).catch((function(e){return console.log("Ошибка добавления карточки: ".concat(e))})).finally((function(){u.preLoader(!1)}))}));q.addEventListener("click",(function(){A.resetValidation(),u.open()})),u.setEventListeners()})).catch((function(e){return console.log("Ошибка получения данных пользователя: ".concat(e))}));var z=new L({name:".profile__title",about:".profile__subtitle",avatar:".profile__avatar"}),F=new E(".popup_type_edit",(function(e){F.preLoader(!0),B.setUserData({name:e.name,about:e.profession}).then((function(e){z.setUserInfo(e),F.close()})).catch((function(e){return console.log("Ошибка - запрос редактирования профиля не выполнен: ".concat(e))})).finally((function(){F.preLoader(!1)}))}));j.addEventListener("click",(function(){F.open();var e=z.getUserInfo();R.value=e.name,x.value=e.job,U.resetValidation()})),F.setEventListeners();var N=new E(".popup_type_change-avatar",(function(e){N.preLoader(!0),B.setUserAvatar({avatar:e.avatar}).then((function(e){z.setAvatarInfo(e),N.close()})).catch((function(e){return console.log("Ошибка - запрос редактирования аватара не выполнен: ".concat(e))})).finally((function(){N.preLoader(!1)}))}));T.addEventListener("click",(function(){A.resetValidation(),N.open()})),N.setEventListeners()})();
//# sourceMappingURL=main.js.map