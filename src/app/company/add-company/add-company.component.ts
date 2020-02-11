import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RestService } from 'src/app/service/rest-service/rest.service';
import { environment } from 'src/environments/environment';
import { Constant } from 'src/app/constant';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  constructor(private fb: FormBuilder, private restService: RestService, private httpClient: HttpClient, private router: Router) { }

  agencyList: any;
  agencyId: number;
 
  addCompany = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required]
  });

  agencyGroup = this.fb.group({
    agency: ['']
  });

  ngOnInit() { 
    this.getAgencyData();
    this.agencyGroup.valueChanges.subscribe(data =>{
      // const value = JSON.stringify(data);
      console.log("On Change: " + data.agency);
      this.getCompany(data);
    });
    } 

      getAgencyData(){
        const response = this.restService.getAgencyList();
        response.subscribe(data => {
          this.agencyList = data;
          });
      }

      getCompany(data){
        let agency = this.agencyList.filter(e => e.name === data.agency);
        this.agencyId = agency[0].id;
      }

      onSubmit(){
        const newCompany = this.addCompany.value;
        const id = this.agencyId.toString();
        const url = `${environment.apiEndPoint}${Constant.API.ADD_COMPANY}`;
        let param1 = new HttpParams().append('id', id);
        this.httpClient.post(url, newCompany, { params: param1}).subscribe(res => console.log(res), err=> console.log(err));
        alert("Company added!");
        this.router.navigate(['/companyList/', id]);
      }

}
