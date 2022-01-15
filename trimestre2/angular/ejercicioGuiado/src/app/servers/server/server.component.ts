import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Server } from '../interfaces/server.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
  ]
})
export class ServerComponent implements OnInit {

  server!: Server;
  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //const id = this.route.snapshot.params['id']; //string
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);//numero

    this.route.params.subscribe((params: Params) => {
    this.server = this.serversService.getServer(+params['id']);//el + es porque es un numero supongo
    });
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
