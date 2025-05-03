import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MlService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  predictRevenue(data: any) {
    return this.http.post(`${this.apiUrl}/predict`, data);
  }

  analyzeReview(data: any) {
    return this.http.post(`${this.apiUrl}/review`, data);
  }

  classifyImage(formData: FormData) {
    return this.http.post(`${this.apiUrl}/box`, formData);
  }
}
