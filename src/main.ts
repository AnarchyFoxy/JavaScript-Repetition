// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

console.log("Hola!");
console.log("Jedyny i jego własność");
console.log("To jest polecenie");
console.log("To równie jest polecenie");

// functions
let myFunc = function ()
{
    console.log("Siemaneczko, polecenie w funkcji.");
}

myFunc();

let hello_func = function(name : string, weather : string)
{
    console.log("Cześć " + name + "!");
    console.log("Dzisiaj mamy " + weather + " dzień.");
}

hello_func("Astryda", "słoneczny");

let hello_func_2 = function(name : string, weather = "śniezny")
{
    console.log("Siemaneczko, " + name + "!");
    console.log("Dzisiaj mamy " + weather + " dzień c:");
}

hello_func_2("Astryda");

let hello_func_3 = function(name : string, weather : string, ...extra_args : any)
{
    console.log("Czołem " + name + "!");
    console.log("Dzisiaj mamy " + weather + " dzień.");
    for (let i = 0; i < extra_args.length; i++)
    {
        console.log("Argument dodatkowy: " + extra_args[i]);
    }
}

hello_func_3("Astryda", "deszczowy", "pizza", "lazania", "schabowy")

let another_func = function(name : string)
{
    return ("No co tam " + name + "!");
}

console.log(another_func("Astryda"));


let another_one_func = function(name_function : any)
{
    return ("Ahoj " + name_function() + "!");
}

console.log(another_one_func(function ()
{
    return "Astryda";
}));

let print_name = function(name_function : any, print_function : any)
{
    print_function(another_one_func(name_function));
}

print_name(function () { return "Astryda" }, console.log);

let my_func = (name_function : any) => ("Siemanko " + name_function() + "!");
let print_name_2 = (name_function : any, print_function : any) => print_function(my_func(name_function));

print_name_2(function () { return "Astryda" }, console.log);

// variables and types
let message_function = function (name : any, weather : any)
{
    let message = "Witaj, !" + name + "!";
    if (weather == "słoneczny")
    {
        let message = "Dzisiaj mamy straszny dzień.";
        console.log(message);
    }
    else
    {
        let message = "Dzisiaj mamy " + weather + " dzień.";
        console.log(message);
    }
    console.log(message);
}

message_function("Astryda", "śniezny");

let my_func_2 = function(name : string) {
    let my_local_var : string = "śnieznie";
    let inner_function = function () {
        return ("Witaj " + name + "! Dzisiaj mamy " + my_local_var + " cosik, no nie?");
    }
    return inner_function();
}

console.log(my_func_2("Astryda"));

let message_function_2 = function (weather : string) {
    let message = `Dzisiaj mamy ${weather} dzień.`;
    console.log(message)
}

message_function_2("śniezny");

let my_name = "Astryda";
if (my_name == "Astryda")
{
    console.log("Moje imię to " + my_name);
}
else if (my_name = "Andromeda")
{
    console.log("Imię to Andromeda");
}
else
{
    console.log("Nie mam pojęcia o co biega");
}

switch (my_name)
{
    case "Astryda":
        console.log("Moje imię to " + my_name);
        break;
    case "Andromeda":
        console.log("Moje imię to Andromeda.");
        break;
    default:
        console.log("Imię to ani Astryda, ani Andromeda");
        break;
}

let first_val = 5;
let second_val = "5";

// if (first_val === second_val)
// {
//     console.log("Obie wartości są takie same.");
// }
// else
// {
//     console.log("Wartości nie są takie same.");
// }

let my_data_1 = (5).toString() + String(5);
let my_data_2 = 5 + "5";

console.log("Wynik 1: " + my_data_1);
console.log("Wynik 2: " + my_data_2);

let first_val_1 = "5";
let seconv_val_2 = "5";
let result = Number(first_val_1) + Number(seconv_val_2);
console.log("Wynik: " + result);

let my_array = new Array();
my_array[0] = "Astryda";
my_array[1] = "Gazela";
my_array[2] = true;

console.log("Moje imię to: " + my_array[0]);
console.log(my_array[2]);
my_array[2] = "wtorek";
console.log(my_array[2]);

for (let i = 0; i < my_array.length; i++)
{
    console.log("indeks " + i + " = " + my_array[i]);
}
console.log("-------")
my_array.forEach((value, index) => console.log("Indeks " + index + ": " + value));

let other_array = [...my_array, "Gaxelek", "drapu-drapu", false, "klika sobie"]

for (let i = 0; i < other_array.length; i++)
{
    console.log(`Element tablicy o indeksie ${i}: ${other_array[i]}`)
}

let products =
[
    { name: "Python. Wprowadzenie", price: 199, stock: 10 },
    { name: "Python. Instrukcje dla programisty", price: 100, stock: 5 },
    { name: "Język C. Szkoła programowania", price: 150, stock: 100 },
    { name: "Język C++. Szkoła programownia", price: 250, stock: 1 },
    { name: "Programowanie w języku Rust", price: 199, stock: 0 },
];

let total_value = products
    .filter(item => item.stock > 0)
    .reduce((prev, item) => prev + (item.price * item.stock), 0);

console.log("razem: " + total_value.toFixed(2) + " zł.");
