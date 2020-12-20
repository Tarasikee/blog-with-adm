import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AlertService} from '../../services/alert.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.sass']
})
export class AlertComponent implements OnInit, OnDestroy {

  @Input() delay = 5000;
  public text!: string;
  public type!: string;
  aSub!: Subscription;

  constructor(
    private alertService: AlertService
  ) {
  }

  ngOnInit(): void {
    this.alertService.alert$.subscribe(alert => {
      this.type = alert.type;
      this.text = alert.text;

      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        this.text = '';
      }, this.delay);
    });
  }

  ngOnDestroy(): void {

  }
}
