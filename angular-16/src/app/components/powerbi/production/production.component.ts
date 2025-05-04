import { Component } from '@angular/core';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent {
  powerBiUrl = 'https://app.powerbi.com/reportEmbed?reportId=0f13fd43-d27a-4e94-92bd-044c974c1141&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730&pageName=c45f1c35f624dd6d962d&pageName=ef8144fc6f11870b1b55&navContentPaneEnabled=false&filterPaneEnabled=false';
}
