import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Server } from '../interfaces/server.interface';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [
  ]
})
export class ServersComponent implements OnInit {

  allowEdit = false;
  servers: Server[] = [];
  constructor(private serversService: ServersService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.servers = this.serversService.getServers();

    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );
  }
  onReload() {
    //this.router.navigate(['/servers'], { relativeTo: this.route });
  }
}
