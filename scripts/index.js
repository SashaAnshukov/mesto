//.log('вороны москвички');

let popup = document.querySelector('.popup');
//console.log(popup);

let openPopupButton = document.querySelector('.profile__edit-button');
//console.log(openPopupButton);
let closePopupButton = document.querySelector('.popup__close-button');
//console.log(closePopupButton);
let PopupOverlay = document.querySelector('.popup__overlay');
//console.log(PopupOverlay);
let closeSubmitButton = document.querySelector('.popup__button');
//console.log(closeSubmitButton);

function openPopup() {
    popup.classList.add('popup_visible');
}
function closePopup() {
    popup.classList.remove('popup_visible');
}

openPopupButton.addEventListener('click', openPopup);
//console.log('OpenClick!');
closePopupButton.addEventListener('click', closePopup);
//console.log('CloseClick!');
PopupOverlay.addEventListener('click', closePopup);
//console.log('CloseClick!');
closeSubmitButton.addEventListener('click', closePopup);
//console.log('CloseClick!');


let PopupContainer = popup.querySelector('.popup__container');
//console.log(PopupContainer);

let ProfileTitle = document.querySelector('.profile__title');
//console.log(ProfileTitle.textContent);
let ProfileSubTitle = document.querySelector('.profile__subtitle');
//console.log(ProfileSubTitle.textContent);

let PopupInput = popup.querySelector('.popup__input');
//console.log(PopupInput);

function addPopupInfo() {
    PopupTitle.value = ProfileTitle.textContent;
    PopupSubTitle.value = ProfileSubTitle.textContent;
}

openPopupButton.addEventListener('click', addPopupInfo);

    // Получите значение полей jobInput и nameInput из свойства value
    let  PopupTitle = document.querySelector('.popup__title');
    let  PopupSubTitle = document.querySelector('.popup__subtitle');
    
// Обработчик «отправки» формы,
    function formSubmitHandler (evt) {
    
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Вставьте новые значения с помощью textContent
    ProfileTitle.textContent = PopupTitle.value;
    ProfileSubTitle.textContent = PopupSubTitle.value;
}
    
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
PopupContainer.addEventListener('submit', formSubmitHandler); 


/*function addPopupInfo() {
    PopupInput.innerHTML = `
    <div class="popup__close-button"></div>
    <h3 class="popup__name">Редактировать профиль</h3>
    <p class="popup__title">${ProfileTitle.textContent}</p>
    <p class="popup__subtitle">${ProfileSubTitle.textContent}</p>
    <button class="popup__button">Сохранить</button>
    `;
}*/