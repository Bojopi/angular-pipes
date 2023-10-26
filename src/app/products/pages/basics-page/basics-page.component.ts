import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'bryana';
  public nameUpper: string = 'BRYANA';
  public fullName: string = 'BrYAna OjOpI';

  public customDate: Date = new Date();

}
