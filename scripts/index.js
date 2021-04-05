let popup = document.querySelector('.popup');

//const openEditPopupButton = document.querySelector('.profile__edit-button');
//let openPopupButton = document.querySelector('.profile__edit-button');
//const closeEditPopupButton = editPopup.querySelector('.popup__close-button');
//let closePopupButton = document.querySelector('.popup__close-button');

// Массив с картинками
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
]; 

const element = document.querySelector('.elements');
const rectangleItemTemplate = document.querySelector('.rectangle-item-template').content.querySelector('.rectangle');

const addCards = initialCards.forEach((item) => {
const rectangleItem = rectangleItemTemplate.cloneNode(true);
const rectangleItemText =  rectangleItem.querySelector('.rectangle__mesto-text');
const rectangleItemImage =  rectangleItem.querySelector('.rectangle__image');
const trashButton = rectangleItem.querySelector('.rectangle__trash');

rectangleItemText.textContent = item.name;
rectangleItemImage.src = item.link;
element.prepend(rectangleItem);

rectangleItem.querySelector('.rectangle__mesto-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('rectangle__mesto-like_active');
});
trashButton.addEventListener('click', () => {
    rectangleItem.remove()
});

return rectangleItem;
});

// Постянные для модальных окон
const editPopup = document.querySelector('.popup_type_edit');
const addCardPopup = document.querySelector('.popup_type_add-card');
const openImagePopup = document.querySelector('.popup_type_image');            ///////////////////

let popupOverlay = document.querySelector('.popup__overlay');
let popupContainer = popup.querySelector('.popup__container');
let popupContainerImage = popup.querySelector('.popup__container-image');
let profileTitle = document.querySelector('.profile__title');
let profileSubTitle = document.querySelector('.profile__subtitle');
let popupTitle = document.querySelector('.popup__input_text_name');
let popupSubTitle = document.querySelector('.popup__input_text_profession');
const addCardnamePlace = document.querySelector('.popup__input_text_namePlace');
const addCardlink = document.querySelector('.popup__input_text_link');

// выбираю класс с наведением
let noTransitionCloseEditPopupButton = editPopup.querySelector('.popup__close-button, .opacity-buttons');
let noTransitionCloseAddPopupButton = addCardPopup.querySelector('.popup__close-button, .opacity-buttons');

// Получите значение полей jobInput и nameInput из свойства value
// в т.ч. добавляю класс наведения при каждом открытии попапа
/*function openPopup() {
    //popup.classList.add('popup_visible');
    //noTransition.classList.add('opacity-buttons');
    //popupTitle.value = profileTitle.textContent;
    //popupSubTitle.value = profileSubTitle.textContent;
}*/
// в т.ч. удаляю класс наведения при каждом закрытии попапа для исключения задержки отображения кнопки
/*function closePopup() {
    //popup.classList.remove('popup_visible');
    //noTransition.classList.remove('opacity-buttons');
}*/

// Обработчик «отправки» формы,
function formSubmitHandler (evt) {
evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.// О том, как это делать, расскажем позже.
// Вставьте новые значения с помощью textContent
profileTitle.textContent = popupTitle.value;
profileSubTitle.textContent = popupSubTitle.value;
popup.classList.remove('popup_visible');
}

function formSubmitHandler2 (evt) {
    evt.preventDefault(); 
    //inputValueaddCardnamePlace = addCardnamePlace.value;
    //inputValueaddCardlink = addCardlink.value;
    const inputAddnamePlace = addCardnamePlace.value;
    const inputAddLink = addCardlink.value;
    const rectangleItem = rectangleItemTemplate.cloneNode(true);
    const rectangleItemText =  rectangleItem.querySelector('.rectangle__mesto-text');
    const rectangleItemImage =  rectangleItem.querySelector('.rectangle__image');
    const trashButton = rectangleItem.querySelector('.rectangle__trash');
    rectangleItemText.textContent = inputAddnamePlace;
    rectangleItemImage.src = inputAddLink;
    element.prepend(rectangleItem);
    addCardnamePlace.value = "";
    addCardlink.value = "";
    
    rectangleItem.querySelector('.rectangle__mesto-like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('rectangle__mesto-like_active');
    }); 

    trashButton.addEventListener('click', () => {
        rectangleItem.remove()
    });

    addCardPopup.classList.remove('popup_visible');
    /*const elementAddCard = {name: addCardnamePlace.value, link: addCardlink.value};
    addCardnamePlace.value = "";
    addCardlink.value = "";
    const newCard = addCards(elementAddCard);
    element.prepend(newCard);
    popup.classList.remove('popup_visible');*/
}

function fullImagePopup (event) {
    //inputValueaddCardnamePlace = addCardnamePlace.value;
    //inputValueaddCardlink = addCardlink.value;
    const infoOnClick = event.target.closest('.rectangle');
    //const rectangleItemText =  rectangleItem.querySelector('.popup__image-caption');
    const popupFullImage =  rectangleItem.querySelector('.popup__image');
    //rectangleItemText.textContent = inputAddnamePlace;
    popupFullImage.src = event.target.closest('.rectangle').src;
    /*rectangleItemImage.addEventListener('click', function (evt) {
        evt.target.img = inputAddLink.src;
    });*/
    togglePopupWindow(openImagePopup);
}
/*element.addEventListener('click', function (evt) {
    evt.target.classList.toggle('rectangle__mesto-like_active');
});*/

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupContainer.addEventListener('submit', formSubmitHandler); 
addCardPopup.addEventListener('submit', formSubmitHandler2);
openImagePopup.addEventListener('click', fullImagePopup);

// Постянные для кнопок открытия модальных окон
const openEditPopupButton = document.querySelector('.profile__edit-button');
const openAddPopupButton = document.querySelector('.profile__add-button');
const openImageButton = document.querySelector('.profile__add-button');


// Постянные для кнопок закрытия модальных окон
const closeEditPopupButton = editPopup.querySelector('.popup__close-button');
const closeAddPopupButton = addCardPopup.querySelector('.popup__close-button');
const closeImagePopupButton = openImagePopup.querySelector('.popup__close-button');

// Постянные popup image
const imagePopupImage = openImagePopup.querySelector('.popup__image');                 /////////////
const imagePopupCaption = openImagePopup.querySelector('.popup__image-caption');       /////////////

function togglePopupWindow (popup) {
    popup.classList.toggle('popup_visible');
}

openEditPopupButton.addEventListener('click', () => 
    togglePopupWindow(editPopup),
    inputAddnamePlace = addCardnamePlace.value,
    popupTitle.value = profileTitle.textContent,
    popupSubTitle.value = profileSubTitle.textContent,
);
openAddPopupButton.addEventListener('click', () => togglePopupWindow(addCardPopup));


closeEditPopupButton.addEventListener('click', () =>
    togglePopupWindow(editPopup), 
    noTransitionCloseEditPopupButton.classList.remove('opacity-buttons')
);
closeAddPopupButton.addEventListener('click', () =>
    togglePopupWindow(addCardPopup),
    noTransitionCloseAddPopupButton.classList.remove('opacity-buttons')
);

/*function createCard(data) { // {name, link:}
    //Найти тэмплэйт
    const rectangleItemTemplate = document.querySelector('.rectangle-item-template').content.querySelector('.rectangle');
    //Сколнировать
    const rectangleItem = rectangleItemTemplate.cloneNode(true);
    //Находим элементы в клонированном шаблоне
    const rectangleItemText =  rectangleItem.querySelector('.rectangle__mesto-text');
    const rectangleItemImage =  rectangleItem.querySelector('.rectangle__image');

    function ImageclickHandler(event) {
    imagePopupImage.src = data.name;
    imagePopupCaption.textContent = data.link;
    togglePopupWindow(openImagePopup)
    }
    const Image = '';
    Image.addEventListener('submit', ImageclickHandler);
}*/

//popupContainer.addEventListener('submit', createCard);


//<img class = "popup__image" src = ""/>
//<figcaption class = "popup__image-caption"></figcaption>

//togglePopupWindow(imagePopup);*/

/*console.log('вороны москвички');

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