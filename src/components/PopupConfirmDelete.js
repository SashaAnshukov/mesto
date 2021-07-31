import {Popup} from './Popup.js';

export class PopupConfirmDelete extends Popup {
    constructor(popupSelector,handleFormSubit) {
        super(popupSelector);
        this._handleFormSubit = handleFormSubit;
    }

    changeSubmitHandler() {

    }

    open () {
        super.open();
    }

    close () {
        this._popup.classList.remove('popup_visible');
        document.removeEventListener('click', this._closePopupOnOverlay);
        document.removeEventListener('keydown', this._closePopupOnEcs);
    }

}