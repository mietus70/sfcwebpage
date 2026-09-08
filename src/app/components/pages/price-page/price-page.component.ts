/**
 * siłka - Modern Pricing Page
 */

import { Component, OnInit } from '@angular/core';

interface PricingOption {
  id: string;
  label: string;
  days: number;
  price: number;
  perDay: string;
  save?: string;
  badge?: string;
  featured?: boolean;
  features: string[];
}

@Component({
  selector: 'app-cennik-page',
  templateUrl: './price-page.component.html',
  styleUrls: ['./price-page.component.css']
})
export class PricePageComponent implements OnInit {

  selectedPeriod: string = '90';

  pricingOptions: PricingOption[] = [
    {
      id: '30',
      label: '30 dni',
      days: 30,
      price: 120,
      perDay: '4,00 zł / dzień',
      badge: 'Standard',
      features: ['Siłownia 24/7', 'Szatnie i prysznice', 'Dostęp do sprzętu', 'Bez umowy']
    },
    {
      id: '90',
      label: '90 dni',
      days: 90,
      price: 300,
      perDay: '3,33 zł / dzień',
      save: 'Oszczędzasz 60 zł',
      badge: 'Najpopularniejszy',
      featured: true,
      features: ['Siłownia 24/7', 'Szatnie i prysznice', 'Dostęp do sprzętu', 'Najlepsza cena za dzień', 'Dostęp do wszystkich lokalizacji']
    },
    {
      id: '360',
      label: '360 dni',
      days: 360,
      price: 960,
      perDay: '2,66 zł / dzień',
      save: 'Oszczędzasz 480 zł',
      badge: 'Premium',
      features: ['Siłownia 24/7', 'Szatnie i prysznice', 'Dostęp do sprzętu', 'Cały rok bez przerwy', 'Dostęp do wszystkich lokalizacji', 'Pierwszeństwo rezerwacji zajęć']
    }
  ];

  constructor() {}

  ngOnInit() {}

  selectPeriod(id: string) {
    this.selectedPeriod = id;
  }

  get selectedOption(): PricingOption {
    return this.pricingOptions.find(o => o.id === this.selectedPeriod) || this.pricingOptions[1];
  }

  get allOptions(): PricingOption[] {
    return this.pricingOptions;
  }
}
