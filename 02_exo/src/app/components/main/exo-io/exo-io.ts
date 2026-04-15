import { Component } from '@angular/core';
import { Parent } from './parent/parent';

@Component({
  selector: 'app-exo-io',
  imports: [Parent],
  templateUrl: './exo-io.html',
  styleUrl: './exo-io.scss',
})
export class ExoIo {}
