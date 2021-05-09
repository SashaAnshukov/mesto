import {Card} from './Card.js';
import {validationMassive} from './FormValidator.js';
import {FormValidator} from './FormValidator.js';

const element = document.querySelector('.elements');
//const rectangleItemTemplate = document.querySelector('.rectangle-item-template').content.querySelector('.rectangle');
const EscapeKey = 'Escape';

// Постянные для модальных окон
const editPopup = document.querySelector('.popup_type_edit');
const addCardPopup = document.querySelector('.popup_type_add-card');
const openImagePopup = document.querySelector('.popup_type_image');

// Постянные для кнопок открытия модальных окон
const openEditPopupButton = document.querySelector('.profile__edit-button');
const openAddPopupButton = document.querySelector('.profile__add-button');
//const openImageButton = document.querySelector('.profile__add-button');

// Постянные для кнопок закрытия модальных окон
const closeEditPopupButton = editPopup.querySelector('.popup__close-button');
const closeAddPopupButton = addCardPopup.querySelector('.popup__close-button');
const closeImagePopupButton = openImagePopup.querySelector('.popup__close-button');

// Постянные popup image
const popupFullImageCaption =  document.querySelector('.popup__figure-caption');
const popupFullImage =  document.querySelector('.popup__figure-image');

// Постоянные popup'a 
//const popupOverlay = document.querySelector('.popup__overlay');
const popupEditContainer = editPopup.querySelector('.popup__container');
const popupAddContainer = addCardPopup.querySelector('.popup__container');
const popupContainerImage = openImagePopup.querySelector('.popup__container-forImage');
const profileTitle = document.querySelector('.profile__title');
const profileSubTitle = document.querySelector('.profile__subtitle');
const popupTitle = document.querySelector('.popup__input_text_name');
const popupSubTitle = document.querySelector('.popup__input_text_profession');
const addCardnamePlace = document.querySelector('.popup__input_text_namePlace');
const addCardlink = document.querySelector('.popup__input_text_link');
const buttonAddCard = document.querySelector('[aria-label="createButton"]');

// выбираю класс с наведением
const noTransitionCloseEditPopupButton = editPopup.querySelector('.popup__close-button, .opacity-buttons');
const noTransitionCloseAddPopupButton = addCardPopup.querySelector('.popup__close-button, .opacity-buttons');

const editPopupValidator = new FormValidator (validationMassive, editPopup);
editPopupValidator.enableValidation();

const addCardPopupValidator= new FormValidator (validationMassive, addCardPopup);
addCardPopupValidator.enableValidation();

// Функция формы редактирования профиля
function submitProfileForm (evt) {
    evt.preventDefault();
    profileTitle.textContent = popupTitle.value;
    profileSubTitle.textContent = popupSubTitle.value;
    togglePopupWindow(editPopup);
}

/*// Функция like
function likeButton (evt) {
    evt.target.classList.toggle('rectangle__mesto-like_active');
};

function createNewCard(item) {
    const rectangleItem = rectangleItemTemplate.cloneNode(true);
    const rectangleItemText =  rectangleItem.querySelector('.rectangle__mesto-text');
    const rectangleItemImage =  rectangleItem.querySelector('.rectangle__image');
    const trashButton = rectangleItem.querySelector('.rectangle__trash');
    rectangleItemText.textContent = item.name;
    rectangleItemImage.src = item.link;
    rectangleItemImage.alt = item.name;
    rectangleItem.querySelector('.rectangle__mesto-like').addEventListener('click', likeButton);
    trashButton.addEventListener('click', () => {
        rectangleItem.remove()
    });
    // Функция открытия по клику на картинку
    rectangleItemImage.addEventListener ('click', () => {
        popupFullImageCaption.textContent = rectangleItemImage.alt;
        popupFullImage.src = rectangleItemImage.src;
        togglePopupWindow(openImagePopup);
    });
    return rectangleItem;
}*/

//Добавление клонированных карточек с данными из массива
initialCards.forEach((item) => {
    /*const generateCard = createNewCard(item);
    element.prepend(generateCard);*/
    const cardElement = createCard (item);
    element.prepend(cardElement);
    /*element.addEventListener ('click', () => {
        togglePopupWindow(openImagePopup);
    });;*/
});

//Функция деактивации кнопки создания карточки
function setButtonDisabled (buttonAddCard) {
    console.log (buttonAddCard);
    buttonAddCard.setAttribute('disabled', true);
}

// Функция формы добавления новой карточки
function submitAddCardForm (evt) {
    evt.preventDefault(); 
    const inputAddnamePlace = addCardnamePlace.value;
    const inputAddLink = addCardlink.value;
    const cardItems = {name: inputAddnamePlace, link: inputAddLink};
    const newCard = createCard (cardItems);
    addCardnamePlace.value = "";
    addCardlink.value = "";
    element.prepend(newCard);
    setButtonDisabled(buttonAddCard);
    togglePopupWindow(addCardPopup);
}

//Обработчики форм редактирования профиля и добавления новой карточки
popupEditContainer.addEventListener('submit', submitProfileForm);

//popupAddContainer.addEventListener('submit', formSubmitHandler); 
popupAddContainer.addEventListener('submit', submitAddCardForm);

// Функция открытия/закрытия попапа cо слушателями закрытия по overlay и Esc
function togglePopupWindow (popup) {
    popup.classList.toggle('popup_visible');
    if (popup.classList.contains('popup_visible')) {
        document.addEventListener('click', closePopupOnOverlay);
        document.addEventListener('keydown', closePopupOnEcs);
    } else {
        document.removeEventListener('click', closePopupOnOverlay);
        document.removeEventListener('keydown', closePopupOnEcs);
    }
}

//Открытие/закртытие карточкек редактирования профиля/добавления карточки, с функцией 
openEditPopupButton.addEventListener('click', () => {
    togglePopupWindow(editPopup);
    popupTitle.value = profileTitle.textContent;
    popupSubTitle.value = profileSubTitle.textContent;
});
openAddPopupButton.addEventListener('click', () => togglePopupWindow(addCardPopup));

//Слушатели кнопок закрытия
closeEditPopupButton.addEventListener('click', () =>
    togglePopupWindow(editPopup), 
    noTransitionCloseEditPopupButton.classList.remove('opacity-buttons')
);
closeAddPopupButton.addEventListener('click', () =>
    togglePopupWindow(addCardPopup),
    noTransitionCloseAddPopupButton.classList.remove('opacity-buttons')
);
closeImagePopupButton.addEventListener('click', () =>
    togglePopupWindow(openImagePopup)
);

/*const formPopup = document.querySelector('.popup__form');
const popupOverlays = document.querySelectorAll('.popup__overlay');
console.log(popupOverlays);*/

//Функция закрытия попапа по overlay
function closePopupOnOverlay (event) {
    const getPopupOverlayOnClick = event.target.closest('.popup__overlay');
    //const PopupOnClick = allInfoOnClick.querySelector('.popup_form');
    if (event.target == getPopupOverlayOnClick) {
        console.log(event.target);
        const openedPopup = document.querySelector('.popup_visible');
        togglePopupWindow(openedPopup);
    };
};

//Функция закрытия попапа по Esc
function closePopupOnEcs (event) {
    if (event.key == EscapeKey) {
        console.log(event.key);
        const openedPopup = document.querySelector('.popup_visible');
        togglePopupWindow(openedPopup);
    };
}

// Функция открытия по клику на картинку
function handleCardClick (name, link) {
    //устанавливаем ссылку
    popupFullImage.src = link;
    //устанавливаем подпись картинке
    popupFullImageCaption.textContent = name;
    popupFullImage.alt = name;
    //открываем попап универсальной функцией, которая навешивает обработчик Escape внутри себя
    togglePopupWindow(openImagePopup);
}

//функция создания новой карточки 
function createCard (data) {
    const card = new Card (data, '.rectangle-item-template', handleCardClick);
    const cardElement  = card.generateCard();
    return cardElement
}
