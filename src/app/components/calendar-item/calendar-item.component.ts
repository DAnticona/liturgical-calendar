import { Component, OnInit } from '@angular/core';
import { CalendarDay, CelebrationResponse } from '../../types/calendar.type';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'app-calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.scss'],
})
export class CalendarItemComponent implements OnInit {
  today = new Date();
  year = this.today.getFullYear();
  month = this.today.getMonth() + 1;
  day = this.today.getDate();
  dayWeek = this.today.getDay();

  calendar: CalendarDay;

  loading: boolean;

  constructor(private calendarService: CalendarService) {
    this.loading = true;

    this.calendar = {
      dayMonth: this.day,
      dayWeek: this.getDayWeek(this.dayWeek),
      monthNumber: this.month,
      monthString: this.getMonthString(this.month),
      year: this.year,
      color: 'NN',
      readings: 'NN',
    };

    this.getCalendarDay(this.year, this.month, this.day);
  }

  ngOnInit() {}

  async getCalendarDay(year: number, month: number, day: number) {
    const { date, season, season_week, celebrations, weekday } =
      await this.calendarService.getCalendarDay(year, month, day);

    this.calendar.celebrationTitle = celebrations[0].title;
    this.calendar.color = this.getColor(celebrations[0].colour);

    this.loading = false;
  }

  // getMainCelebration(celebrations: CelebrationResponse[]): CelebrationResponse {
  //   let main = 99;
  //   let mainCelebration = {};

  //   celebrations.forEach((celebration) => {
  //     if (celebration.rank_num < main) {
  //       mainCelebration = celebration;
  //       main = celebration.rank_num;
  //     }
  //   });

  //   return mainCelebration;
  // }

  getDayWeek(dayWeek: number): string {
    switch (dayWeek) {
      case 0:
        return 'D';
      case 1:
        return 'L';
      case 2:
        return 'M';
      case 3:
        return 'm';
      case 4:
        return 'J';
      case 5:
        return 'V';
      case 6:
        return 'S';
      default:
        return 'NN';
    }
  }

  getMonthString(month: number): string {
    switch (month) {
      case 1:
        return 'ENERO';
      case 2:
        return 'FEBRERO';
      case 3:
        return 'MARZO';
      case 4:
        return 'ABRIL';
      case 5:
        return 'MAYO';
      case 6:
        return 'JUNIO';
      case 7:
        return 'JULIO';
      case 8:
        return 'AGOSTO';
      case 9:
        return 'SEPTIEMBRE';
      case 10:
        return 'OCTUBRE';
      case 11:
        return 'NOVIEMBRE';
      case 12:
        return 'DICIEMBRE';
      default:
        return 'NN';
    }
  }

  getColor(color: string): string {
    switch (color) {
      case 'green':
        return 'ver';
      case 'white':
        return 'bla';
      case 'violet':
        return 'mor';
      case 'red':
        return 'roj';
      default:
        return 'NN';
    }
  }
}
