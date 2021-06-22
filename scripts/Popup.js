// отвечает за открытие и закрытие попапа
export class Popup {
    constructor (popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closePopupOnEcs = this._closePopupOnEcs.bind();
        //this._closePopupOnOverlay = this._closePopupOnOverlay.bind();
    }

    open () {
        this._popup.сlassList.add('popup_visible');
        document.addEventListener('keydown', this._closePopupOnEcs);
    }

    /*close() {
        this._popup.сlassList.remove('.popup__open');
        document.removeEventListener('keyup', this._closePopupOnEcs);
    }*/

    // _handleEscClose
    _closePopupOnEcs(event) { 
        if(event.key === 27) {
            this.togglePopupWindow();
        }
    }

    setEventListeners() {
        this._popup.querySelector('.popup__close-button').addEventListener('click', () => {
            this.togglePopupWindow();
        });
        //this._popup.addEventListener('click', this._closePopupOnOverlay());
    }
}