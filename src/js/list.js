import card from '../templates/card.hbs';
import menuSet from '../menu.json';

const menuItems = document.querySelector('.js-menu');

menuItems.insertAdjacentHTML('beforeend', card(menuSet));

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const bodyTheme = document.querySelector('body');
const inputRef = document.querySelector("#theme-switch-toggle");

inputRef.addEventListener('change', checkboxValue);

function checkboxValue (e) {
    const checkboxCurrent = e.currentTarget.checked;
    
    if (checkboxCurrent === true) {
        checkedTrue()
        console.log("+");
    } else {
        checkedFalse()
        console.log('-');
    }
}

function checkedTrue() {
    bodyTheme.classList.add(Theme.DARK);
    bodyTheme.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
    inputRef.checked = true;
}

function checkedFalse() {
    bodyTheme.classList.add(Theme.LIGHT);
    bodyTheme.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
    inputRef.checked = false;
}


