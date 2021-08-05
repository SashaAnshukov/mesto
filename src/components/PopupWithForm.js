import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
    constructor (popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupButton = this._popup.querySelector('.popup__button')
        this._defaultPopupButtonText = this._popupButton.textContent;
    }
    
    _getInputValues() {
        const inputs = Array.from(this._form.querySelectorAll('.popup__input'));
        const values = {};
        inputs.forEach((input) => {
            values[input.name] = input.value;
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
            this.close();
            document.querySelector('[aria-label="createButton"]').setAttribute('disabled', true);
            window.onload = function() {
                document.querySelectorAll('.button').textContent = "Сохранение..."
        };
        });
    }

    preLoader (isLoading, loadingText = 'Сохранение...') {
        if (isLoading) {
            this._popupButton.textContent = loadingText;
        } 
        else {
            this._popupButton.textContent = this.__defaultPopupButtonText;
        }
    }

    close() {
        this._form.reset();
        super.close();
    }
}