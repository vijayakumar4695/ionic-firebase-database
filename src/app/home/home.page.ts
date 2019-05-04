import { Component } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';
import swal from 'sweetalert';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myDate: String = new Date().toISOString();
register(value){
  console.log(value)
  console.log(this.myDate)
}
todos: Todo[];

constructor(private todoService: TodoService,private navCntl:NavController ) { }
 
ngOnInit() {
  this.todoService.getTodos().subscribe(res => {
    this.todos = res;
  });
}

remove(item) {
  this.todoService.removeTodo(item.id);
}
onDelete(id:string){
  if(confirm){
    swal("Deleted Successfully")
this.todoService.removeTodo(id)
  }
}

add(){
 this.navCntl.navigateBack("/details")  
}
}
