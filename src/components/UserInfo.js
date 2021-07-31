export class UserInfo {
    constructor ({name, about}) {
        this._name = document.querySelector(name);
        this._job = document.querySelector(about);
    }

    setUserInfo (data) {
        this._name.textContent = data.name;
        this._job.textContent = data.about;
    }

    getUserInfo () {
        return {
            name: this._name.textContent,
            job: this._job.textContent,
        }
    }

}