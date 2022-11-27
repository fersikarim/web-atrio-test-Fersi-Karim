import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';


@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})

export class ProgressBarComponent implements OnChanges {

  @ViewChild('progressBar') progressBar!: ElementRef;

  /** progressPercent provide the value */
  public progressTotal = 0;

  /** bgColor provide the background color of progressbar */
  public bgColor = '';

  /** title provides the displaying text */
  @Input() public title = 'Display title';

  /** Percent value to pass to input */
  @Input() public percent = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const currentValue = changes['percent'].currentValue;
    setTimeout(() => {
      const width = this.progressBar.nativeElement.offsetWidth;
      this.progressTotal = (currentValue / 100) * width;
      this.bgColor = this.getBgColor(this.percent);
    });
  }



  /**
   * Get the color of current progress bar
   */
  private getBgColor(value: number): string {
    if (value >= 75 && value < 100) {
      return '#30DB63';
    }

    if (value > 50 && value < 75) {
      return '#60E8B6';
    }

    if (value > 25 && value <= 50) {
      return '#60ADE8';
    }

    if (value >= 0 && value <= 25) {
      return '#7160E8';
    }

    return "";
  }


}






