//Перебор массива и отрисовка разметки на его основе
export default class Section {
    constructor({ item, renderer }, containerSelector) {
        this._renderedItems = item;// массив данных, которые нужно добавить на страницу при инициализации класса
        this._renderer = renderer;// renderer — это функция, которая отвечает за создание и отрисовку данных на странице.
        this._container = document.querySelector(containerSelector);//селектор контейнера, в который нужно добавлять созданные элементы.
    }

    //метод отрисовкаи каждого отдельного элемента
    renderItems() {
        //this.clear();
    
        this._renderedItems.forEach(item => {
            
            this._renderer(item); // вызываем renderer, передав item
        });
    }

    addItem(element) {
        this._container.append(element);
    }
}