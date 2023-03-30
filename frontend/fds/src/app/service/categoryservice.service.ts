import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Category } from '../Entity/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {
  private apiURL = "http://localhost:8080/fds/category";
  



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
  addCategory(data: Category) {
    return this.httpClient.post(this.apiURL + '/posts', JSON.stringify(data), this.httpOptions);
  }
   categoryList() {
  return this.httpClient.get<Category[]>(this.apiURL+'/posts');
 }

  // deleteProduct(id: number) {
  //   return this.http.delete(`http://localhost:3000/products/${id}`);
  // }

  // getProduct(id: string) {
  //   return this.http.get<product>(`http://localhost:3000/products/${id}`);
  // }

  // updateProduct(product: product) {
  //   return this.http.put<product>(
  //     `http://localhost:3000/products/${product.id}`,
  //     product
  //   );
  // }
  












  // getAll(): Observable<any> {
  
  //   return this.httpClient.get(this.apiURL + '/posts')
  
  //   .pipe(
      
  //   )
  // }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  // create(post:Category): Observable<any> {
  
  //   return this.httpClient.post(this.apiURL + '/posts', JSON.stringify(post), this.httpOptions)
  
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }  
    
  // /**
  //  * Write code on Method
  //  *
  //  * @return response()
  //  */
  // find(id:number): Observable<any> {
  
  //   return this.httpClient.get(this.apiURL + '/posts/' + id)
  
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }
    
  // /**
  //  * Write code on Method
  //  *
  //  * @return response()
  //  */
  // update(id:number, post:Category): Observable<any> {
  
  //   return this.httpClient.put(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
 
  //   .pipe( 
  //     catchError(this.errorHandler)
  //   )
  // }
       
  // /**
  //  * Write code on Method
  //  *
  //  * @return response()
  //  */
  // delete(id:number){
  //   return this.httpClient.delete(this.apiURL + '/posts/' + id, this.httpOptions)
  
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }
      

  

}
