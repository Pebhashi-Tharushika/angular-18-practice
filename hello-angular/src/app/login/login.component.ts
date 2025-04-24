import { Component } from "@angular/core"; // we have to import this for using @Component({})

@Component({
    standalone:true, //compulsory
    selector:'app-login', //name of the custom html tag
    templateUrl:'./login.component.html', // link html file
    styleUrl:'./login.component.css' // link css file
})
export class LoginComponent{}