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
//import { PopupConfirmDelete } from '../components/PopupConfirmDelete.js';

const element = document.querySelector('.elements');


// Постянные для модальных окон
const editPopup = document.querySelector('.popup_type_edit');
const addCardPopup = document.querySelector('.popup_type_add-card');
const addAatarPopup = document.querySelector('.popup_type_change-avatar');

// Постянные для кнопок открытия модальных окон
const openEditPopupButton = document.querySelector('.profile__edit-button');
const openAddPopupButton = document.querySelector('.profile__add-button');
const openAvatarPopupButton = document.querySelector('.profile__avatar-button');

// Постоянные popup'a 
const popupTitle = document.querySelector('.popup__input_text_name');
const popupSubTitle = document.querySelector('.popup__input_text_profession');

//const trashButton = document.querySelector('.rectangle__trash');

const editPopupValidator = new FormValidator (validationMassive, editPopup);
editPopupValidator.enableValidation();

const addCardPopupValidator = new FormValidator (validationMassive, addCardPopup);
addCardPopupValidator.enableValidation();

const addAatrPopupValidator = new FormValidator (validationMassive, addAatarPopup);
addAatrPopupValidator.enableValidation();

/*const popupWithImage = new PopupWithImage ('.popup_type_image');
const openPopupWithImage = popupWithImage.open.bind(popupWithImage);
popupWithImage.setEventListeners();*/

const api = new Api({
    adress: 'https://mesto.nomoreparties.co/v1/cohort-26',
    token:'86724e9f-206a-43a9-ab92-a5e8d301d078'
    }
);

//6, 7 удаление карточки
const popupConfirmDelete = new PopupWithForm ('.popup_type_confirm');
popupConfirmDelete.setEventListeners();

function confirmDelete (card) {
    //функция подтверждения удаленя каточки
    popupConfirmDelete.setFormAction(handleConfirmDelete);
    function handleConfirmDelete () {
        popupConfirmDelete.preLoader(true);
        api.deleteCard(card.cardId)
            .then((response) => {
            card.handleTrash();
            popupConfirmDelete.close()
            })
            .catch (event => console.log(`Ошибка удаления карточки: ${event}`))
            .finally(() => {
                popupConfirmDelete.preLoader(false);
            })
    }

    popupConfirmDelete.open();
}

/*const popupConfirmDelete = new PopupWithForm ('.popup_type_confirm', (card) => {
    api.deleteCard(card.cardId)
            .then((response) => {
            card.handleTrash();
            popupConfirmDelete.close()
            })
            .catch (event => console.log(`Ошибка удаления карточки: ${event}`));
        popupConfirmDelete.open();
    });
        
popupConfirmDelete.setEventListeners();*/

//5, 8 likes
function handleCardLike (card) {
    if (card.isLiked) {
        api.deleteLikeCard(card.cardId)
        .then(res => {
            //console.log('response', res);
            card.setLikesInfo(res);    
        })
        .catch (event => console.log(`Ошибка удаления лайка: ${event}`));
    }
    else {
        api.setLikeCard(card.cardId)
        .then((res) => {
            //console.log('response', res);
            card.setLikesInfo(res);
        })
        .catch (event => console.log(`Ошибка постановки лайка: ${event}`))
    } 
}

api.getFullPageInfo()
    .then((response) => {
        const cardsData = response[0];
        console.log(cardsData);
        const userData = response[1];
        console.log(userData);
        const currentUserId = userData._id; //мой id
        userInfo.setUserInfo(userData);
        userInfo.setAvatarInfo(userData);

        // попап fullImage
        const popupWithImage = new PopupWithImage ('.popup_type_image');
        const openPopupWithImage = popupWithImage.open.bind(popupWithImage);
        popupWithImage.setEventListeners();

        
        //функция создания новой карточки 
        function createCard (data, templateSelector) {
        const card = new Card (data, currentUserId,
            templateSelector, openPopupWithImage, confirmDelete, handleCardLike
        );
        const cardElement = card.generateCard();
        return cardElement
        }

        // отрисовка элементов на странице
        const cardList = new Section({
            items: cardsData,
            renderer: (data) => {
                const oneCard = createCard(data, '.rectangle-item-template');
                cardList.addItem(oneCard);
            },
            },
        '.elements'
        );
    
        cardList.renderItems();;
        
        //добавление карточки
        const popupWithForm = new PopupWithForm ('.popup_type_add-card', (data) => {
            popupWithForm.preLoader(true); // preloader на кнопку при сабмите
            api.setMyCard({name:data.name, link:data.link})
                .then((data) => {
                    /*const card = new Card(
                        data, currentUserId,
                        '.rectangle-item-template', openPopupWithImage, confirmDelete, handleCardLike
                    );*/
                    const card = createCard(data, '.rectangle-item-template');
                    cardList.prepend(card);

                    /*const cardElement  = card.generateCard();
                    cardList.prepend(cardElement);*/
                    popupWithForm.close()
                })
                .catch (event => console.log(`Ошибка добавления карточки: ${event}`))
                .finally(() => {
                    popupWithForm.preLoader(false);
                })
        });    
        
        openAddPopupButton.addEventListener('click', () => {
            addCardPopupValidator.resetValidation();
            popupWithForm.open();
        });
        popupWithForm.setEventListeners();
    })
    .catch (event => console.log(`Ошибка получения данных пользователя: ${event}`))

// 1. Загрузка информации о пользователе с сервера

// 2. Управление отображением информации о пользователе на странице
const userInfo = new UserInfo ({name: '.profile__title', about: '.profile__subtitle', avatar: '.profile__avatar'});


// редактирование профиля
const editProfilePopup = new PopupWithForm ('.popup_type_edit', (data) => {
    editProfilePopup.preLoader(true); // preloader на кнопку при сабмите
    api.setUserData({name:data.name, about:data.profession})
        .then((response) => {
            userInfo.setUserInfo(response);
            editProfilePopup.close()
        })
        .catch (event => console.log(`Ошибка - запрос редактирования профиля не выполнен: ${event}`))
        .finally(() => {
            editProfilePopup.preLoader(false);
        })
});

openEditPopupButton.addEventListener('click', () => {
    editProfilePopup.open();
    const info = userInfo.getUserInfo();
    popupTitle.value = info.name;
    popupSubTitle.value = info.job;
});

editProfilePopup.setEventListeners();

// редактирование аватара
const changeAvatarPopup = new PopupWithForm ('.popup_type_change-avatar', (data) => {
    changeAvatarPopup.preLoader(true); // preloader на кнопку при сабмите
    api.setUserAvatar({avatar: data.avatar})
        .then((response) => {
            userInfo.setAvatarInfo(response);
            changeAvatarPopup.close()
        })
        .catch (event => console.log(`Ошибка - запрос редактирования аватара не выполнен: ${event}`))
        .finally(() => {
            changeAvatarPopup.preLoader(false);
        })
});

openAvatarPopupButton.addEventListener('click', () => {
    addCardPopupValidator.resetValidation();
    changeAvatarPopup.open();
});

changeAvatarPopup.setEventListeners();