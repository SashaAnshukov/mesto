import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
    constructor (popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
    }
    
    _getInputValues() {
        const inputs = Array.from(this._form.querySelectorAll('.popup__input'));
        const values = {};
        //this._form = [...this._popup.querySelectorAll('.popup__input')];
        inputs.forEach((input) => {
            //const addCardnamePlace = document.querySelector('.popup__input_text_namePlace');
            values[input.name] = input.value;
            //values[input.name] = input.value;
        })
        return values
    }

    setEventListeners() {
        super.setEventListeners();
        this._form = this._popup.querySelector('.popup__form');
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            const data = this._getInputValues (); // {name: ...., job:....}
            this._handleFormSubmit(data);
            super.toggle();
        });
    }

    close() {
        this._form.reset();
        super.toggle();
    }
}

/*function addCardSubmitHandler(data?) {
    const card = new Card(data); // см. 7 спринт
    card.getCard()
    list.prepend(card.getCard())
}

function editProfileSubmitHandler() {
    //..
}

const addCardPopup = new PopupWithForm('.popup_type_add-card', addCardSubmitHandler)
const editProfilePopup = new PopupWithForm('.popup_type_edit-profile', editProfileSubmitHandler)*/