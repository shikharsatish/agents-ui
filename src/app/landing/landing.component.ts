import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Constant } from 'src/app/constant';
import { RestService } from '../service/rest-service/rest.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  agencyList: any;
  userList: any;
  agencyId: any;
  flag: boolean = false;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router, 
    @Inject(RestService) private restService: RestService) { }

  landingPageForm = this.fb.group({
    agency: ['']
  })

  ngOnInit() {
    this.getAgencyData();
      this.landingPageForm.valueChanges.subscribe(data =>{
        // const value = JSON.stringify(data);
        console.log("On Change: " + data.agency);
        this.getUser(data);
        this.flag = true;
      })
  
  }
  addNew(form: any){
    console.log(form);

  }

  //'http://localhost:8090/agency/agencyList'
  
  getAgencyData(){
  this.restService.getAgencyList().subscribe(data =>{
    this.agencyList = data
  });
  }

  
  getUser(data){
    let agency = this.agencyList.filter(e=> e.name === data.agency);
    this.userList = agency[0].userList;
    this.agencyId = agency[0].id;
    console.log(agency[0].id);
  }

  addNewUser(){
    this.router.navigate(['/addUser']);
  }

  proceedOnClick(){
    this.router.navigate(['/companyList', this.agencyId]);
  }
}
