import { Component } from '@angular/core';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss']
})
export class FormControlsComponent {

  public favoriteColor = '#26ab3c';

  public dealersArray = [
    { Name: 'Dealer 1', Service_id: 'S001', Manager: 'Manager 1' },
    { Name: 'Dealer 2', Service_id: 'S002', Manager: 'Manager 2' },
    { Name: 'Dealer 3', Service_id: 'S003', Manager: 'Manager 3' },
    // Add more data as needed
  ];

  constructor() { }

}
