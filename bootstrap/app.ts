/**
 * Denova - A Typescript Framework for Deno
 *
 * @package  Denova
 * @author   Alfian Dwi Nugraha <viandwicyber@gmail.com>
 */
import { Application, HTTPKernel, RouteMap, Config, Services } from "../mod.ts"

// define var
let root = Deno.cwd();

// create container
const app = new Application();

// bind a services and variable
app.singleton('denova.path', Deno.cwd());
app.singleton(new Services);
app.singleton('http.kernel', new HTTPKernel);

// load config
await Config.load();

// run services
await app.make('Services').load( Config.get('app').services );


/** export */
export default app;