import { Component, OnInit } from '@angular/core';
import { UserService } from "./../user.service"
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-flats',
  templateUrl: './flats.component.html',
  styleUrls: ['./flats.component.css']
})
export class FlatsComponent implements OnInit, OnChanges {
  society; flatList;
  isClosedValue = false;
  model: any = {};
  errmsg;
  payAmount;
  param1;param2; societyInfo: any;responseData:any;
  flatObj:any;
  constructor(public _userService: UserService, public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getflatList();
  }
  ngOnChanges() {
    this.getflatList();
  }
  getflatList() {
    this.route.params.subscribe((value) => {
      this.param1 = value["societyid"]; // get param
      this.param2 = value["buildingid"]; // get param
      this._userService.getFlatList(this.param2).subscribe((data) => {
        this.flatList = data.dbResponse.rows;
      },
      error => {
        console.log(error);
        this.society = error.message;
      });

      this._userService.getSocietyInfo(this.param1).subscribe((data) => {
        this.societyInfo = data.dbResponse.rows;
      },
        error => {
          console.log(error);
          this.society = error.message;
        });
    });
  }
  paymentMethod(payAmount){

    this.flatObj.pendingPayment = payAmount;
    console.log(payAmount , this.flatObj.pendingPayment);
    console.log(this.flatObj);
    
    this._userService.putFlatPayment(this.flatObj).subscribe(
      (data) => {
      this.responseData = data.dbResponse.rows;
      },
      error => {
        console.log(error);
        this.errmsg=error.message;
      },
      () => {
        this.isClosedValue = true
        this.getflatList();
      });
  }
  paymentID(flatObj){
    this.flatObj =flatObj;
  }
}
