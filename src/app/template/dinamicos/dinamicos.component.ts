import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  persona: Persona = {
    nombre: 'Test',
    favoritos: [
      {id: 1, nombre: 'Favorito 1'},
      {id: 2, nombre: 'Favorito 2'}
    ]
  }

  nuevoJuego: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarJuego(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index, 1);
  }

  guardar(){
    console.log("guardar");
  }

}
