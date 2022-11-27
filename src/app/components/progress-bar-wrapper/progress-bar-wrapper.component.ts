import { Component, OnInit } from '@angular/core';
export const list = [
  {
    title: 'Initialisation du test technique',
    value: 50,
  },
  {
    title: 'Avancement de la phase de developpement',
    value: 25,
  },
];

@Component({
  selector: 'app-progress-bar-wrapper',
  templateUrl: './progress-bar-wrapper.component.html',
  styleUrls: ['./progress-bar-wrapper.component.scss']
})

export class ProgressBarWrapperComponent implements OnInit {
  /** Current list of progressbar */
  public progressBarList = list;

  constructor() { }

  ngOnInit(): void {
  }

  reset() {
    this.progressBarList = this.progressBarList.map((progressItem) => {
      progressItem.value = 0;

      return progressItem;
    });
  }

  add(percentValue:number) {
    this.progressBarList = this.progressBarList.map((progressItem) => {
      progressItem.value = progressItem.value + percentValue;

      if (progressItem.value >= 100) {
        progressItem.value = 100;
      }

      if (progressItem.value >= 100) {
        progressItem.value = 100;
      }

      return progressItem;
    });
  }

}
