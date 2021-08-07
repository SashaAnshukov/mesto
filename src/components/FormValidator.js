//принимает в конструктор объект настроек с селекторами и классами формы;
//принимает вторым параметром элемент той формы, которая валидируется;
//имеет приватные методы, которые обрабатывают форму: проверяют валидность поля, изменяют состояние кнопки
// сабмита, устанавливают все обработчики;
//имеет один публичный метод enableValidation, который включает валидацию формы.

//Экземпляр класса FormValidator создаётся для каждой проверяемой формы. Этот класс должен:
//Содержать приватные методы для обработки формы;
//Принимать в конструктор объект настроек с классами формы;
//Принимать в конструктор ссылку на HTML-элемент проверяемой формы;
//Содержать приватные методы для обработки формы;
//«Содержать публичный метод enableValidation — вызовите его после создания экземпляра класса».

export const validationMassive = {
    popupFormSelector: '.popup__form',
    popupInputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    spanInputErrorClass: '.popup__input-error',
    popupErrorClass: 'popup__input-error_active',
    popuplineError:'popup__input_type_error',
}

export class FormValidator {
    constructor (validationMassive, formElement) {
        this._formElement = formElement;
        this._validationMassive = validationMassive;
        //получим список инпутов и положим его в свойство
        this._inputList = Array.from(this._formElement.querySelectorAll(this._validationMassive.popupInputSelector));
        //найдём кнопку и положим её в свойство
        this._buttonElement = this._formElement.querySelector(this._validationMassive.submitButtonSelector);
    }

    _setEventListeners () {
    
        //повесим событие ввода на инпут
        const inputListIterator = (inputElement) => {
    
            const handleInput = () => {
                //проверяем валидность инпута
                this._checkInputValidity(inputElement);
                //переключаем состояние кнопки
                this._toggleButtonState();
            }
            inputElement.addEventListener ('input', handleInput);
        };
        this._inputList.forEach(inputListIterator);
        this._toggleButtonState();
    };

    _showInputError (inputElement, errorMessage) {
        console.log(inputElement.name, errorMessage);
        const errorElement = inputElement.closest('.popup__label').querySelector(this._validationMassive.spanInputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._validationMassive.popupErrorClass);
        inputElement.classList.add(this._validationMassive.popuplineError);
    }
    
    //функция скрытия ошибки
    _hideInputError (inputElement) {
        const errorElement = inputElement.closest('.popup__label').querySelector(this._validationMassive.spanInputErrorClass);
        errorElement.textContent = "";
        errorElement.classList.remove(this._validationMassive.popupErrorClass);
        inputElement.classList.remove(this._validationMassive.popuplineError);
    }
    
    resetValidation() {
        this._toggleButtonState(); //управляем кнопкой

        this._inputList.forEach((inputElement) => {
        this._hideInputError(inputElement) //очищаем ошибки
        });
    }

    //функция проверки валидности инпута по длине и type
    _checkInputValidity (inputElement) {
    const isInputNotValid = !inputElement.validity.valid;
    //если не валиден, то показываем ошибку
    if (isInputNotValid) {
        const errorMessage = inputElement.validationMessage;
        this._showInputError(inputElement, errorMessage);
    } 
    //если валиден, то скрываем ошибку
    else {
        this._hideInputError(inputElement);
    }
};

    //функция неактивной кнопки при ошибке в инпуте
    _toggleButtonState () {
        const findAtLeastOneNotValid = (inputElement) => {
            return !inputElement.validity.valid;
        } 
        //проходимся по массиву инпутов
        const hasNotValidIput = this._inputList.some(findAtLeastOneNotValid);
        // если есть не валидный импут, то кнопку отключаем
        if (hasNotValidIput) {
            this._buttonElement.setAttribute('disabled', true);
        } else // если все инпуты валидны, то снимем с кнопки атрибут отключения
        this._buttonElement.removeAttribute('disabled');
    }

    //функция валидации
    enableValidation (/*validationMassive*/) {
        this._setEventListeners();
    };
}