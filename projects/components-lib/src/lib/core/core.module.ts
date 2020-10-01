import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core/core.component';
import { CoreService } from './core.service';



@NgModule({
  declarations: [CoreComponent],
  exports: [CoreComponent],
  imports: [
    CommonModule
  ],
  providers: [CoreService]
})
export class CoreModule { }
