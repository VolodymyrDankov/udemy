//function ()

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());

let ten = "10.4px";
console.log(Math.round(ten));
console.log(parseInt(ten));
console.log(parseFloat(ten));

function calc(a,b){
    return(a+b);
}

    //let calc = (a,b) => a+b  такая функция не имеет вызова
console.log(calc(4,10));


                                // Call back functions

function first(){
    setTimeout(function(){
        console.log(1);
    }, 500);
}

function second (){
    console.log(2);
}

first();
second();

function learnJS(lang, callback){
    console.log("Я учу " + lang);
    callback();
}

learnJS("JavaScript", function() {
    console.log("Я прошел третий урок!");
});

//                                     Обьекты! 

let options = {   // Обьект
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.height);
options.bool = true;       // Добавление параметров 
options.color = {          // Обьект в обьекте
    colors: "red",
    bg: "blue"
};
delete options.bool;    // Удаление свойства

for (let key in options) {
    console.log ("Свойство " + key + " имеет значение " + options[key]); 
     // Перечисление свойств 
}
console.log(options);
console.log(Object.keys(options).length);                 // Колличество свойств