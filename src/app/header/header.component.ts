import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  // tslint:disable-next-line:typedef
  onSelect(feature: string) {
    // tslint:disable-next-line:no-unused-expression
    this.featureSelected.emit(feature);
  }
}
