import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { PokedexService } from '../../services/pokedex.service';
import { Pokemon } from '../../entities/pokemon';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss']
})
export class PokedexListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['pokemonId', 'name', 'actions'];
  pokedexTable = new MatTableDataSource<Pokemon>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private _pokedexSercive: PokedexService
  ) { }

  ngOnInit(): void {
    this._pokedexSercive.getAllPokemonsFromKanto()
      .subscribe((pokemons: Pokemon[]) => {
        this.pokedexTable.data = pokemons;
      });
  }

  ngAfterViewInit(): void {
    this.pokedexTable.sort = this.sort;
    this.pokedexTable.paginator = this.paginator;
  }

  applyFilter(filteredValue: string): void {
    this.pokedexTable.filter = filteredValue.trim().toLowerCase();
    this.pokedexTable.paginator.firstPage();
  }

}
