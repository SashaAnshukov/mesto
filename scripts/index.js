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

//const popup = document.querySelector('.popup');
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
const popupEditContainer = editPopup.querySelector('.popup__container');
const popupAddContainer = addCardPopup.querySelector('.popup__container');
const popupContainerImage = openImagePopup.querySelector('.popup__container-forImage');
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
    togglePopupWindow(editPopup);
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
    rectangleItem.querySelector('.rectangle__mesto-like').addEventListener('click', likeButton);
    trashButton.addEventListener('click', () => {
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
    const inputAddnamePlace = addCardnamePlace.value;
    const inputAddLink = addCardlink.value;
    const cardItems = {name: inputAddnamePlace, link: inputAddLink};
    //const newCard = createNewCard(inputAddnamePlace, inputAddLink);
    const newCard = createNewCard(cardItems);
    
    addCardnamePlace.value = "";
    addCardlink.value = "";
    element.prepend(newCard);
    togglePopupWindow(addCardPopup);
}

//Обработчики форм редактирования профиля и добавления новой карточки
popupEditContainer.addEventListener('submit', formSubmitHandler); 
//popupAddContainer.addEventListener('submit', formSubmitHandler); 
popupAddContainer.addEventListener('submit', formSubmitHandlerAddCard);

// Функция открытия/закрытия попапа
function togglePopupWindow (popup) {
    popup.classList.toggle('popup_visible');
}

//Открытие/закртытие карточкек редактирования профиля/добавления карточки, с функцией 
openEditPopupButton.addEventListener('click', () => 
    togglePopupWindow(editPopup),
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

const formPopup = document.querySelector('.popup__form');
const popupOverlays = document.querySelectorAll('.popup__overlay');
console.log(popupOverlays);

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

document.addEventListener('click', closePopupOnOverlay);
//addCardPopup.addEventListener('click', closePopupOnOverlay);
//openImagePopup.addEventListener('click', closePopupOnOverlay);

//Функция закрытия попапа по Esc
function closePopupOnEcs (event) {
    if (event.key == 'Escape') {
        console.log(event.key);
        const openedPopup = document.querySelector('.popup_visible');
        togglePopupWindow(openedPopup);
    };
};

document.addEventListener('keydown', closePopupOnEcs);
//addCardPopup.addEventListener('keydown', closePopupOnEcs);
//openImagePopup.addEventListener('keydown', closePopupOnEcs);

/*const allOverlay = Array.from(document.querySelectorAll('.popup__overlay'));
console.log(allOverlay);*/

/*addCardPopup.addEventListener('click', (event) => {
    //const popupOverlays = document.querySelectorAll('.popup__overlay');
    
    if (event.target != editPopup || addCardPopup || openImagePopup) {
        console.log(event.target);
        const openedPopup = document.querySelector('.popup_visible');
        togglePopupWindow(openedPopup);
    };
});*/

/*addCardPopup.addEventListener('click', (event) => {
    //const popupOverlays = document.querySelectorAll('.popup__overlay');
    
    if (event.target != addCardPopup) {
        console.log(event.target);
        const openedPopup = document.querySelector('.popup_visible');
        togglePopupWindow(openedPopup);
    };
});

openImagePopup.addEventListener('click', (event) => {
    //const popupOverlays = document.querySelectorAll('.popup__overlay');
    
    if (event.target != openImagePopup) {
        console.log(event.target);
        const openedPopup = document.querySelector('.popup_visible');
        togglePopupWindow(openedPopup);
    };
});*/

//addCardPopup.addEventListener('click', closePopup);
//openImagePopup.addEventListener('click', closePopup);

/*function closePopup(popup) {
    popup.classList.remove('.popup_visible');
}*/
//popupOverlay.addEventListener('click', closePopup);

/*function closeOnOverlay () {
    const allPopups = Array.from(document.querySelectorAll('.popup'));
    
}*/



/*const closeOnOverlay = () => {
    //находим все формы на сранице
    const allPopups = Array.from(document.querySelectorAll('.popup__form'));
    
    console.log(allPopups);
    allPopups.forEach();
};*/