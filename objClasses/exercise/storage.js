// not solved yet

class Storage{
    constructor(capacity){
       this.capacity = capacity
       this.storage = {}
       this.totalCost = 0
       for(let obj of this.storage){
          this.totalCost += obj.quantity * obj.price
       }
     //  this.totalCost += this.storage.price * this.storage.quantity
    }
    addProduct(product){
        this.storage += product
        this.capacity -= product.quantity
    }
    getProduct(){
       for(let obj of storage){
           console.log(JSON.stringify(obj))
       }
    }
}