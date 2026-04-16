import { Component } from '@angular/core';
import { MatButton, MatFabButton, MatIconButton, MatMiniFabButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-exo-button',
  imports: [MatButton, MatDivider, MatIcon, MatIconButton, MatFabButton, MatMiniFabButton],
  templateUrl: './exo-button.html',
  styleUrl: './exo-button.scss',
})
export class ExoButton {}
