import {Card} from '../components/Card.js';
import {validationMassive} from '../components/FormValidator.js';
import {FormValidator} from '../components/FormValidator.js';
import '../pages/index.css'; // добавили импорт главного файла стилей
import {initialCards} from '../components/initialCards.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';

const element = document.querySelector('.elements');


// Постянные для модальных окон
const editPopup = document.querySelector('.popup_type_edit');
const addCardPopup = document.querySelector('.popup_type_add-card');

// Постянные для кнопок открытия модальных окон
const openEditPopupButton = document.querySelector('.profile__edit-button');
const openAddPopupButton = document.querySelector('.profile__add-button');

// Постоянные popup'a 
const popupTitle = document.querySelector('.popup__input_text_name');
const popupSubTitle = document.querySelector('.popup__input_text_profession');

const editPopupValidator = new FormValidator (validationMassive, editPopup);
editPopupValidator.enableValidation();

const addCardPopupValidator = new FormValidator (validationMassive, addCardPopup);
addCardPopupValidator.enableValidation();

const popupWithImage = new PopupWithImage ('.popup_type_image');
const openPopupWithImage = popupWithImage.open.bind(popupWithImage);
popupWithImage.setEventListeners();

//функция создания новой карточки 
function createCard (data, templateSelector) {
    const card = new Card (data, templateSelector, openPopupWithImage);
    const cardElement = card.generateCard();
    return cardElement
}

// отрисовка элементов на странице
const cardList = new Section({
    items: initialCards,
    renderer: (data) => {
        const oneCard = createCard(data, '.rectangle-item-template');
        cardList.addItem(oneCard);
        },
    },
    '.elements'
);

cardList.renderItems();

function addCardSubmitHandler(data) {
    const card = new Card(data, '.rectangle-item-template', openPopupWithImage); 
    const cardElement  = card.generateCard();
    element.prepend(cardElement)
}

const popupWithForm = new PopupWithForm ('.popup_type_add-card', addCardSubmitHandler);
openAddPopupButton.addEventListener('click', () => popupWithForm.open());
popupWithForm.setEventListeners();

// управление отображением информации о пользователе на странице
const userInfo = new UserInfo ({name: '.profile__title', job: '.profile__subtitle'});
const editProfilePopup = new PopupWithForm ('.popup_type_edit', editFormSubmitHandler);
openEditPopupButton.addEventListener('click', () => {
    editProfilePopup.open();
    const info = userInfo.getUserInfo();
    popupTitle.value = info.name;
    popupSubTitle.value = info.job;
});

function editFormSubmitHandler (data) { // editFormSubmitHandler = handleFormSubmit из PopupWithForm
    userInfo.setUserInfo(data);
}

editProfilePopup.setEventListeners();