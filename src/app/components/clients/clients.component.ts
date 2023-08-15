import {Component, OnInit} from '@angular/core';
import {Client} from "./Client";
import {ClientService} from "../../services/client.service";
import swal from "sweetalert2";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
})
export class ClientsComponent implements OnInit{

  clients: Client[];

  constructor(private clientService:ClientService) {
  }
  ngOnInit(): void {
    this.clientService.getClients().subscribe(clients => this.clients = clients)
  }

  delete(client:Client):void{
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: `Delete client ${client.name} ${client.lastName} permanently?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it',
      cancelButtonText: 'No, cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.clientService.delete(client.id).subscribe(
          client => {
            this.clients = this.clients.filter(cli => cli != client);
            swalWithBootstrapButtons.fire(
              'Deleted!',
              `The client has been deleted.`,
              'success'
            )
          }
        )
      }
    })
  }
}
