import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { ProductsService } from '../../products/services/products.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public addProductsFrom: FormGroup;
  public uploadPercent: Observable<number>;
  public urlImageObservable: Observable<string>;
  public urlImage: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private storage: AngularFireStorage,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  invalidForm(field: string): boolean {
    return this.addProductsFrom.get(field).invalid && this.addProductsFrom.get(field).touched;
  }

  createForm(): void {
    this.addProductsFrom = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: ['', Validators.required],
      img: ['', Validators.required]
    });
  }

  send(): void {

    if (this.addProductsFrom.invalid) {
      Object.values(this.addProductsFrom.controls).map(control => {
        if (control.status === 'INVALID') {
          control.markAllAsTouched();
        }
      });
    } else {
      // POST
      this.productsService.postProduct(this.addProductsFrom.value, this.urlImage)
        .subscribe(response => {
          console.log(response);
        });

      // Navigate
      this.router.navigateByUrl('/administrator');
    }
  }

  upload(event): void {
    const id = String(Math.floor(Math.random() * 500000));
    const file = event.target.files[0];
    const filePath = `images/product_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => {
      return this.urlImageObservable = ref.getDownloadURL();
    })).subscribe(response => {
      this.urlImage = `https://firebasestorage.googleapis.com/v0/b/krishwait-3933a.appspot.com/o/images%2Fproduct_${id}?alt=media`;
      // console.log(response);
    });
  }

}
