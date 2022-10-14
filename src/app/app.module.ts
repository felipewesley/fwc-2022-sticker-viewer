import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { appRouting } from './app.routing';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    RouterModule.forRoot([...appRouting]),

    BrowserModule,
    BrowserAnimationsModule,

    LayoutComponent,
    
    CoreModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
