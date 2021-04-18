console.log('вороны москвички');

//функция пояления ошибки. Подсвечивает инпут нужным классом и показывает текст ошибки
const showInputError = (inputElement, errorMessage) => {
    console.log(inputElement.name, errorMessage);
    const errorElement = inputElement.closest('.popup__label').querySelector(validationMassive.spanInputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationMassive.popupErrorClass);
    inputElement.classList.add(validationMassive.popuplineError);
}

//функция скрытия ошибки
const hideInputError = (inputElement) => {
    const errorElement = inputElement.closest('.popup__label').querySelector(validationMassive.spanInputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(validationMassive.popupErrorClass);
    inputElement.classList.remove(validationMassive.popuplineError);
}

//функция проверки валидности инпута по длине и type
const checkInputValidity = (formElement, inputElement) => {
    const isInputNotValid = !inputElement.validity.valid;
    //если не валиден, то показываем ошибку
    if (isInputNotValid) {
        const errorMessage = inputElement.validationMessage;
        showInputError(inputElement, errorMessage);
    } 
    //если валиден, то скрываем ошибку
    else {
        hideInputError(inputElement);
    }
};

//функция неактивной кнопки при ошибке в инпуте
const toggleButtonState = (inputList, buttonElement) => {
    const findAtLeastOneNotValid = (inputElement) => {
        return !inputElement.validity.valid;
    } 
    //проходимся по массиву инпутов
    const hasNotValidIput = inputList.some(findAtLeastOneNotValid);
    // если есть не валидный импут, то кнопку отключаем
    if (hasNotValidIput) {
        buttonElement.setAttribute('disabled', true);
    } else // если все инпуты валидны, то снимем с кнопки атрибут отключения
    buttonElement.removeAttribute('disabled');
}

//функция, которая приимает на вход формы и устанавливает обработчики
const setEventListeners = (formElement) => {
    //получим список инпутов
    const inputList = Array.from(formElement.querySelectorAll(validationMassive.popupInputSelector));
    //найдём кнопку
    const buttonElement = formElement.querySelector(validationMassive.submitButtonSelector);
    console.log(inputList);

    //повесим событие ввода на инпут
    const inputListIterator = (inputElement) => {

        const handleInput = () => {
            //проверяем валидность инпута
            checkInputValidity(formElement, inputElement);
            // переключаем состояние кнопки
            toggleButtonState(inputList, buttonElement);
        }
        inputElement.addEventListener ('input', handleInput);
    };
    inputList.forEach(inputListIterator);
    toggleButtonState(inputList, buttonElement);
};

//функция валидации
const enableValidation = (obj) => {
    //находим все формы на сранице
    const formList = Array.from(document.querySelectorAll(obj.popupFormSelector));
    
    console.log(formList);
    formList.forEach((formElement) => {
        setEventListeners(formElement)
    });
};

const validationMassive = {
    popupFormSelector: '.popup__form',
    popupInputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    spanInputErrorClass: '.popup__input-error',
    popupErrorClass: 'popup__input-error_active',
    popuplineError:'popup__input_type_error'
}

enableValidation(validationMassive);

