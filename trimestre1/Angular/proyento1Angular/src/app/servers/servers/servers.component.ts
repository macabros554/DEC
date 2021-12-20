import { Component, OnInit } from '@angular/core';
import { PrimerServicioService } from 'src/app/servicios/primer-servicio.service';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

  constructor(private bsService:PrimerServicioService) { }

  get servidores(){
    return this.bsService.servers;
  }

  ngOnInit(): void {
  }

}
