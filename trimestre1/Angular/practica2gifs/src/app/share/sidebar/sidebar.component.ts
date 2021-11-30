import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from 'src/app/gifs/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  get historias():string[]{
    return this.bsService.historial;
  }

  constructor(private bsService:GifsServiceService) { }

  ngOnInit(): void {
  }

}
