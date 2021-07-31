export class Api {
    constructor({adress, token}) {
        this._adress = adress;
        this._token = token;
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

    /*getFullPageInfo() {
        return Promise.all([this.getCards(), this.getUserData()])
    }*/
    
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
                about: data.about,
                avatar: data.avatar
            })
        })
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            console.log('Ошибка - запрос редактирования профиля не выполнен', err);
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

    /*like(cardId, isLiked) {
        return this._request(`cards/likes/${cardId}`, isLiked? 'DELETE' : 'PUT')
    }*/
}