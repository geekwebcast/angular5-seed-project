import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'layout-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.scss']
})
export class FooterComponent {
  today: number = Date.now();
}
