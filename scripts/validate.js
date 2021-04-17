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
    //если валмден, то скрываем ошибку
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
const setEventListeners = (formElement, InputSelecor,submitButtonSelector) => {
    //получим список инпутов
    const inputList = Array.from(formElement.querySelectorAll(InputSelecor));
    //найдём кнопку
    const buttonElement = formElement.querySelector(submitButtonSelector);
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
const enableValidation = ({
    formSelector, InputSelecor, submitButtonSelector
}) => {
    //находим все формы на сранице
    const formList = Array.from(document.querySelectorAll(formSelector));
    
    console.log(formList);
    formList.forEach((formElement) => {
        setEventListeners(formElement, InputSelecor, submitButtonSelector)
    });
};

enableValidation({
    formSelector: '.popup__form',
    InputSelecor: '.popup__input',
    submitButtonSelector: '.popup__button',
    inputErrorClass: '.popup__input-error',
});