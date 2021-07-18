// отвечает за открытие и закрытие попапа
export class Popup {
    constructor (popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closePopupOnEcs = this._closePopupOnEcs.bind(this);
        this._closePopupOnOverlay = this._closePopupOnOverlay.bind(this);
    }

    open () {
        this._popup.classList.add('popup_visible');
        document.addEventListener('click', this._closePopupOnOverlay);
        document.addEventListener('keydown', this._closePopupOnEcs);
    }

    close () {
        this._popup.classList.remove('popup_visible');
        document.removeEventListener('click', this._closePopupOnOverlay);
        document.removeEventListener('keydown', this._closePopupOnEcs);
    }

    // _handleEscClose
    _closePopupOnEcs(event) {
        if(event.key == 'Escape') {
            this.close();
        }
    }

    _closePopupOnOverlay(event) { 
        const getPopupOverlayOnClick = event.target.closest('.popup__overlay');
        if (event.target == getPopupOverlayOnClick) {
            this.close();
        };
    }

    setEventListeners() {
        this._popup.querySelector('.popup__close-button').addEventListener('click', () => {
            this.close();
        });
    }
}