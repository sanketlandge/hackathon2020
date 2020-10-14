import { Component } from '@angular/core';

export interface Summary {
  fundType: string;
  total: number;
  jPMImport: number;
  uOIImport: number;
  confirmed: number;
}

const ELEMENT_DATA: Summary[] = [
  {fundType: 'Domestic Wholesale Funds', total: 19, jPMImport: 6, uOIImport: 18, confirmed: 0},
  {fundType: 'International Wholesale Funds', total: 19, jPMImport: 6, uOIImport: 18, confirmed: 0},
  {fundType: 'Diversified Wholesale Funds', total: 19, jPMImport: 6, uOIImport: 18, confirmed: 0}
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Distribution Optimizer Summary';
  tableColumns: string[] = ['fundType', 'total', 'jPMImport', 'uOIImport', 'confirmed'];
  dataSource = ELEMENT_DATA;
}
