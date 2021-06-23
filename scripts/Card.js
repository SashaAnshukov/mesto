//Создайте класс Card, который создаёт карточку с текстом и ссылкой на изображение:
//принимает в конструктор её данные и селектор её template-элемента;
//содержит приватные методы, которые работают с разметкой, устанавливают слушателей событий;
//содержит приватные методы для каждого обработчика;
//содержит один публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки.
//import {PopupWithImage} from './PopupWithImage.js';

export class Card {
    constructor (data, cardSelector, handleCardClick) {
        this._nameCard = data.name;
        this._linkCard = data.link;
        this._cardSelector = cardSelector;
        this.handleCardClick = handleCardClick;
    }

    _getTemplate() {
        // здесь выполним все необходимые операции, чтобы вернуть разметку
        /*const cardElement = document.querySelector(this._cardSelector)
        .content.querySelector('.rectangle').cloneNode(true);*/
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.rectangle')
        .cloneNode(true);

        // вернём DOM-элемент карточки
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners(); // добавим обработчики

        const cardImage = this._element.querySelector('.rectangle__image');
        const cardTitle = this._element.querySelector('.rectangle__mesto-text');
        cardImage.src = this._linkCard;
        cardTitle.textContent = this._nameCard;
        cardTitle.alt = this._nameCard;

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.rectangle__image')
        .addEventListener('click', () => this.handleCardClick(this._nameCard, this._linkCard));
        /*this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.rectangle__image');
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
        });*/

        const buttonLikeElement = this._element.querySelector('.rectangle__mesto-like');
        buttonLikeElement.addEventListener('click', () => this._handleLike());

        const buttonTrash = this._element.querySelector('.rectangle__trash');
        buttonTrash.addEventListener('click', () => this._handleTrash());
    }

    /*_handleOpenImage() {
        const popupImage = document.querySelector('.popup__figure-image');
        const popupFullImageCaption =  document.querySelector('.popup__figure-caption');
        popupImage.src = this._linkCard;
        popupImage.alt = this._nameCard; 
        popupFullImageCaption.textContent = this._nameCard; 
        document.querySelector('.popup_type_image').classList.toggle('popup_visible');
    }*/

    _handleLike() {
        this._element.querySelector('.rectangle__mesto-like').classList.toggle('rectangle__mesto-like_active')
    }

    _handleTrash() {
        this._element.closest('.rectangle').remove();
    }
}