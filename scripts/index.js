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

const popup = document.querySelector('.popup');
const element = document.querySelector('.elements');
const rectangleItemTemplate = document.querySelector('.rectangle-item-template').content.querySelector('.rectangle');

// Постянные для модальных окон
const editPopup = document.querySelector('.popup_type_edit');
const addCardPopup = document.querySelector('.popup_type_add-card');
const openImagePopup = document.querySelector('.popup_type_image');

// Постянные для кнопок открытия модальных окон
const openEditPopupButton = document.querySelector('.profile__edit-button');
const openAddPopupButton = document.querySelector('.profile__add-button');
const openImageButton = document.querySelector('.profile__add-button');

// Постянные для кнопок закрытия модальных окон
const closeEditPopupButton = editPopup.querySelector('.popup__close-button');
const closeAddPopupButton = addCardPopup.querySelector('.popup__close-button');
const closeImagePopupButton = openImagePopup.querySelector('.popup__close-button');

// Постянные popup image
const popupFullImageCaption =  document.querySelector('.popup__figure-caption');
const popupFullImage =  document.querySelector('.popup__figure-image');

// Постоянные popup'a и overlay
const popupOverlay = document.querySelector('.popup__overlay');
const popupContainer = popup.querySelector('.popup__container');
const popupContainerImage = popup.querySelector('.popup__container-forImage');
const profileTitle = document.querySelector('.profile__title');
const profileSubTitle = document.querySelector('.profile__subtitle');
const popupTitle = document.querySelector('.popup__input_text_name');
const popupSubTitle = document.querySelector('.popup__input_text_profession');
const addCardnamePlace = document.querySelector('.popup__input_text_namePlace');
const addCardlink = document.querySelector('.popup__input_text_link');

// выбираю класс с наведением
const noTransitionCloseEditPopupButton = editPopup.querySelector('.popup__close-button, .opacity-buttons');
const noTransitionCloseAddPopupButton = addCardPopup.querySelector('.popup__close-button, .opacity-buttons');

// Функция формы редактирования профиля
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileTitle.textContent = popupTitle.value;
    profileSubTitle.textContent = popupSubTitle.value;
    popup.classList.remove('popup_visible');
}

// Функция открытия по клику на картинку
/*function getFullImagePopup (event) {
    const allInfoOnClick = event.target.closest('.rectangle');
    const titleOnClick = allInfoOnClick.querySelector('.rectangle__mesto-text');
    popupFullImageCaption.textContent = titleOnClick.textContent;
    popupFullImage.src = event.target.src;
    togglePopupWindow(openImagePopup);
};*/

/*function getFullImagePopup (image) {
    rectangle__image.addEventListener('click', () => {
    popupFullImageCaption = image.alt;
    popupFullImage = image.src;
    togglePopupWindow(openImagePopup);
    });
}*/


// Функция like
function likeButton (evt) {
    evt.target.classList.toggle('rectangle__mesto-like_active');
};
////////////////////////////////////////////////////////////////////////////////////////////////////////

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
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
/*function createNewCard(name, link) {
    const inputAddnamePlace = addCardnamePlace.value;
    const inputAddLink = addCardlink.value
    const rectangleItem = rectangleItemTemplate.cloneNode(true);
    const rectangleItemText =  rectangleItem.querySelector('.rectangle__mesto-text');
    const rectangleItemImage =  rectangleItem.querySelector('.rectangle__image');
    const trashButton = rectangleItem.querySelector('.rectangle__trash');
    
    rectangleItemText.textContent = item.name;
    rectangleItemImage.src = item.link;
    rectangleItemImage.alt = item.name;
    element.prepend(rectangleItem);

    /*rectangleItemText.textContent = inputAddnamePlace;
    rectangleItemImage.src = inputAddLink;
    rectangleItemImage.alt = inputAddnamePlace;
    element.prepend(rectangleItem);*/

    /*rectangleItemImage.addEventListener ('click', getFullImagePopup);
    rectangleItem.querySelector('.rectangle__mesto-like').addEventListener('click', likeButton);////////
    trashButton.addEventListener('click', () => {///////////////////////////////////////////////////////
        rectangleItem.remove()
    });
    element.prepend(rectangleItem);
    return rectangleItem;
}*/

/*const newCard = createNewCard(inputAddnamePlace, inputAddLink);
element.prepend(newCard);*/

//Добавление клонированных карточек с данными из массива
initialCards.forEach((item) => {
    const generateCard = createNewCard(item);
    element.prepend(generateCard);
});

// Функция формы добавления новой карточки
function formSubmitHandlerAddCard (evt) {
    evt.preventDefault(); 
    inputAddnamePlace = addCardnamePlace.value;
    inputAddLink = addCardlink.value;
    //const cardItems = {name: inputAddnamePlace, link: inputAddLink};
    const newCard = createNewCard(inputAddnamePlace, inputAddLink);
    //const newCard = createNewCard(cardItems);
    
    addCardnamePlace.value = "";
    addCardlink.value = "";
    element.prepend(newCard);
    togglePopupWindow(addCardPopup);
}

//Обработчики форм редактирования профиля и добавления новой карточки
popupContainer.addEventListener('submit', formSubmitHandler); 
addCardPopup.addEventListener('submit', formSubmitHandlerAddCard);



// Функция открытия/закрытия попапа
function togglePopupWindow (popup) {
    popup.classList.toggle('popup_visible');
}

//Открытие/закртытие карточкек редактирования профиля/добавления карточки, с функцией 
openEditPopupButton.addEventListener('click', () => 
    togglePopupWindow(editPopup),
    //inputAddnamePlace = addCardnamePlace.value,
    popupTitle.value = profileTitle.textContent,
    popupSubTitle.value = profileSubTitle.textContent,
);
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