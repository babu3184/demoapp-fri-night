import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountryService } from '../shared/country.service';
import { UserService } from '../shared/user.service'
import { Country } from '../model/country.model';
import { States } from '../model/states.mode';
import { User } from '../model/user.model';
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  optionvalue = 'Address';
  formdata: any;
  countryList: Array<any>;
  states: Array<any>;

  constructor(public userservice: UserService,
              public countryservice: CountryService) { }

 url = 'https://www.pngitem.com/pimgs/m/294-2947257_interface-icons-user-avatar-profile-user-avatar-png.png';


  ngOnInit(): void {
    this.getAllCountry();
  }

  onChange(event) {
    this.optionvalue = event.target.value;
  }
  
  selectFile(event){
    if (event.target.files){
      let reader = new FileReader();
      reader. readAsDataURL(event.target.files[0]);
      reader. onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  };

  getAllCountry(){
    this.countryservice.getAllCountry().subscribe(
       (data: Country[]) => {
         this.countryList = data;
    });
  }

  changeCountry(count) {
    this.states = this.countryList.find(con => con.country == count).states;
  }

crateuser(user: User){
    console.log(user);
  }

  
}
