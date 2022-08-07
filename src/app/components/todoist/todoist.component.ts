import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoist',
  templateUrl: './todoist.component.html',
  styleUrls: ['./todoist.component.css'],
})
export class TodoistComponent implements OnInit {

  title: string = "Mon Projet Todoist";

  /**
   * Contient toutes les taches
   */
  public tasks: Array<string> = [
    "Tache 1", "Tache 2"
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
