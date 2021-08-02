//Создайте класс Card, который создаёт карточку с текстом и ссылкой на изображение:
//принимает в конструктор её данные и селектор её template-элемента;
//содержит приватные методы, которые работают с разметкой, устанавливают слушателей событий;
//содержит приватные методы для каждого обработчика;
//содержит один публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки.

export class Card {
    constructor (data, currentUserId, cardSelector, handleCardClick, handleCardDelete, handleCardLike) {
        this._nameCard = data.name;
        this._linkCard = data.link;
        this._cardSelector = cardSelector;
        this.handleCardClick = handleCardClick.bind(this);

        this._cardOwnerId = data.owner._id;
        this._cardId = data._id;
        this._currentUserId = currentUserId;
        this._handleCardDelete = handleCardDelete;
        this._likes = data.likes;
        this._handleCardLike = handleCardLike;
        console.log('this._currentUserId', this._currentUserId);
    }

    setLikesinfo (newCardData) {
        if(newCardData) {
            this._like = newCardData.likes
        }
        
        const likesCount = this._likes.length;
        this._element.querySelector('.rectangle__mesto-numbersLike').textContent = likesCount;
        
        const isLiked = this._likes.find(person => person._id === this._currentUserId);
        if (isLiked) {
            this._element.querySelector('.rectangle__mesto-like').classList.add('rectangle__mesto-like_active')
        }
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

        this.setLikesinfo();

        if (this._cardOwnerId !== this._currentUserId) {
            this._element.querySelector('.rectangle__trash').classList.add('rectangle__trash_hidden');
        }
        
        

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.rectangle__image')
        .addEventListener('click', () => this.handleCardClick(this._nameCard, this._linkCard));

        const buttonLikeElement = this._element.querySelector('.rectangle__mesto-like');
        buttonLikeElement.addEventListener('click', () => this._handleCardLike
        //this._handleLike()
        );

        const buttonTrash = this._element.querySelector('.rectangle__trash');
        buttonTrash.addEventListener('click', () => this._handleCardDelete(this));
    }

    _handleLike() {
        this._element.querySelector('.rectangle__mesto-like').classList.toggle('rectangle__mesto-like_active')
        this._handleLike(this);
    }

    handleTrash() {
        this._element.closest('.rectangle').remove();
    }

    /*getId() {
        return this._card_.id;
    }

    getIsLiked() {
        return this._IsLiked;
    }

    updateLikesInfo(likes) {
        this._card.likes = likes;
    }*/
}