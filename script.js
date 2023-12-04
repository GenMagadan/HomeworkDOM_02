// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс
// "super-dropdown", необходимо использовать методы forEach и querySelectorAll
// и свойство classList у элементов.
let dropdownEl = document.querySelectorAll('.dropdown-item');
// console.dir(dropdownEl);

dropdownEl.forEach(element => {
   element.classList.add('super-dropdown');
});
console.log(dropdownEl);

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он
// присутствует у этого элемента, либо добавить, если такого класса у элемента
// не было.
let btnEl = document.querySelector('.btn');
// console.dir(btnEl);
btnEl.classList.toggle('btn-secondary');
// Добавляет класс элементу при отсутсвии искомого класса, или удаляет при наличии
console.log(btnEl);

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого
// присутствует класс "menu".
let menuEl = document.querySelector('.menu');
// console.dir(menuEl);
menuEl.classList.remove('dropdown-menu');
console.log(menuEl);

// 4. Используя метод insertAdjacentHTML добавьте после div с классом "dropdown"
// следующую разметку: `<a href="#">link</a>`

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует
// атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".