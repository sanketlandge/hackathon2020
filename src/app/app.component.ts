import {Component} from '@angular/core';
import {AwsserviceService} from './awsservice.service';
import {Model} from './model';

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

  constructor(
    private awsService: AwsserviceService
  ) {
  }

  title = 'Distribution Optimizer Summary';
  tableColumns: string[] = ['fundType', 'total', 'jPMImport', 'uOIImport', 'confirmed'];
  dataSource = ELEMENT_DATA;
  funds: string[] = ['VASIF', 'VISIF'];
  selectedFund: string;
  models: Model[];

  retrievData(): void {
    console.log('selected fund is - ' + this.selectedFund);
    this.awsService.getFundInformation().subscribe((data: any[]) => {
      console.log(data);
      this.models = data;
    });
  }
}
