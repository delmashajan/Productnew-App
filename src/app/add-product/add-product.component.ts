import { Component } from '@angular/core';

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

  readValue=()=>{
    let data:any={"productCode":this.productCode,"productName":this.productName,"manufacturingDate":this.manufacturingDate,
  "expiryDate":this.expiryDate,"brand":this.brand,"prize":this.prize,"sellerName":this.sellerName,"distributorName":this.distributorName}
  console.log(data)
  }

}
