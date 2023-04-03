import { Component, OnInit } from '@angular/core';
import { EmploeeRegService } from '../emploee-reg.service';
import { User }  from '../User';

@Component({
  selector: 'app-emploee-reg',
  templateUrl: './emploee-reg.component.html',
  styleUrls: ['./emploee-reg.component.css']
})
export class EmploeeRegComponent implements OnInit{
   
  user:User=new User("","",0,"");
  message:any;
  constructor(private service:EmploeeRegService){
    
  }

  ngOnInit(){

  }
  public registerNow(){
   let resp=this.service.doRegistration(this.user);
   resp.subscribe(data=>this.message=data);
  }

}
