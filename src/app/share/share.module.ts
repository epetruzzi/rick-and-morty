import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { RymserviceService } from '../services/rymservice.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [RymserviceService]
})
export class ShareModule { }
