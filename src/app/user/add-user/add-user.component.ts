import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { RestService } from '../../service/rest-service/rest.service';
import { User } from '../../model/user';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constant } from 'src/app/constant';
import { stringify } from 'querystring';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private fb: FormBuilder, private restService: RestService, private httpClient: HttpClient) { }

  agencyList: any;
  agencyId: number;
 
  addUser = this.fb.group({
    name: [''],
    address: [''],
    email: ['']
  });

  agencyGroup = this.fb.group({
    agency: ['']
  });

  ngOnInit() { 
    this.getAgencyData();
    this.agencyGroup.valueChanges.subscribe(data =>{
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
        let agency = this.agencyList.filter(e => e.name === data.agency);
        this.agencyId = agency[0].id;
      }

      onSubmit(){
        const newUser = this.addUser.value;
        const id = this.agencyId.toString();
        const url = `${environment.apiEndPoint}${Constant.API.ADD_USER}`;
        let param1 = new HttpParams().append('id', id);
        this.httpClient.post(url, newUser, { params: param1}).subscribe(res => console.log(res), err=> console.log(err));
        alert("user added!");

      }
}
