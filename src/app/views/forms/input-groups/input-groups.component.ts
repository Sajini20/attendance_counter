import { Component } from '@angular/core';

@Component({
  selector: 'app-input-groups',
  templateUrl: './input-groups.component.html',
  styleUrls: ['./input-groups.component.scss']
})
export class InputGroupsComponent {
  formData: any = {}; // Define formData object to hold form data

  constructor() { }

  submitForm() {
    // Implement your form submission logic here
    console.log('Form Data:', this.formData);
    // You can perform any additional operations like sending data to server, etc.
  }
}
