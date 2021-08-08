import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
    constructor (popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupButton = this._popup.querySelector('.popup__button')
        this._defaultPopupButtonText = this._popupButton.textContent;
        this._inputs = Array.from(this._popup.querySelectorAll('.popup__input'));
    }
    
    _getInputValues() {
        const values = {};
        this._inputs.forEach((input) => {
            values[input.name] = input.value;
        })
        return values
    }

    setFormAction(handleFormSubmit) {
        this._handleFormSubmit = handleFormSubmit;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form = this._popup.querySelector('.popup__form');
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            const data = this._getInputValues (); // {name: ...., job:....}
            this._handleFormSubmit(data);
            //this.close();
            //document.querySelector('[aria-label="createButton"]').setAttribute('disabled', true);
        });
    }

    preLoader (isLoading) {
        if (isLoading) {
            this._popupButton.textContent = 'Сохранение...';
        } 
        else {
            this._popupButton.textContent = this._defaultPopupButtonText;
        }
    }

    close() {
        this._form.reset();
        super.close();
    }
}