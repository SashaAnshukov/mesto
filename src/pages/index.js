import {Card} from '../components/Card.js';
import {validationMassive} from '../components/FormValidator.js';
import {FormValidator} from '../components/FormValidator.js';
import '../pages/index.css'; // добавили импорт главного файла стилей
//import {initialCards} from '../components/initialCards.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import {Api} from '../components/Api.js';

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

/*const popupWithImage = new PopupWithImage ('.popup_type_image');
const openPopupWithImage = popupWithImage.open.bind(popupWithImage);
popupWithImage.setEventListeners();*/

const api = new Api({
    adress: 'https://mesto.nomoreparties.co/v1/cohort-26',
    token:'86724e9f-206a-43a9-ab92-a5e8d301d078'
    }
);

// 1. Загрузка информации о пользователе с сервера
api.getUserData()
    .then((response) => {
        console.log(response);
        userInfo.setUserInfo(response)
    })

// 2. Управление отображением информации о пользователе на странице
const userInfo = new UserInfo ({name: '.profile__title', about: '.profile__subtitle'});

function editFormSubmitHandler (data) { // editFormSubmitHandler = handleFormSubmit из PopupWithForm
    api.setUserData({name:data.name, about:data.profession})
    .then((response) => {
        console.log(response);
        userInfo.setUserInfo(response)
    })
    .catch (event => console.log(`Ошибка - запрос редактирования профиля не выполнен: ${event}`))
}

const editProfilePopup = new PopupWithForm ('.popup_type_edit', editFormSubmitHandler);
openEditPopupButton.addEventListener('click', () => {
    editProfilePopup.open();
    const info = userInfo.getUserInfo();
    popupTitle.value = info.name;
    popupSubTitle.value = info.job;
});

editProfilePopup.setEventListeners();

const getInitialCards = api.getInitialCards();

const cardsdata = getInitialCards.
    then((response) => {
        const InitialCards = response.map(response => ({name:response.name, link:response.link}));
        return InitialCards
    })

//console.log(cardsdata);

const allcardsdata = Promise.resolve(cardsdata)
    .then(function (value) {
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
            items: value,
            renderer: (data) => {
                const oneCard = createCard(data, '.rectangle-item-template');
                cardList.addItem(oneCard);
            },
            },
        '.elements'
        );
    
        cardList.renderItems();;

        function addCardSubmitHandler(data) {

            const dataCard =
                    api.setMyCard({name:data.name, link:data.link})
                        .then((data) => {
                            ({name:data.name, link:data.link})
                            })
                        .catch (event => console.log(`Ошибка - Добавление новой карточки не выплнено: ${event}`))
            
            const card = new Card(dataCard, '.rectangle-item-template',openPopupWithImage); 
            const cardElement  = card.generateCard();
            element.prepend(cardElement)
        }
        
        const popupWithForm = new PopupWithForm ('.popup_type_add-card', addCardSubmitHandler);
        openAddPopupButton.addEventListener('click', () => popupWithForm.open());
        popupWithForm.setEventListeners();

    });

//console.log(allcardsdata);

/*api.getFullPageInfo()
    .then(([cardsData, userData]) => {
        const currentUserId = userData._id; //мой id
        return newUserValues.setUserInfo(userData)
    })
    .catch (event => console.log(`Ошибка получения данных пользователя: ${event}`))
    

// функция счётика лайков апи
function likeCard (card) {
    api.like(card.getId(), card.getIsLiked())
    .then(res => {
        card.updateLikesInfo(res.likes)
    });
}

//подтверждение удалениякарточки
function
const popupConfirmDelete = new PopupConfirmDelete ('.popup_type_add-card', addCardSubmitHandler);*/





