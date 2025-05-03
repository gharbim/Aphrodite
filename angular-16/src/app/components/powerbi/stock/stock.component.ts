import { Component } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent {
    powerBiUrl = 'https://app.powerbi.com/reportEmbed?reportId=0f13fd43-d27a-4e94-92bd-044c974c1141&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730';
}
