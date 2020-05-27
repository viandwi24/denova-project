import { Router } from "../mod.ts";

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteService.
|
*/

// use closure / anonymous function :
Router.get("/", () => {
    return "Hello World!";
});

// or, use controller :
Router.get("/home", "HomeController@index");

// return object, will automatically convert to json
Router.get("/my-api", () => {
    return { name: 'Alfian', address: "Kab. Mojokerto, Jawa Timur" };
});