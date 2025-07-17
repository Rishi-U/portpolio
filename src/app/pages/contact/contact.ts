import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name = '';
  email = '';
  location = '';
  phone = '';
  message = '';
  submitted = false; // ✅ success flag

  constructor(private http: HttpClient) {}

  onSubmit() {
    const formData = new FormData();
    formData.append('entry.2005620554', this.name);
    formData.append('entry.1045781291', this.email);
    formData.append('entry.1065046570', this.location);
    formData.append('entry.1166974658', this.phone);
    formData.append('entry.839337160', this.message);

    this.http.post(
      'https://docs.google.com/forms/d/e/1FAIpQLScCsTgqqKt-RmcC5a1fKEH2Y3RyMDnM2KrtBmUZgqzYxhwv9Q/formResponse',
      formData,
      { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) }
    ).subscribe(
      () => {
        this.submitted = true;  // ✅ Show success
        this.name = this.email = this.location = this.phone = this.message = '';
      },
      error => console.error('Error!', error)
    );
  }
}