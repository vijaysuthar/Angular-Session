import { Component } from '@angular/core';
import { User } from 'app/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  student :string[] =['vijay','Parshav','Vivek'];

  displayuser(name:string)
  {
    
  alert(name);
  }
} 