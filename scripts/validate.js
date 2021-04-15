console.log('вороны москвички');

//функция пояления ошибки. Подсвечивает инпут нужным классом и показывать текст ошибки
const showInputError = (inputElement, errorMessage) => {
    console.log(inputElement.name, errorMessage);
    const errorElement = inputElement.closest('.popup__label').querySelector('.popup__input-error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
}

//функция скытия ошибки
const hideInputError = (inputElement) => {
    const errorElement = inputElement.closest('.popup__label').querySelector('.popup__input-error');
    errorElement.textContent = "";
    errorElement.classList.remove('popup__input-error_active');
}

//функция проверки валидности инпута по длине и type
const checkInputValidity = (formElement, inputElement) => {
    const isInputNotValid = !inputElement.validity.valid;
    //console.log(isInputNotValid);
    //если не валиден, то показываем ошибку
    if (isInputNotValid) {
        const errorMessage = inputElement.validationMessage;
        showInputError(inputElement, errorMessage);
    } 
    else {
        hideInputError(inputElement);
    }
};

//функция неактивной кнопки при ошибке в инпуте
const toggleButtonState = (inputList, buttonElement) => {
    const hasNotValidIput = inputList.some((inputElement) => !inputElement.validity.valid);
    if (hasNotValidIput) {
        buttonElement.setAttribute('disabled', true);
    } else
    buttonElement.removeAttribute('disabled');
}

//функция, которая приимает на вход формы и устанавливает обработчики
const setEventListeners = (formElement) => {
    //получим список инпутов
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    //найдём кнопку
    const buttonElement = formElement.querySelector('.popup__button');
    console.log(inputList);
    //повесим событие ввода на инпут
    inputList.forEach((inputElement) => {
        inputElement.addEventListener ('input', function (event) {
            //проверяем валидность инпута
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
    toggleButtonState(inputList, buttonElement);
};

//функция валидации
const enableValidation = () => {
    //находим все формы на сранице
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    
    console.log(formList);
    formList.forEach(setEventListeners);
};

enableValidation();