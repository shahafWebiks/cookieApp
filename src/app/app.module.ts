import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PlacesComponent} from './places/places.component';
import {PlaceDetailComponent} from './place-detail/place-detail.component';
import {PlaceService} from './place.service';
import {MessagesComponent} from './messages/messages.component';
import {MessageService} from './message.service';
import {AppRoutingModule} from './/app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import {PlaceSearchComponent} from './place-search/place-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  declarations: [
    AppComponent,
    PlacesComponent,
    PlaceDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PlaceSearchComponent
  ],
  providers: [PlaceService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
