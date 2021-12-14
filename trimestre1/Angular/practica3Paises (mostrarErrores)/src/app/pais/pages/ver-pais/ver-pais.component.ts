import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuscaService } from '../../services/busca.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  termino:string="";

  constructor(private route: ActivatedRoute,private paisService: BuscaService) {
    console.log(route.snapshot.params['id'])
  }

  ngOnInit(): void {
    //console.log(this.route.snapshot);
  }

}
