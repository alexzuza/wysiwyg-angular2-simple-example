import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Angular 2 WYSIWYG example</h1>
    {{ content }}
    <wysiwyg-editor [(ngModel)]="content"></wysiwyg-editor>
  `
})
export class AppComponent { 
  content = '<h2>hello</h2>';
}