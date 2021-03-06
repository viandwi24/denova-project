import "https://cdn.pika.dev/@abraham/reflection@^0.7.0";
import {
    Application as ApplicationContainer,
    HTTPKernel,
    ConsoleKernel,
    Services,
    version,
    Config,
    RouteCollection,
    Middleware,
} from "../mod.ts";
import { BootstrapConfig, root } from "./config.ts";

/**
 * Create a container
 * Denova work in a Container, just Make Application Container for all services
 */
const app = new ApplicationContainer();

/**
 * Bootstrap a config
 * for Config and any var, we bootstrapping for all config.
 */
await BootstrapConfig();

/**
 * Bind a service
 * This a standart service kernel, bind to container and resolve in another time.
 */
app.bind('denova.path', root);
app.bind('denova.version', version);
app.bind(HTTPKernel);
app.singleton(Middleware);
app.bind(ConsoleKernel);
app.singleton(RouteCollection);
app.singleton(Services);

/**
 * Run a services
 * we resolve services and run services
 */
let services = Config.get('app').services;
await app.make(Services).run(services);

/**
 * Load middleware
 */;
await app.make(Middleware).load();



/** export application container */
export const Application = app;
export { HTTPKernel, ConsoleKernel };