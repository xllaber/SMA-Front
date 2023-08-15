import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styles: [
  ]
})
export class DirectivesComponent {
  courses:string[] = ["Java", "Javascript", "C#", "PHP", "TypeScript", "Python"]
  active:boolean = true;

  setActive():void {
    this.active = !this.active;
  }
}
