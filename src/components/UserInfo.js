export class UserInfo {
    constructor ({name, about, avatar}) {
        this._name = document.querySelector(name);
        this._job = document.querySelector(about);
        this._avatar = document.querySelector(avatar);
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

    setAvatarInfo (data) {
        this._avatar.src = data.avatar;
    }

    getAvatarInfo () {
        return {
            avatar: this._avatar.src
        }
    }

}