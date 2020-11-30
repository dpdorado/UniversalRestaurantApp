import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SaucersService } from '../../../services/saucer/saucers.service';

@Component({
  selector: 'app-saucer-register',
  templateUrl: './saucer-register.component.html',
  styleUrls: ['./saucer-register.component.css']
})
export class SaucerRegisterComponent implements OnInit {
  
  saucer: any = {
    name: '',
    description: '',
    restaurant_id: '',
    saucer_category_id: '',
    image: '' ,    
  }

  myForm: FormGroup;

  edit: boolean = false;

  constructor(private saucersService: SaucersService,
    private router: Router, private activatedRoute: ActivatedRoute, public fb: FormBuilder
    ) {
      this.myForm = this.fb.group({
        name: ['', [Validators.required]],
        description: ['', [Validators.required]],
        restaurant_id: ['', [Validators.required]],
        saucer_category_id: ['', [Validators.required]],
        image: ['', [Validators.required]],      
      });
    }

  ngOnInit(): void {
    
  }


  saveNewSaucer (){         
    console.log(this.myForm.value);
    if (this.myForm.valid) {      
      this.saucersService.saveSaucer(this.saucer)
      .subscribe(res => { 
        console.log(res)
        alert("Restaurant registered"); 
        //redirigir a la ruta listar de chef para edittar
        this.router.navigateByUrl('/component/restaurants');
      },       
        err => console.log(err)        
        );  
    } else {
      alert("Field is required");
    }
    
  }

}
