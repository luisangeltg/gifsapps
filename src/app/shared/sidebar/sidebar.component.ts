import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) { }

  getGifs(query: string) {
    this.gifsService.buscarGifs(query);
  }

  get historial() {
    return this.gifsService.historial;
  }

}
