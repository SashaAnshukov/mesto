import {Popup} from './Popup.js';

class PopupWithForm extends Popup {
    constructor (popupSelector, submitHandler) {
        super(popupSelector);
        this._submitHandler = submitHandler
    }

    setEventListeners() {
        super.setEventListeners();
        this._form = this._popup.querySelector('.form');
        this._form.addEventListener('submit', () => {
            const data = this._getInputValues () // {name: ...., job:....}
            this._submitHandler(data);
        });
    }

    _getInputValues() {
        const values = {}
        const inputs = [...this._form.querySelectorAll('.form_input')]; //Array.from тоже самое
        inputs.forEach((input) => {
            values[input.name] = input.value
        })
        return values
    }

    close() {
        this._form.reset();
        super(close);
    }

}

/*function addCardSubmitHandler(data) {
    const card = new Card(data); // см. 7 спринт
    list.prepend(card.getCard())
}

function editProfileSubmitHandler() {
    //..
}

const addCardPopup = new PopupWithForm('.popup_type_add-card', addCardSubmitHandler)
const editProfilePopup = new PopupWithForm('.popup_type_edit-profile', editProfileSubmitHandler)*/