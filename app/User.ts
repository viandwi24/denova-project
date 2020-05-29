import { Eloquent } from "../../denova/mod.ts";

export class User extends Eloquent.Model {
    protected table: string = 'users';
    protected fillable: Array<string> = ['name', 'email'];

}

export default new User();