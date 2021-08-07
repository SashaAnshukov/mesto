//Перебор массива и отрисовка разметки на его основе
export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._renderedItems = items;// массив данных, которые нужно добавить на страницу при инициализации класса
        this._renderer = renderer;// renderer — это функция, которая отвечает за создание и отрисовку данных на странице.
        this._container = document.querySelector(containerSelector);//селектор контейнера, в который нужно добавлять созданные элементы.
    }

    //метод отрисовки каждого отдельного элемента
    renderItems() {
        this._renderedItems.forEach(items => {
            
            this._renderer(items); // вызываем renderer, передав item
        });
    }

    addItem(element) {
        this._container.append(element);
    }

    prepend(element) {
        this._container.prepend(element);
    }

}