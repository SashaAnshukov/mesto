//Создайте класс Card, который создаёт карточку с текстом и ссылкой на изображение:
//принимает в конструктор её данные и селектор её template-элемента;
//содержит приватные методы, которые работают с разметкой, устанавливают слушателей событий;
//содержит приватные методы для каждого обработчика;
//содержит один публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки.

export class Card {
    constructor (data, cardSelector, handleCardClick) {
        this._nameCard = data.name;
        this._linkCard = data.link;
        this._cardSelector = cardSelector;
        this.handleCardClick = handleCardClick.bind(this);

        /*this._handleLike = handleLike;
        this._cardOwnerId = data.owner._id;*/
    }

    _getTemplate() {
        // здесь выполним все необходимые операции, чтобы вернуть разметку
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
        cardImage.alt = this._nameCard;

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.rectangle__image')
        .addEventListener('click', () => this.handleCardClick(this._nameCard, this._linkCard));

        const buttonLikeElement = this._element.querySelector('.rectangle__mesto-like');
        buttonLikeElement.addEventListener('click', () => this._handleLike());

        const buttonTrash = this._element.querySelector('.rectangle__trash');
        buttonTrash.addEventListener('click', () => this._handleTrash());
    }

    /*_handleLike() {
        //this._element.querySelector('.rectangle__mesto-like').classList.toggle('rectangle__mesto-like_active')
        this._handleLike(this);
    }

    _handleTrash() {
        this._element.closest('.rectangle').remove();
    }

    getId() {
        return this._card_.id;
    }

    getIsLiked() {
        return this._IsLiked;
    }

    updateLikesInfo(likes) {
        this._card.likes = likes;
    }*/
}