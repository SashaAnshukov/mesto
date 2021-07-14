import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    handleCardClick (nameCard, linkCard) {
        super.toggle();
        this._popup.querySelector('.popup__figure-caption').textContent = nameCard;
        this._popup.querySelector('.popup__figure-image').src = linkCard;
        this._popup.querySelector('.popup__figure-image').alt = nameCard;
    }
}
