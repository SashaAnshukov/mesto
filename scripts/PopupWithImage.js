import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        //this._namePopup = data.name;
        //this._linkPopup = data.link;
        //this._popup = document.querySelector(popupSelector);
        //this.togglePopupWindow(); 
    }

    togglePopupWindow(namePopup, linkPopup) {
        super.togglePopupWindow('.popup_type_image');
        this._popup.querySelector('.popup__figure-caption').textContent = namePopup;
        this._popup.querySelector('.popup__figure-image').src = linkPopup;
        this._popup.querySelector('.popup__figure-image').alt = namePopup;
    }
}

//const PopupWithImage = new PopupWithImage('.popup_type_image');

//PopupWithImage.open('')*/