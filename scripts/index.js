console.log('вороны москвички');

let popup = document.querySelector('.popup');
console.log(popup);
let openPopupButton = document.querySelector('.profile__edit-button');
console.log(openPopupButton);
let closePopupButton = document.querySelector('.popup__close-button');
console.log(closePopupButton);
let popupOverlay = document.querySelector('.popup__overlay');
console.log(popupOverlay);
//let closeSubmitButton = document.querySelector('.popup__button');
//console.log(closeSubmitButton);
let popupContainer = popup.querySelector('.popup__container');
console.log(popupContainer);
let profileTitle = document.querySelector('.profile__title');
console.log(profileTitle.textContent);
let profileSubTitle = document.querySelector('.profile__subtitle');
console.log(profileSubTitle.textContent);
//let popupInput = popup.querySelector('.popup__information');
//console.log(popupInput);
let popupTitle = document.querySelector('.popup__input_text_name');
let popupSubTitle = document.querySelector('.popup__input_text_profession');
// выбираю класс с наведением
let noTransition = document.querySelector('.popup__close-button, .opacity-buttons');
console.log('noTransition');

// Получите значение полей jobInput и nameInput из свойства value
// в т.ч. добавляю класс наведения при каждом открытии попапа
function openPopup() {
    popup.classList.add('popup_visible');
    noTransition.classList.add('opacity-buttons');
    popupTitle.value = profileTitle.textContent;
    popupSubTitle.value = profileSubTitle.textContent;
}
// в т.ч. удаляю класс наведения при каждом закрытии попапа для исключения задержки отображения кнопки
function closePopup() {
    popup.classList.remove('popup_visible');
    noTransition.classList.remove('opacity-buttons');
}

// Обработчик «отправки» формы,
function formSubmitHandler (evt) {
evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.// О том, как это делать, расскажем позже.
// Вставьте новые значения с помощью textContent
profileTitle.textContent = popupTitle.value;
profileSubTitle.textContent = popupSubTitle.value;
popup.classList.remove('popup_visible');
}
    
openPopupButton.addEventListener('click', openPopup);
console.log('OpenClick!');
closePopupButton.addEventListener('click', closePopup);
console.log('CloseClick!');
popupOverlay.addEventListener('click', closePopup);
console.log('CloseClick!');
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupContainer.addEventListener('submit', formSubmitHandler); 
//closeSubmitButton.addEventListener('click', closePopup);
//console.log('CloseClick!');
//openPopupButton.addEventListener('click', addPopupInfo);


/*function addPopupInfo() {
    popupTitle.value = profileTitle.textContent;
    popupSubTitle.value = profileSubTitle.textContent;
}*/

/*function addPopupInfo() {
    PopupInput.innerHTML = `
    <div class="popup__close-button"></div>
    <h3 class="popup__name">Редактировать профиль</h3>
    <p class="popup__title">${ProfileTitle.textContent}</p>
    <p class="popup__subtitle">${ProfileSubTitle.textContent}</p>
    <button class="popup__button">Сохранить</button>
    `;
}*/