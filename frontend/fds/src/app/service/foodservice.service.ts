import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Cart } from '../Entity/cart';
import { Category } from '../Entity/category';
import { Food } from '../Entity/food';
import { Order } from '../Entity/order';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {
  cartData=new EventEmitter<Food[]|[]>();
  private apiURL = "http://localhost:8080/fds/food";
  private apiURL2 = "http://localhost:8080/fds/category";
  private apiURL3 = "http://localhost:8080/fds/cart";
  private apiURL4 = "http://localhost:8080/fds/order";



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
  addFood(data: Food) {
    return this.httpClient.post(this.apiURL + '/posts', JSON.stringify(data), this.httpOptions);
    console.log("hit");
  }
   foodList() {
  return this.httpClient.get<Food[]>(this.apiURL+'/posts');
 }

 cardFoodList() {
  return this.httpClient.get<Food[]>(this.apiURL+'/posts');
}

categoryName(){
  return this.httpClient.get<Category[]>(this.apiURL2+'/getAllCatagoryName');
}
getFood(id: string) {
  return this.httpClient.get<Food>(this.apiURL+`/posts/${id}`,this.httpOptions);
  
}
 //fooddetails
localAddToCart(data:Food){
  let cartData=[];
  let localCart=localStorage.getItem('localCart');
  if(!localCart){
    localStorage.setItem('localCart',JSON.stringify([data]));
  }else{
    //console.warn("you already have data")
    cartData=JSON.parse(localCart);
    cartData.push(data);
    localStorage.setItem('localCart',JSON.stringify(cartData));
    this.cartData.emit(cartData);
  }
  

   

  }
  removeItemsFromCart(foodId:number){
    let cartData=localStorage.getItem('localCart');
    if(cartData){
      let items:Food[]=JSON.parse(cartData);
      items=items.filter((item:Food)=>foodId!==item.id)
      localStorage.setItem('localCart',JSON.stringify(items));
      this.cartData.emit(items);


    }
  }
  //carttable
  addToCart(cartData:Cart){
    return this.httpClient.post(this.apiURL3+'/posts', JSON.stringify(cartData), this.httpOptions)
  }
  getCardFoodList(userId: number) {
    return this.httpClient.get<Food[]>(this.apiURL3+'/posts/?userId='+userId,{observe:'response'}).subscribe((result:any)=>{
     console.warn("card form"+result)
      if(result && result.body){
      this.cartData.emit(result.body);
     }
    })
    
  }

  removeToCart(cartId:number){
    return this.httpClient.delete(this.apiURL3+'/posts/'+cartId);

  }
  currentCart(){
    let userStor=localStorage.getItem('user');
    let userData=userStor && JSON.parse(userStor);
    return this.httpClient.get<Cart[]>(this.apiURL3+'/getAll/?userId='+userData.id,this.httpOptions)

  }
  //ordertable
  orderNow(data:Order){
    console.log("hit");
    return this.httpClient.post(this.apiURL4+'/posts',data,this.httpOptions);

  }

  getOrderList(){
    console.log("hit");
    let userStor=localStorage.getItem('user');
    let userData=userStor && JSON.parse(userStor);
    return this.httpClient.get<Order[]>(this.apiURL4+'/getAll/?userId='+userData.id,this.httpOptions)
    
  }
  getAllOrder(){
    return this.httpClient.get<Order[]>(this.apiURL4+'/posts',this.httpOptions)
  
  }

  updateStatus(id:number,state:string){
    return this.httpClient.put(this.apiURL4+'/updateStatus/?orderId='+id+'&state='+state,this.httpOptions)
  }

  cancelOrder(id:number){
    console.log("delete")
    return this.httpClient.delete(this.apiURL4+'/posts/'+id,this.httpOptions)
  }
}

