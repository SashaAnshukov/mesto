import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
    constructor ({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
    }

    setEventListeners() {
        
        super.setEventListeners();
        this._form = [...this._popup.querySelector('.popup_type_add-card')];
        console.log(this._form);
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            const data = this._getInputValues () // {name: ...., job:....}
            this._handleFormSubmit(data);
        });
    }

    /*_getTemplate() {
        const formElement = document
        .querySelector('.rectangle-item-template')
        .content
        .querySelector('.rectangle')
        .cloneNode(true);
    
        return formElement;
    }*/

    _getInputValues() {
        const inputs = this._form.querySelectorAll('.form_input'); //Array.from тоже самое
        const values = {}
        inputs.forEach((input) => {
            values[input.name] = input.value
        })
        return values
    }

    /*generateForm() {
        this._element = this._getTemplate(); // создаём элемент
        this.setEventListeners(); // добавляем обработчики
    
        return this._element; // возвращаем наружу
    }*/

    toggle() {
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