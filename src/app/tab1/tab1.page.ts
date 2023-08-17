import { Component } from '@angular/core';
import { dataDummy } from 'examples/object';

import Quill, { Delta } from 'quill';
import BlotFormatter from 'quill-blot-formatter/dist/BlotFormatter';

Quill?.register('modules/blotFormatter', BlotFormatter);

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  myText: any = dataDummy;
  summaries: any[] = [];

  constructor() {}

  preview() {
    console.log(typeof this.myText);
    console.log('todo el texto => ', this.myText);

    // Asi nos muestra el summary pero sin estilos digamos
    // El format en object pondriamos
    console.log('Summary => ', this.myText.ops[0].insert);
    this.summaries.push([this.myText.ops[0]]);

    // Asi no hay summary pero tiene estilos
    // El format en html pondriamos
    // console.log('Summary => ', this.myText);
    // this.summaries.push(this.myText);

    // this.myText = null;
  }
}
