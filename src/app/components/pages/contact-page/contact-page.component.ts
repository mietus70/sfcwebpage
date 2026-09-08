/**
 * siłka - Modern Contact Page
 */

import { Component, OnInit } from '@angular/core';

interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  note?: string;
  featured?: boolean;
  lat: number;
  lng: number;
  facilities: string[];
  image: string;
}

@Component({
  selector: 'app-kontakt-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  lat: number = 51.9;
  lng: number = 21.62;
  zoom: number = 7;

  selectedLocation: string | null = null;

  locations: Location[] = [
    {
      id: 'deblin',
      name: 'Dęblin',
      address: 'ul. Kowalskiego 20',
      city: '08-530 Dęblin',
      note: 'Budynek szkoły SP4',
      lat: 51.546,
      lng: 21.878,
      facilities: ['Siłownia 24/7', 'Boks', 'Parking'],
      image: 'assets/img/galleries/silka/gallery-01.jpg'
    },
    {
      id: 'ryki',
      name: 'Ryki',
      address: 'ul. Warszawska 3b',
      city: '08-500 Ryki',
      note: 'Budynek szkoły LSW',
      lat: 51.62,
      lng: 21.93,
      facilities: ['Siłownia 24/7', 'Crossfit', 'Szatnie'],
      image: 'assets/img/galleries/silka/gallery-02.jpg'
    },
    {
      id: 'garwolin',
      name: 'Garwolin',
      address: 'ul. Mazowiecka 22',
      city: '08-400 Garwolin',
      note: 'Siedziba główna',
      featured: true,
      lat: 51.9,
      lng: 21.62,
      facilities: ['Siłownia 24/7', 'Boks, MMA', 'Crossfit', 'Zajęcia grupowe'],
      image: 'assets/img/galleries/silka/gallery-03.jpg'
    },
    {
      id: 'warszawa',
      name: 'Warszawa',
      address: 'ul. Wolska 19/25',
      city: '01-201 Warszawa',
      lat: 52.23,
      lng: 20.95,
      facilities: ['Siłownia 24/7', 'Zajęcia grupowe'],
      image: 'assets/img/galleries/silka/gallery-04.jpg'
    }
  ];

  // Contact form
  formData = {
    name: '',
    email: '',
    location: '',
    message: ''
  };
  formSent = false;

  constructor() {}

  ngOnInit() {}

  selectLocation(id: string) {
    this.selectedLocation = id;
    const loc = this.locations.find(l => l.id === id);
    if (loc) {
      this.lat = loc.lat;
      this.lng = loc.lng;
      this.zoom = 15;
    }
  }

  submitForm() {
    // Placeholder - no backend
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.formSent = true;
      setTimeout(() => {
        this.formSent = false;
        this.formData = { name: '', email: '', location: '', message: '' };
      }, 3000);
    }
  }
}
