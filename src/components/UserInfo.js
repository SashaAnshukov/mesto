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

    setAvatarInfo (avatar) {
        this._avatar.src = avatar;
    }

    getAvatarInfo () {
        return {
            avatar: this._avatar.src,
        }
    }

}