import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  standalone: true,
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [CommonModule],
})
export class TodoComponent implements OnInit {
  public todos: Todo[] = [
    { label: 'Me réveiller', done: true },
    { label: 'Prendre petit déjeuner', done: false },
    { label: "M'habiller", done: true },
    { label: 'Brossage de dent', done: true },
    { label: 'Papier', done: false },
  ];

  constructor() {}

  mafonction() : void {
    console.log('Tu as clique')
  }

  ngOnInit() {}
}
