# Space Clicker

Простой веб‑проект на HTML, CSS и JavaScript.

## Описание

Space Clicker — минималистичный кликер со счётчиком.

Функциональность:

* увеличение значения по кнопке `+`
* уменьшение значения по кнопке `-`
* обновление счётчика без перезагрузки страницы

## Стек

* HTML5
* CSS3
* Vanilla JavaScript

## Структура проекта

```text
SpaceClicker/
├── assets/
│   └── bg.jpg
├── script/
│   └── index.js
├── style/
│   └── style.css
└── index.html
```

## Запуск проекта

1. Склонировать репозиторий:

```bash
git clone https://github.com/StavaRachl/SpaceClicker
```

2. Перейти в папку проекта:

```bash
cd SpaceClicker
```

3. Открыть `index.html` в браузере.

## Логика работы

В файле `script/index.js`:

* создаётся переменная `counter`
* кнопки получают обработчики событий `click`
* при нажатии значение счётчика обновляется через `textContent`

Пример:

```js
plusBtn.addEventListener('click', () => {
    counter++
    valueParameter.textContent = counter
})
```

## Возможные улучшения

* запрет отрицательных значений
* сохранение состояния через `localStorage`
* анимации кнопок
* адаптивный интерфейс
* добавление звуков и эффектов
* система очков/апгрейдов

## Автор

Проект создан в учебных целях.
