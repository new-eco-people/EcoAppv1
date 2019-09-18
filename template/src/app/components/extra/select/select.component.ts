import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';

import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  
  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
];

cities2 = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
];

cities3 = [
    {id: 1, name: 'Vilnius', avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'},
    {id: 2, name: 'Kaunas', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15'},
    {id: 3, name: 'Pavilnys', avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'}
];

cities4 = [];

users = [
    {id: 'anjmao', name: 'Anjmao'},
    {id: 'varnas', name: 'Tadeus Varnas'}
];

selectedAccount = 'Adam'
accounts = [
    { name: 'Adam', email: 'adam@email.com', age: 12, country: 'United States' },
    { name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'United States' },
    { name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Argentina' },
    { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
    { name: 'Adrian', email: 'adrian@email.com', age: 21, country: 'Ecuador' },
    { name: 'Wladimir', email: 'wladimir@email.com', age: 30, country: 'Ecuador' },
    { name: 'Natasha', email: 'natasha@email.com', age: 54, country: 'Ecuador' },
    { name: 'Nicole', email: 'nicole@email.com', age: 43, country: 'Colombia' },
    { name: 'Michael', email: 'michael@email.com', age: 15, country: 'Colombia' },
    { name: 'Nicolás', email: 'nicole@email.com', age: 43, country: 'Colombia' }
];

selectedCity: any;
selectedCityIds: string[];
selectedCityName = 'Vilnius';
selectedCityId: number;
selectedUserIds: number[];

constructor() {
    this.create10kCities();
}

ngOnInit() {
}


addCustomUser = (term) => ({id: term, name: term});

private create10kCities() {
    this.cities4 = Array.from({length: 10000}, (value, key) => key)
                        .map(val => ({
                          id: val,
                          name: `city ${val}`
                        }));
}
}
