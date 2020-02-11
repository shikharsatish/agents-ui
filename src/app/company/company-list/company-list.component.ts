import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest-service/rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  constructor(private restService: RestService, private route: ActivatedRoute, private router: Router) { }

  companyList: any;
  agencyId: any;
  agencyList: any;

  ngOnInit() {
    // this.getAllCompany();
    this.getAgency();
    this.agencyId = this.route.snapshot.params['id'];
  }

  // getAllCompany(){
  //   this.restService.getCompanyList().subscribe(data =>{
  //     this.companyList = data;
  //   });
  // }
  getAgency(){
  this.restService.getAgencyList().subscribe(data =>{
    this.agencyList = data;
    this.getCompany();
  });
  }

  getCompany(){
    const agency = this.agencyList.filter(e => e.id == this.agencyId);
    this.companyList = agency[0].companyList;
  }

  addNewCompany(){
    this.router.navigate(['/add-company']);
  }
}
