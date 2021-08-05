export class Api {
    constructor({adress, token}) {
        this._adress = adress;
        this._token = token;
    }

    getFullPageInfo() {
        return Promise.all([this.getInitialCards(), this.getUserData()])
    }

    getInitialCards() {
        return fetch(`${this._adress}/cards`, {
            method: 'GET',
            headers: {
                authorization: this._token,
            },
        })
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .catch((err) => {
            console.log('Ошибка - запрос плучения карточек с сервера не выполнен', err);
        })
    }
    
    getUserData() {
        return fetch(`${this._adress}/users/me`, {
            method: 'GET',
            headers: {
                authorization: this._token,
            },
        })
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .catch((err) => {
            console.log('Ошибка - запрос полчения информации о пользователе с серверане выполнен', err);
        })
    }

    setUserData(data) {
        return fetch(`${this._adress}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            console.log('Ошибка - запрос редактирования профиля не выполнен', err);
        })
    }

    setUserAvatar({avatar}) {
        console.log('!!!', avatar);
        return fetch(`${this._adress}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: avatar
            })
        })
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            console.log('Ошибка - запрос редактирования аватара не выполнен', err);
        })
    }

    //4. Добавление новой карточки
    setMyCard(data) {
        return fetch(`${this._adress}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link
            }),
        })
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            console.log('Ошибка - Добавление новой карточки не выплнено', err);
        })
    }

    //7. Удаление карточки 
    deleteCard(id) {
        return fetch(`${this._adress}/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json' 
            },
        })
        .then((response) => {
            response.json();
        })
        .catch((err) => {
            console.log('Ошибка - Добавление новой карточки не выплнено', err);
        })
    }

    //8. Лайки.постановка
    setLikeCard(id) {
        return fetch(`${this._adress}/cards/likes/${id}`, {
            method: 'PUT',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json' 
            },
        })
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            console.log('Ошибка - запрос постановки лайка не выполнен', err);
        })
    }

    //8. Лайки.удаление
    deleteLikeCard(id) {
        return fetch(`${this._adress}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json' 
            },
        })
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            console.log('Ошибка - запрос снятия лайка не выполнен', err);
        })
    }
}