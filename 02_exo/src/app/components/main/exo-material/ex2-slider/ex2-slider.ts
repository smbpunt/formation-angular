import { Component } from '@angular/core';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-ex2-slider',
  imports: [MatSlider, MatSliderThumb, MatIcon],
  templateUrl: './ex2-slider.html',
  styleUrl: './ex2-slider.scss',
})
export class Ex2Slider {
  protected sliderValue: number = 50;

  protected get brightness(): string {
    if (this.sliderValue <= 33) return 'brightness_low';
    if (this.sliderValue <= 66) return 'brightness_medium';
    return 'brightness_high';
  }
}
