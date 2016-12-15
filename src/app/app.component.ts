import { Component } from '@angular/core';
import { User } from 'app/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  outputPath:string = 'www.google.com';
  new_selectedUser:User;
  users:User[] = [
                    {'id':1,'name':'vijay',phone_no:7854236514,'image':'http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg'},
                    {'id':2,'name':'parshav',phone_no:8965214569,'image':'https://organicthemes.com/demo/profile/files/2012/12/profile_img.png'},
                    {'id':3,'name':'vicky',phone_no:8512365214,'image':'http://www.gantrypark.com/Portals/12/Users/034/82/53282/michael-asmar.jpg'} 
  ];


   display_user(newseluser: User)
   {
     this.new_selectedUser = newseluser;
   }

  // student :string[] =['vijay','Parshav','Vivek'];
  // SelectedUser:string = 'eternal';

  // displayuser(name:string)
  // {
    
  //   this.SelectedUser = name;
  // }
} 