// отвечает за открытие и закрытие попапа
export class Popup {
    constructor (popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closePopupOnEcs = this._closePopupOnEcs.bind(this);
        this._closePopupOnOverlay = this._closePopupOnOverlay.bind(this);
    }

    //open close
    toggle () {
        this._popup.classList.toggle('popup_visible');
        if (this._popup.classList.contains('popup_visible')) {
            document.addEventListener('click', this._closePopupOnOverlay);
            document.addEventListener('keydown', this._closePopupOnEcs);
        } else {
            document.removeEventListener('click', this._closePopupOnOverlay);
            document.removeEventListener('keydown', this._closePopupOnEcs);
        }
    }

    // _handleEscClose
    _closePopupOnEcs(event) { 
        if(event.key == 'Escape') {
            this.toggle();
        }
    }

    _closePopupOnOverlay(event) { 
        const getPopupOverlayOnClick = event.target.closest('.popup__overlay');
        if (event.target == getPopupOverlayOnClick) {
            //console.log(event.target);
            this.toggle();
        };
    }

    setEventListeners() {
        this._popup.querySelector('.popup__close-button').addEventListener('click', () => {
            this.toggle();
        });
        //this._popup.addEventListener('click', this._closePopupOnOverlay());
    }
}