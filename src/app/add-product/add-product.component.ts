import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  productCode=""
  productName=""
  manufacturingDate=""
  expiryDate=""
  brand=""
  prize=""
  sellerName=""
  distributorName=""

  constructor(private api:ApiService){}

  readValue=()=>{
    let data:any={"productCode":this.productCode,"productName":this.productName,"manufacturingDate":this.manufacturingDate,
  "expiryDate":this.expiryDate,"brand":this.brand,"prize":this.prize,"sellerName":this.sellerName,"distributorName":this.distributorName}
  console.log(data)

  this.api.addProduct(data).subscribe(
    (response:any)=>{
      console.log(response)
      if(response.status=="success"){
        alert("added successfully")
        this.productCode=""
        this.productName=""
        this.manufacturingDate=""
        this.expiryDate=""
        this.brand=""
        this.prize=""
        this.sellerName=""
        this.distributorName
      }else{
        alert("wrong")
      }
    }
  )
  }

}
