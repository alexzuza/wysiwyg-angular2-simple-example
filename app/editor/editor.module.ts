import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EditorComponent,
    ToolbarComponent
  ],
  exports: [
    EditorComponent
  ]
})
export class EditorModule { }