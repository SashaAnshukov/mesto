console.log('вороны москвички');

const checkInputValidity = (inputElement) => {
    const isInputElementValid = inputElement.validity.valid;
    console.log(isInputElementValid);
};

const setEventListeners = (formElement) => {
    
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    console.log(inputList);

    inputList.forEach((inputElement) => {
        inputElement.addEventlistener('input', (event) => {
            checkInputValidity(inputElement);
        });
    });
    
};

//функция валидации
const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    
    console.log(formList);
    formList.forEach(setEventListeners);
};

enableValidation();