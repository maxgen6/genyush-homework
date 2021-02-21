var lastname;
var names;
var patronymic;

var age;

do {
    lastname = prompt('Ваша фамилия?');
}
while (lastname == null || lastname == ''); 

do {
    names = prompt('Ваше имя?');
}
while (names == null || names == '');

do {
    patronymic = prompt('Ваше отчество?');
}
while (patronymic == null || patronymic == ''); 

do {
    age = +prompt('Ваш возраст?');
}
while (age == null || age == '');

var sex = confirm('Ваш пол - мужской?');

var dayAge = 365 * age;
var ageAfterFiveYead = age + 5;

var sexMan;

if (sex) {
    sexMan = ' Мужской'
} else {
    sexMan = ' Женский'
}

var pension;

age > 60 ? pension = ' да' : pension = ' нет';

alert(
    'Ваше ФИО: ' + lastname+ ' ' + names+ ' ' + patronymic + '\n' + 
    'ваш возраст в годах:' + age + '\n' + 
    'ваш возраст в днях:' + dayAge +'\n' +  
    'через 5 лет вам будет:' + ageAfterFiveYead + '\n' + 
    'ваш пол:' + sexMan + '\n' + 
    'вы на пенсии:' + 'pension'
);