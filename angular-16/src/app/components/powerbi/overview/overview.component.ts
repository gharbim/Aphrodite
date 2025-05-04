import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  powerBIUrl: string = 'https://app.powerbi.com/reportEmbed?reportId=0f13fd43-d27a-4e94-92bd-044c974c1141&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730&pageName=ReportSection2225be483213b82a04e3&navContentPaneEnabled=false&filterPaneEnabled=false';

}
