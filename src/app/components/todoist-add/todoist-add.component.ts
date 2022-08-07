import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todoist-add',
  templateUrl: './todoist-add.component.html',
  styleUrls: ['./todoist-add.component.css']
})
export class TodoistAddComponent implements OnInit {

  public canAdd: boolean = false;
  public showForm: boolean = true;

  public task: string = "";

  @Output()
  public onTask: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Sauvegarder le nom de la tache entrer par l'utilisateur
   */
  saveTask(){

    //On récupère l'input et on met sa valeur dans
    //l'attribut task
    this.task =
      (document
        .getElementById("input-task-name") as any)
      .value;

    console.log(this.task);

    //Ensuite on emet cette value qui est le nom de latache
    //pour le parent puisse l'ajouter a la liste des tâches
    this.onTask.emit(this.task);
  }

}


