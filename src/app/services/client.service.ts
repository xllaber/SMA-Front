import { Injectable } from '@angular/core';
import {formatDate} from "@angular/common";
import {Client} from "../components/clients/Client";
import {map, Observable, throwError, catchError, tap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import swal from "sweetalert2";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private urlEndPoint:string = "http://localhost:8080/api/clients"
  private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient,
              private  router: Router) { }

  getClients():Observable<Client[]> {
    return this.http.get<Client[]>(this.urlEndPoint).pipe(

      map(response => {
        let clients = response as Client[];
        return clients.map(client => {
          client.name = client.name.toUpperCase();
          client.createAt = formatDate(client.createAt, "EEE dd-MM-yyyy", "es");
          return client
        });
      })
    );
  }

  getClient(id:number):Observable<Client> {
    return this.http.get<Client>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(["/clients"])
        console.log(e.error.message)
        swal.fire("Error", e.error.message, "error");
        return throwError(e);
      })
    );
  }

  create(client: Client): Observable<any> {
    return this.http.post<any>(this.urlEndPoint, client, {headers: this.httpHeaders})
           .pipe(
             catchError(e => {
               console.log(e.error.message);
               swal.fire("Error when creating client", e.error.message, "error");
               return throwError(e);
             })
           );
  }

  update(client: Client): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/${client.id}`, client, {headers: this.httpHeaders})
           .pipe(
             catchError(e => {
               console.log(e.error.message);
               swal.fire("Error when updating client", e.error.message, "error");
               return throwError(e);
             })
           );
  }

  delete(id:number):Observable<Client> {
    return this.http.delete<Client>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
            .pipe(
              catchError(e => {
                console.log(e.error.message);
                swal.fire("Error when deleting client", e.error.message, "error");
                return throwError(e);
              })
            );
  }
}
