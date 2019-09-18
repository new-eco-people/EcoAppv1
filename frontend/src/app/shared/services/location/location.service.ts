import { Injectable } from '@angular/core';
import { BaseApiService } from '../base-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService extends BaseApiService {

  constructor(private http: HttpClient) {
    super('location')
  }

  getCountries() {
    return this.http.get(`${this.api}/get-countries`);
  }

  getStates(countryId: string) {
    return this.http.get(`${this.api}/get-states?countryId=${countryId}`);
  }
}
