import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  allUsers: User[];
  
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
    console.log(this.allUsers);
  }


  getAllUsers(){
    this.userservice.getAllUsers().subscribe(
      (data: User[]) => {
        this.allUsers = data;
      });
  }

  deleteUser(id: number){
     this.userservice.deleteUser(id).subscribe(
       (data: User) => {
         this. getAllUsers();
       }
     );
}

update(user){
    this.userservice.currentUser = Object.assign({}, user);
  }
}
