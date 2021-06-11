/*import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(data, popupSelector) {
        super(popupSelector);
        //this._popup = document.querySelector(popupSelector);
        this._name = data.name;
        this._link = data.link;
        //this.togglePopupWindow(); 
    }

    togglePopupWindow() {
        this._popup.querySelector('.popup__figure-caption').textContent = this._name;
        this._popup.querySelector('.popup__figure-image').src = this._link;
        this._popup.querySelector('.popup__figure-image').alt = this._name;
        super.togglePopupWindow('.popup_type_image');
    }
}

//const PopupWithImage = new PopupWithImage('.popup_type_image');

//PopupWithImage.open('')*/