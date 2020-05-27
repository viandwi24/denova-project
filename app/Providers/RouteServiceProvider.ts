import { RouteMap, app } from "../../mod.ts";

export default class RouteServiceProvider {

    register() {
    }

    boot() {
        let root = app().make('denova.path');
        RouteMap.load(root + "/routes/web.ts");
    }
}