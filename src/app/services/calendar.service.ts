import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CalendarResponse } from '../types/calendar.type';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  baseUrl = environment.CALENDAR_API_URL;

  constructor(private http: HttpClient) {}

  getCalendarDay(
    year: number,
    month: number,
    day: number
  ): Promise<CalendarResponse> {
    const url = `${this.baseUrl}/${year}/${month}/${day}`;

    return this.http.get<CalendarResponse>(url).toPromise();
  }
}
