/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />

import {Component} from "angular2/core"
import {MyModel} from "./model"

@Component({
    selector: `my-app`,
    template: `<div>Hello from {{MyModel.compiler}}</div>`
})
export class MyApp
{
    model = new MyModel();
    getCompiler()
    {
        return this.model.compiler;
    }
}