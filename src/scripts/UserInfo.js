//const profileTitle = document.querySelector('.profile__title');
//const profileSubTitle = document.querySelector('.profile__subtitle');

export class UserInfo {
    constructor ({name, job}) {
        this._name = document.querySelector(name);
        this._job = document.querySelector(job);
    }

    /*setEventListeners() {
        super.setEventListeners();
        this._form = this._popup.querySelector('.popup__form');
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            const data = this.setUserInfo (); // {name: ...., job:....}
            this._handleFormSubmit(editPopupName, editPopupProfession);
            super.toggle();
        });
    }*/

    setUserInfo (data) {
        this._name.textContent = data.name;
        this._job.textContent = data.profession;
        /*this._inputs = Array.from(this._popup.querySelectorAll('.popup__input'));
        const values = {};
        inputs.forEach((input) => {
            values[input.name] = input.value;
        })
        return values*/
    }

    getUserInfo () {
        return {
            name: this._name.textContent,
            job: this._job.textContent,
        }
    }

}