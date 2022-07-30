const pageStart = document.getElementById('page__start1');
const pageQuestion = document.getElementById('page__question1');
const pagefinish = document.getElementById('page__finish1');
const startBtn = document.getElementById('btn__start1');
const numberQuestion = document.getElementById('ques-num');
const imageQuestion = document.getElementById('photo-question');
const ansBtnA = document.getElementById('a');
const ansBtnB = document.getElementById('b');
const ansBtnC = document.getElementById('c');
const ansBtnD = document.getElementById('d');
const btnReload = document.getElementById('reload');

//вторая страница вопросов

const pageQuestion2 = document.getElementById('page__question2');
const numberQuestion2 = document.getElementById('ques-num2');
const imageQuestion2 = document.getElementById('photo-question2');
const ansBtnA2 = document.getElementById('a2');
const ansBtnB2 = document.getElementById('b2');
const ansBtnC2 = document.getElementById('c2');
const ansBtnD2 = document.getElementById('d2');
//const btnReload2 = document.getElementById('reload2')

//страница ответов
const pageAnswer = document.getElementById('page__answer1');
const imageQuestion3 = document.getElementById('photo-question-answer');
const answerDescription = document.getElementById('answer-description');
const btnReloadQuest = document.getElementById('reloadQuest');

let allScoreTrueCollection = document.querySelectorAll(".page__scores-true")
let allScoreFalseCollection = document.querySelectorAll(".page__scores-false")


const objQuest = [];
const arrAnswersTrue = [];

let randomNumber = null;
let randomNumber2 = null;
let scoreTrue = 0;
let scoreFalse = 0;

allScoreTrueCollection.innerHTML = `${scoreTrue}`

let sleep = (milliseconds) => {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

let renderQuestions = () => {
    randomNumber = Math.floor(Math.random() * objQuest.length);
    if(arrAnswersTrue.includes(randomNumber)){
        renderQuestions();
    }else{
    numberQuestion.innerHTML = `Номер вопроса: ${randomNumber+1}`;
    imageQuestion.src = `${objQuest[randomNumber].question}`;
    ansBtnA.innerHTML = `${objQuest[randomNumber].a}`;
    ansBtnB.innerHTML = `${objQuest[randomNumber].b}`;
    ansBtnC.innerHTML = `${objQuest[randomNumber].c}`;
    ansBtnD.innerHTML = `${objQuest[randomNumber].d}`;
    funcTrueRender();
    funcFalseRender();
    }
};
let renderQuestions2 = () => {
    randomNumber2 = Math.floor(Math.random() * objQuest.length);
    if(arrAnswersTrue.includes(randomNumber2)){
        renderQuestions2();
    }else{
    numberQuestion2.innerHTML = `Номер вопроса: ${randomNumber2+1}`;
    imageQuestion2.src = `${objQuest[randomNumber2].question}`
    ansBtnA2.innerHTML = `${objQuest[randomNumber2].a}`;
    ansBtnB2.innerHTML = `${objQuest[randomNumber2].b}`;
    ansBtnC2.innerHTML = `${objQuest[randomNumber2].c}`;
    ansBtnD2.innerHTML = `${objQuest[randomNumber2].d}`;
    funcTrueRender();
    funcFalseRender();
    }
};
let renderTrueAnswer = () => {
    imageQuestion3.src = `${objQuest[randomNumber].question}`;
    answerDescription.innerHTML = `${objQuest[randomNumber].answer}`
    pageAnswer.classList.remove("animate-hidden");
    pageAnswer.classList.add("animate");
    funcTrueRender();
    funcFalseRender();
};

let funcTrueRender = () => {
    for (var i = 0; i < allScoreTrueCollection.length; i++) {
        allScoreTrueCollection[i].innerHTML = `${scoreTrue}`;
    }
};
let funcFalseRender = () => {
    for (var i = 0; i < allScoreFalseCollection.length; i++) {
        allScoreFalseCollection[i].innerHTML = `${scoreFalse}`;
    }
};


startBtn.addEventListener('click', () => {
    renderQuestions();
    pageQuestion.classList.remove("animate-hidden");
    pageQuestion.classList.add("animate");
    pageStart.classList.remove("animate");
    pageStart.classList.add("animate-hidden");
    scoreTrue = +localStorage.getItem('true');
    scoreFalse = +localStorage.getItem('false');
});
//кнопки ответов
ansBtnA.addEventListener('click', () => {
    if ("a" == objQuest[randomNumber].true){
        scoreTrue += 1;
        arrAnswersTrue.push(randomNumber);
        renderTrueAnswer();
        pageQuestion.classList.remove("animate");
        pageQuestion.classList.add("animate-hidden");
    }else{
        scoreFalse +=1;
        renderTrueAnswer();
        pageQuestion.classList.remove("animate");
        pageQuestion.classList.add("animate-hidden");
    }
});
ansBtnB.addEventListener('click', () => {
    if ("b" == objQuest[randomNumber].true){
        scoreTrue += 1;
        arrAnswersTrue.push(randomNumber);
        renderTrueAnswer();
        pageQuestion.classList.remove("animate");
        pageQuestion.classList.add("animate-hidden");
    }else{
        scoreFalse +=1;
        renderTrueAnswer();
        pageQuestion.classList.remove("animate");
        pageQuestion.classList.add("animate-hidden");
    }
});
ansBtnC.addEventListener('click', () => {
    if ("c" == objQuest[randomNumber].true){
        scoreTrue += 1;
        arrAnswersTrue.push(randomNumber);
        renderTrueAnswer();
        pageQuestion.classList.remove("animate");
        pageQuestion.classList.add("animate-hidden");
    }else{
        scoreFalse +=1;
        renderTrueAnswer();
        pageQuestion.classList.remove("animate");
        pageQuestion.classList.add("animate-hidden");
    }
});
ansBtnD.addEventListener('click', () => {
    if ("d" == objQuest[randomNumber].true){
        scoreTrue += 1;
        arrAnswersTrue.push(randomNumber);
        renderTrueAnswer();
        pageQuestion.classList.remove("animate");
        pageQuestion.classList.add("animate-hidden");
    }else{
        scoreFalse +=1;
        renderTrueAnswer();
        pageQuestion.classList.remove("animate");
        pageQuestion.classList.add("animate-hidden");
    }
});

//кнопки ответов 2
ansBtnA2.addEventListener('click', () => {
    if ("a" == objQuest[randomNumber2].true){
        scoreTrue += 1;
        arrAnswersTrue.push(randomNumber2);
        renderTrueAnswer();
        pageQuestion2.classList.remove("animate");
        pageQuestion2.classList.add("animate-hidden");
    }else{
        scoreFalse +=1;
        renderTrueAnswer();
        pageQuestion2.classList.remove("animate");
        pageQuestion2.classList.add("animate-hidden");
    }
});
ansBtnB2.addEventListener('click', () => {
    if ("b" == objQuest[randomNumber2].true){
        scoreTrue += 1;
        arrAnswersTrue.push(randomNumber2);
        renderTrueAnswer();
        pageQuestion2.classList.remove("animate");
        pageQuestion2.classList.add("animate-hidden");
    }else{
        scoreFalse +=1;
        renderTrueAnswer();
        pageQuestion2.classList.remove("animate");
        pageQuestion2.classList.add("animate-hidden");
    }
});
ansBtnC2.addEventListener('click', () => {
    if ("c" == objQuest[randomNumber2].true){
        scoreTrue += 1;
        arrAnswersTrue.push(randomNumber2);
        renderTrueAnswer();
        pageQuestion2.classList.remove("animate");
        pageQuestion2.classList.add("animate-hidden");
    }else{
        scoreFalse +=1;
        renderTrueAnswer();
        pageQuestion2.classList.remove("animate");
        pageQuestion2.classList.add("animate-hidden");
    }
});
ansBtnD2.addEventListener('click', () => {
    if ("d" == objQuest[randomNumber2].true){
        scoreTrue += 1;
        arrAnswersTrue.push(randomNumber2);
        renderTrueAnswer();
        pageQuestion2.classList.remove("animate");
        pageQuestion2.classList.add("animate-hidden");
    }else{
        scoreFalse +=1;
        renderTrueAnswer();
        pageQuestion2.classList.remove("animate");
        pageQuestion2.classList.add("animate-hidden");
    }
});

btnReload.addEventListener('click', () => {
    renderQuestions();
    pageQuestion.classList.remove("animate");
    pageQuestion.classList.add("animate-hidden");
    renderQuestions2();
    pageQuestion2.classList.remove("animate-hidden");
    pageQuestion2.classList.add("animate");
});

btnReloadQuest.addEventListener('click', () => {
    renderQuestions();
    pageAnswer.classList.remove("animate");
    pageAnswer.classList.add("animate-hidden");
    pageQuestion.classList.remove("animate-hidden");
    pageQuestion.classList.add("animate");
    localStorage.setItem('true', scoreTrue);
    localStorage.setItem('false', scoreFalse);
    scoreTrue = +localStorage.getItem('true');
    scoreFalse = +localStorage.getItem('false');
});








objQuest[0] = {
    numQuest: "${randomNumber}",
    question: "src/img/questions/1.jpg",
    a: "A: Lydia и undefined",
    b: "B: Lydia и ReferenceError",
    c: "C: ReferenceError и 21",
    d: "D: undefined и ReferenceError",
    true: "d",
    answer: "Ответ D. Внутри функции мы сперва определяем переменную name с помощью ключевого слова var. Это означает, что переменная будет поднята (область памяти под переменную будет выделена во время фазы создания) со значением undefined по умолчанию, до тех пора пока исполнение кода не дойдет до строчки, где определяется переменная. Мы еще не определили значение name когда пытаемся вывести её в консоль, поэтому в консоли будет undefined. Переменные, определенные с помощью let (и const), также поднимаются, но в отличие от var, не инициализируются. Доступ к ним не возможен до тех пор, пока не выполнится строка их определения (инициализации). Это называется \"временная мертвая зона\". Когда мы пытаемся обратиться к переменным до того момента как они определены, JavaScript выбрасывает исключение ReferenceError."
}
objQuest[1] = {
    numQuest: "${randomNumber}",
    question: "src/img/questions/2.jpg",
    a: "A: 0 1 2 и 0 1 2",
    b: "B: 0 1 2 и 3 3 3",
    c: "C: 3 3 3 и 0 1 2",
    d: "D: -------------",
    true: "c",
    answer: "Ответ: C. Из-за очереди событий в JavaScript, функция setTimeout вызывается после того как цикл будет завершен. Так как переменная i в первом цикле была определена с помощью var, она будет глобальной. В цикле мы каждый раз увеличиваем значение i на 1, используя унарный оператор ++. К моменту выполнения функции setTimeout значение i будет равно 3 в первом примере. Во втором цикле переменная i определена с помощью let. Такие переменные (а также const) имеют блочную область видимости (блок это что угодно между { }). С каждой итерацией i будет иметь новое значение, и каждое значение будет замкнуто в своей области видимости внутри цикла."
}
objQuest[2] = {
    numQuest: "${randomNumber}",
    question: "src/img/questions/3.jpg",
    a: "A: 20 и 62.83185307179586",
    b: "B: 20 и NaN",
    c: "C: 20 и 63",
    d: "D: NaN и 63",
    true: "b",
    answer: "Ответ: B. Заметь, что diameter это обычная функция, в то время как perimeter это стрелочная функция. У стрелочных функций значение this указывает на окружающую область видимости, в отличие от обычных функций! Это значит, что при вызове perimeter значение this у этой функции указывает не на объект shape, а на внешнюю область видимости (например, window). У этого объекта нет ключа radius, поэтому возвращается undefined. "
}
objQuest[3] = {
    numQuest: "${randomNumber}",
    question: "src/img/questions/4.jpg",
    a: "A: 1 и false",
    b: "B: false и NaN",
    c: "C: false и false",
    d: "D: -------------",
    true: "a",
    answer: "Ответ: A. Унарный плюс приводит операнд к числу. true это 1, а false это 0. Строка 'Lydia' это \"истинное\" значение. На самом деле мы спрашиваем \"является ли это истинное значение ложным\"? Ответ: false."
}
objQuest[4] = {
    numQuest: "${randomNumber}",
    question: "src/img/questions/5.jpg",
    a: "A: mouse.bird.size",
    b: "B: mouse[bird.size]",
    c: "C: mouse[bird[\"size\"]]",
    d: "D: Все варианты валидны",
    true: "a",
    answer: "Ответ: A. В JavaScript все ключи объекта являются строками (кроме Symbol). И хотя мы не набираем их как строки, они всегда преобразовываются к строкам под капотом. При использовании квадратных скобок JS замечает [ и продолжает пока не встретит ]. Только после этого он вычислит то, что находится внутри скобок. mouse[bird.size]: Сперва определяется bird.size, которое равно \"small\". mouse[\"small\"] возвращает true. Но с записью через точку так не происходит. У mouse нет ключа bird. Таким образом, mouse.bird равно undefined. Затем мы запрашиваем ключ size, используя точечную нотацию: mouse.bird.size. Так как mouse.bird это undefined, мы запрашиваем undefined.size. Это не является валидным, и мы получаем ошибку типа Cannot read property \"size\" of undefined."
}
objQuest[5] = {
    numQuest: "${randomNumber}",
    question: "src/img/questions/6.jpg",
    a: "A: Hello",
    b: "B: Hey!",
    c: "C: undefined",
    d: "D: ReferenceError",
    true: "a",
    answer: "Ответ A. В JavaScript все объекты являются ссылочными типами данных. Сперва переменная c указывает на объект. Затем мы указываем переменной d ссылаться на тот же объект, что и c. Когда ты изменяешь один объект, то изменяются значения всех ссылок, указывающих на этот объект."
}
objQuest[6] = {
    numQuest: "${randomNumber}",
    question: "src/img/questions/7.jpg",
    a: "A: true false true",
    b: "B: false false true",
    c: "C: true false false",
    d: "D: false true true",
    true: "c",
    answer: "Ответ: C. new Number() это встроенный конструктор функции. И хотя он выглядит как число, это не настоящее число: у него есть ряд дополнительных фич и это объект. Оператор == разрешает приведение типов, он проверяет равенство значений. Оба значения равны 3, поэтому возвращается true. При использовании оператора === значение и тип должны быть одинаковыми. Но в нашем случае это не так: new Number() это не число, это объект. Оба возвращают false."
}
objQuest[7] = {
    numQuest: "${randomNumber}",
    question: "src/img/questions/8.jpg",
    a: "A: orange",
    b: "B: purple",
    c: "C: green",
    d: "D: TypeError",
    true: "d",
    answer: "Ответ: D. Функция colorChange является статичной. Статичные методы не имеют доступа к экземплярам класса. Так как freddie это экземпляр, то статичный метод там не доступен. Поэтому выбрасывается ошибка TypeError."
}
objQuest[8] = {
    numQuest: "${randomNumber}",
    question: "src/img/questions/9.jpg",
    a: "A: {}",
    b: "B: ReferenceError: greetign is not defined",
    c: "C: undefined",
    d: "D: ---------",
    true: "a",
    answer: "Ответ: A. В консоли выведется объект, потому что мы только что создали пустой объект в глобальном объекте! Когда мы вместо greeting написали greetign, интерпретатор JS на самом деле выполнил global.greetign = {} (или window.greetign = {} в браузере). Нужно использовать \"use strict\", чтобы избежать такого поведения. Эта запись поможет быть уверенным в том, что переменная была определена перед тем как ей присвоили значение."
}
objQuest[9] = {
    numQuest: "${randomNumber}",
    question: "src/img/questions/10.jpg",
    a: "A: Ничего, всё в порядке!",
    b: "B: SyntaxError",
    c: "C: undefined",
    d: "D: ReferenceError",
    true: "a",
    answer: "Ответ: A. В JavaScript это возможно, т.к. функции это объекты! (Всё есть объект кроме примитивов). Функция — это специальный тип объекта, который можно вызвать. Кроме того, функция — это объект со свойствами. Свойство такого объекта нельзя вызвать, так как оно не является функцией."
}