import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './service/data.service';
import { RxjsdataComponent } from './rxjsdata/rxjsdata.component';
import { CommonModule } from '@angular/common';
import { FormComponent } from './forms/form/form.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';

const routes = [
  { path: '', component: ProductListComponent },
  { path: 'form', component: FormComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'data', component: RxjsdataComponent },
];
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    RxjsdataComponent,
    FormComponent,
    ReactiveComponent,
  ],
  bootstrap: [AppComponent],
  providers: [DataService],
})
export class AppModule {}
