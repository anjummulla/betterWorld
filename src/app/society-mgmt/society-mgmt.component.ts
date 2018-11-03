import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-society-mgmt',
  templateUrl: './society-mgmt.component.html',
  styleUrls: ['./society-mgmt.component.css']
})
export class SocietyMgmtComponent implements OnInit {
  modalVar;
  constructor() { }

  ngOnInit() {
  }

  ShowModal(param1){
    this.modalVar = param1;    
  }
}
