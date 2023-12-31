import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

@Injectable({
  // par injectable le produitService  peut etre injecter dans autre classe
  providedIn: 'root',
})
export class ProduitService {
  produits: Produit[]; // un tableau du produits

  constructor() {
    this.produits = [
      {
        idProduit: 1,
        nomProduit: 'PC Asus',
        prixProduit: 3000.6,
        dateCreation: new Date('01/14/2011'),
      },
      {
        idProduit: 2,
        nomProduit: 'Imprimante Epson',
        prixProduit: 450,
        dateCreation: new Date('12/17/2010'),
      },
      {
        idProduit: 3,
        nomProduit: 'Tablette Samsung',
        prixProduit: 900.123,
        dateCreation: new Date('02/20/2020'),
      },
    ];
  }
  listeProduit(): Produit[] {
    return this.produits;
  }
  ajouterProduit(prod: Produit) {
    console.log(this.produits);
    this.produits.push(prod);
  }
}
