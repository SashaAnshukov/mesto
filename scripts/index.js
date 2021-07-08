console.log('Hello, World!')
import {Card} from './Card.js';
import {validationMassive} from './FormValidator.js';
import {FormValidator} from './FormValidator.js';
//import '../pages/index.css'; // добавили импорт главного файла стилей
import {initialCards} from './initialCards.js';
import {PopupWithImage} from './PopupWithImage.js';
import Section from './Section.js';
import {PopupWithForm} from './PopupWithForm.js';
import {UserInfo} from './UserInfo.js';

const element = document.querySelector('.elements');
//const rectangleItemTemplate = document.querySelector('.rectangle-item-template').content.querySelector('.rectangle');
//const EscapeKey = 'Escape';

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

const addCardPopupValidator = new FormValidator (validationMassive, addCardPopup);
addCardPopupValidator.enableValidation();

const popupWithImage = new PopupWithImage ('.popup_type_image');
const openPopupWithImage = popupWithImage.handleCardClick.bind(popupWithImage);
popupWithImage.setEventListeners();

//функция создания новой карточки 
function createCard (data, templateSelector) {
    const card = new Card (data, templateSelector, openPopupWithImage);
    const cardElement = card.generateCard();
    return cardElement
    //list.prepend(cardElement);
}

const cardList = new Section({
    item: initialCards,
    renderer: (item) => {
        //const card = new Card (item, '.rectangle-item-template', openPopupWithImage._handleCardClick.bind(openPopupWithImage));
        const oneCard = createCard(item, '.rectangle-item-template');
        //const cardElement  = card.generateCard();
        //initialCards.addItem(createCard(data));
        cardList.addItem(oneCard);
    },
    },
    '.elements'
);

cardList.renderItems();

function addCardSubmitHandler(data) {
    const card = new Card(data, '.rectangle-item-template', openPopupWithImage); // см. 7 спринт
    const cardElement  = card.generateCard();
    element.prepend(cardElement)
}

const popupWithForm = new PopupWithForm ('.popup_type_add-card', addCardSubmitHandler);
openAddPopupButton.addEventListener('click', () => popupWithForm.toggle());
popupWithForm.setEventListeners();


const userInfo = new UserInfo ({name: '.profile__title', job: '.profile__subtitle'});
const editProfilePopup = new PopupWithForm ('.popup_type_edit', editFormSubmitHandler);
openEditPopupButton.addEventListener('click', () => {
    editProfilePopup.toggle();
    const info = userInfo.getUserInfo();
    console.log (info);
    popupTitle.value = info.name;
    popupSubTitle.value = info.job;
});


function editFormSubmitHandler (data) { // editFormSubmitHandler = handleFormSubmit из PopupWithForm
    userInfo.setUserInfo(data);
}

editProfilePopup.setEventListeners();


// Функция открытия по клику на картинку
//function handleCardClick (namePopup, linkPopup) {
    /*//устанавливаем ссылку
    popupFullImage.src = link;
    //устанавливаем подпись картинке
    popupFullImageCaption.textContent = name;
    popupFullImage.alt = name;
    //открываем попап универсальной функцией, которая навешивает обработчик Escape внутри себя
    togglePopupWindow(openImagePopup);*/
    //openPopupWithImage.open(namePopup, linkPopup);
    //openPopupWithImage.setEventListeners();
//}

//Добавление клонированных карточек с данными из массива
/*initialCards.forEach((item) => {
    /*const generateCard = createNewCard(item);
    element.prepend(generateCard);*/
    /*const cardElement = cardList (item);
    element.prepend(cardElement);*/
    /*element.addEventListener ('click', () => {
        togglePopupWindow(openImagePopup);
    });;*/
/*});*/

// Функция формы редактирования профиля
/*function submitProfileForm (evt) {
    evt.preventDefault();
    profileTitle.textContent = popupTitle.value;
    profileSubTitle.textContent = popupSubTitle.value;
    togglePopupWindow(editPopup);
}

// Функция like
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

//Функция деактивации кнопки создания карточки
/*function setButtonDisabled (buttonAddCard) {
    console.log (buttonAddCard);
    buttonAddCard.setAttribute('disabled', true);
}*/

// Функция формы добавления новой карточки
/*function submitAddCardForm (evt) {
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
popupAddContainer.addEventListener('submit', submitAddCardForm);*/

// Функция открытия/закрытия попапа cо слушателями закрытия по overlay и Esc
/*function togglePopupWindow (popup) {
    popup.classList.toggle('popup_visible');
    if (popup.classList.contains('popup_visible')) {
        document.addEventListener('click', closePopupOnOverlay);
        document.addEventListener('keydown', closePopupOnEcs);
    } else {
        document.removeEventListener('click', closePopupOnOverlay);
        document.removeEventListener('keydown', closePopupOnEcs);
    }
}*/

//Открытие/закртытие карточкек редактирования профиля/добавления карточки, с функцией 
/*openEditPopupButton.addEventListener('click', () => {
    togglePopupWindow(editPopup);
    popupTitle.value = profileTitle.textContent;
    popupSubTitle.value = profileSubTitle.textContent;
});
openAddPopupButton.addEventListener('click', () => togglePopupWindow(addCardPopup));*/

//Слушатели кнопок закрытия
/*closeEditPopupButton.addEventListener('click', () =>
    togglePopupWindow(editPopup), 
    noTransitionCloseEditPopupButton.classList.remove('opacity-buttons')
);
closeAddPopupButton.addEventListener('click', () =>
    togglePopupWindow(addCardPopup),
    noTransitionCloseAddPopupButton.classList.remove('opacity-buttons')
);*/
/*closeImagePopupButton.addEventListener('click', () =>
    togglePopupWindow(openImagePopup)
);*/

/*const formPopup = document.querySelector('.popup__form');
const popupOverlays = document.querySelectorAll('.popup__overlay');
console.log(popupOverlays);*/

//Функция закрытия попапа по overlay
/*function closePopupOnOverlay (event) {
    const getPopupOverlayOnClick = event.target.closest('.popup__overlay');
    //const PopupOnClick = allInfoOnClick.querySelector('.popup_form');
    if (event.target == getPopupOverlayOnClick) {
        console.log(event.target);
        const openedPopup = document.querySelector('.popup_visible');
        togglePopupWindow(openedPopup);
    };
};*/

//Функция закрытия попапа по Esc
/*function closePopupOnEcs (event) {
    if (event.key == EscapeKey) {
        console.log(event.key);
        const openedPopup = document.querySelector('.popup_visible');
        togglePopupWindow(openedPopup);
    };
}*/






