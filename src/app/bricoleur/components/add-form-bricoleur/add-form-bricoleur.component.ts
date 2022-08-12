import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BricoleurService } from '../../services/bricoleur.service';

@Component({
  selector: 'app-add-form-bricoleur',
  templateUrl: './add-form-bricoleur.component.html',
  styleUrls: ['./add-form-bricoleur.component.css']
})
export class AddFormBricoleurComponent implements OnInit {
  villes: any; 
  sousServices:any;
  experience:Array<Number>=[];
   public addBricoleurForm!: FormGroup<any>;
  constructor(private formBuilder:FormBuilder,
    private bricoService : BricoleurService) { }

  ngOnInit(): void {
    this.bricoService.get("/villes/getvilles").subscribe((villes)=>{
      this.villes= villes;
      console.log("villes");
      console.log(this.villes);
      
    }); 
    this.bricoService.get("/sousservices/getsousservices").subscribe((sousServices)=>{
      this.sousServices= sousServices;
    }); 
 for(let i=1; i<=50;i++){
   this.experience.push(i);
 }
 // Add Bricoleur form validation

 this.addBricoleurForm = this.formBuilder.group({
  nom: ["", [Validators.required]],
  prenom: ["", [Validators.required]],
  cin: ["", [Validators.required]],
  genre: ["", [Validators.required]],
  email: ["", [Validators.required]],
  password: ["", [Validators.required]],
  typeBricolage: ["", [Validators.required]],
  telephone: ["", [Validators.required]],
  adresse: ["", [Validators.required]],
  ville: ["", [Validators.required]],
  experience: ["", [Validators.required]],
  apropos:["", [Validators.required]],
 })
}

 // Add bricoleur submit call

 addBricoleur(){
  const config = {
    headers: {
      "content-type": "application/json;multipart/form-data;charset=UTF-8",
      Accept: "application/json",
      "Access-Control-Allow-Methods": "GET; POST; PUT; DELETE",
      "Access-Control-Allow-Origin": "*",
    },
  };
  let bricolleur={
    nomb:this.addBricoleurForm.get(['nom'])?.value,
    prenomb:this.addBricoleurForm.get(['prenom'])?.value,
    cinb:this.addBricoleurForm.get(['cin'])?.value,
    genre:this.addBricoleurForm.get(['genre'])?.value,
    email:this.addBricoleurForm.get(['email'])?.value,
    motpasseb:this.addBricoleurForm.get(['password'])?.value,
    idsd:this.addBricoleurForm.get(['typeBricolage'])?.value,
    telb:this.addBricoleurForm.get(['telephone'])?.value,
    adresseb:this.addBricoleurForm.get(['adresse'])?.value,
    idv:this.addBricoleurForm.get(['ville'])?.value,
    anneexperienceb:this.addBricoleurForm.get(['experience'])?.value,
    aproposb:this.addBricoleurForm.get(['apropos'])?.value,
  }

  console.log("bricolleur: (--)");
  console.log(bricolleur);
  
  
  console.log(this.addBricoleurForm.value);
  this.bricoService.save(bricolleur, config).subscribe((bricoleur)=>{
    console.log("subscribe save .....");
    console.log(bricoleur);
  }); 
  
  
  }
  }



