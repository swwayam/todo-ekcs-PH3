import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { BtnComponent } from "../btn/btn.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [CommonModule, BtnComponent, RouterLink],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
})


export class NavbarComponent{

}