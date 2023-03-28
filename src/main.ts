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