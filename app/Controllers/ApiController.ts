import UserModel from "../User.ts";

export class ApiController {

    //  constructor
    constructor() {
    }

    // index
    async index() {
        return await UserModel.all();
    }

    // show
    async show(request: any, params: any) {
        return await UserModel.find(params.id);
    }
}