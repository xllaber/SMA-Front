import {Component, OnInit} from '@angular/core';
import {Client} from "../Client";
import {ClientService} from "../../../services/client.service";
import {Router, ActivatedRoute} from "@angular/router";
import swal from "sweetalert2";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit{

  client:Client = new Client();
  title:string = "Create Client";

  constructor(private clientService:ClientService,
              private router:Router,
              private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient():void {
    this.activatedRoute.params.subscribe(params => {
      let id = params["id"];
      if (id) {
        this.clientService.getClient(id).subscribe(client => this.client = client);
      }
    })
  }

  create() {
    this.clientService.create(this.client).subscribe(
      client => {
        this.router.navigate(['/clients'])
        swal.fire('Client Created', `Client ${client.name} created successfully`, "success");
      }
    );
  }

  update() {
    this.clientService.update(this.client)
      .subscribe(client => {
        this.router.navigate(['/clients']);
        swal.fire('Client updated', `Client ${client.name} updated successfully`, "success");
      })
  }


}
