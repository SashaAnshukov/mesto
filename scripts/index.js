let popup = document.querySelector('.popup');
let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__close-button');
let popupOverlay = document.querySelector('.popup__overlay');
let popupContainer = popup.querySelector('.popup__container');
let profileTitle = document.querySelector('.profile__title');
let profileSubTitle = document.querySelector('.profile__subtitle');
let popupTitle = document.querySelector('.popup__input_text_name');
let popupSubTitle = document.querySelector('.popup__input_text_profession');
// выбираю класс с наведением
let noTransition = document.querySelector('.popup__close-button, .opacity-buttons');

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
closePopupButton.addEventListener('click', closePopup);
popupOverlay.addEventListener('click', closePopup);

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupContainer.addEventListener('submit', formSubmitHandler); 
