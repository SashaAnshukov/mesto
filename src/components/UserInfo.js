export class UserInfo {
    constructor ({name, job}) {
        this._name = document.querySelector(name);
        this._job = document.querySelector(job);
    }

    setUserInfo (data) {
        this._name.textContent = data.name;
        this._job.textContent = data.profession;
    }

    getUserInfo () {
        return {
            name: this._name.textContent,
            job: this._job.textContent,
        }
    }

}