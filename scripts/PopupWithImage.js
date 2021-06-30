import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        //this._namePopup = data.name;
        //this._linkPopup = data.link;
        //this._popup = document.querySelector(popupSelector);
        //this.togglePopupWindow(); 
    }

    handleCardClick (nameCard, linkCard) {
        super.toggle();
        this._popup.querySelector('.popup__figure-caption').textContent = nameCard;
        this._popup.querySelector('.popup__figure-image').src = linkCard;
        this._popup.querySelector('.popup__figure-image').alt = nameCard;
    }
}

//const PopupWithImage = new PopupWithImage('.popup_type_image');

//PopupWithImage.open('')*/