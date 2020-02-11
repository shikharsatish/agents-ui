import { Component, OnInit, Input } from '@angular/core';
import { RestService } from 'src/app/service/rest-service/rest.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constant } from 'src/app/constant';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {

  constructor(private restService: RestService, private route: ActivatedRoute, private fb: FormBuilder, private httpClient: HttpClient) { }

  companyList: any;
  companyId: any;
  companyName: string;
  companyAddress: string;

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      this.companyId = params['id'];
    })
    this.getCompanyList();
  }
  addCompany = this.fb.group({
    name: [''],
    address: ['']
  });


  getCompanyList(){
    this.restService.getCompanyList().subscribe(data =>{
      this.companyList = data;
      console.log(this.companyList);
      const company = this.companyList.filter(e=> e.id == this.companyId);
      this.companyName = company[0].name;
      this.companyAddress = company[0].address;
      console.log(this.companyName, this.companyAddress);
    //   console.log(this.companyList);
    // this.getCompany(this.companyList);
      });
  }

  // getCompany(companyList){
  //   const company = companyList.filter(e=> e.id === this.companyId);
  //   this.companyName = company[0].name;
  //   this.companyAddress = company[0].address;
  //   }

    onSubmit(){
      const updatedValue = this.addCompany.value;
      const url = `${environment.apiEndPoint}${Constant.API.UPDATE_COMPANY}`;
      const id = this.companyId;
      let param1 = new HttpParams().append('id', id);
      this.httpClient.put(url, updatedValue, {params: param1}).subscribe(res => console.log(res), error => console.log(error));
    }
}
