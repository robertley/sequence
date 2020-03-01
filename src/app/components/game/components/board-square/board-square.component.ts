import { Component, OnInit, Input } from '@angular/core';
import { Boardspace } from 'src/app/interfaces/boardspace.interface';

@Component({
  selector: 'app-board-square',
  templateUrl: './board-square.component.html',
  styleUrls: ['./board-square.component.scss']
})
export class BoardSquareComponent implements OnInit {

  @Input()
  boardspace: Boardspace;

  constructor() { }

  ngOnInit(): void {
  }

}
