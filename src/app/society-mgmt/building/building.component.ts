import { Component, OnInit } from '@angular/core';
import { UserService } from "./../user.service"
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit, OnChanges {
  society; buildingList;
  param1; societyInfo: any;
  constructor(public _userService: UserService, public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBuildingList();
  }
  ngOnChanges() {
    this.getBuildingList();
  }
  getBuildingList() {
    //this.param1 = this.route.snapshot.paramMap.get('societyid');
    this.route.params.subscribe((value) => {
      this.param1 = value["societyid"]; // get param
      console.log("this.param1:::" + JSON.stringify(value));
      this._userService.getBuilding(this.param1).subscribe((data) => {
        this.buildingList = data.dbResponse.rows;
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
}
