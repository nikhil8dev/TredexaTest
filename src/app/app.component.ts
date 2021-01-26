import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
   list = [];
  change_Question = "";
  change_Answer = "";
   private Item;
  form = new FormGroup({
    Question: new FormControl('', Validators.required),
    Answer: new FormControl('', Validators.required),
    correct: new FormControl(null),
    Incorrect: new FormControl(null)
   });


    constructor(private http:HttpClient) { }

  
    
    ngOnInit() {
    }
  
    onSubmit(){
      let url = "http://httpbin.org/post";
      this.http.post(url, this.form.value ).toPromise().then((data:any)=>{
    
        this.list.push(data.json )
        console.log("post Data" ,data)
      })

      this.form.reset()
    }


    Correct(i){
   i.correct = true 
     
    }

    Incorrect(i){
      i.Incorrect = true
    }


    RemoveWord(i){
     this.list.splice(i);
    }

    update(item){
     this.change_Answer =  item.Answer
     this.change_Question = item.Question 
     this.Item = item
      console.log("update It" , item)
    }

    change(){
      this.Item.Question = this.change_Question
      this.Item.Answer = this.change_Answer
      console.log( 'change value', this.change_Answer,this.change_Question )
    }
   
}
