import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RestService } from '../service/rest.service';
import { User } from '../modal/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private fb: FormBuilder, private restService: RestService) { }

  agencyList: any;
  agencyId: number;
 
  addUser = this.fb.group({
    name: [''],
    address: [''],
    email: [''],
    agency: ['']
  });

  ngOnInit() { 
    this.getAgencyData();
    this.addUser.valueChanges.subscribe(data =>{
      // const value = JSON.stringify(data);
      console.log("On Change: " + data.agency);
      this.getUser(data);
    });
    } 

      getAgencyData(){
        const response = this.restService.getAgencyList();
        response.subscribe(data => {
          this.agencyList = data;
          });
      }

      getUser(data){
        let agency = this.agencyList.filter(e=> e.name === data.agency);
        this.agencyId = agency[0].id;
      }

      onSubmit(newUser: User){
        
      }
}
