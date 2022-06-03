import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {InputTextModule} from "primeng/inputtext";
import {CardModule} from "primeng/card";
import {InputNumberModule} from "primeng/inputnumber";
import {FileUploadModule} from "primeng/fileupload";
import {SparePartsPageComponent} from './spare-parts-page/spare-parts-page.component';
import {StoreModule} from '@ngrx/store';
import {DataAccessSparepartsModule} from "./data-access-spareparts/data-access-spareparts.module";
import {reducers} from "./data-access-spareparts/state/reducers";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {SearchResultsPageComponent} from './search-results-page/search-results-page.component';
import {BadgeModule} from "primeng/badge";
import {TagModule} from "primeng/tag";
import {DropdownModule} from "primeng/dropdown";
import {DialogModule} from "primeng/dialog";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {TooltipModule} from "primeng/tooltip";
import {SparePartsFacade} from "./data-access-spareparts/application/spare-parts.facade";
import {PasswordModule} from "primeng/password";
import {LoginPageComponent} from "./admin-feature/login-page/login-page.component";

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    SparePartsPageComponent,
    SearchResultsPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,


    FormsModule,
    InputTextModule,
    CardModule,
    InputNumberModule,
    FileUploadModule,
    DataAccessSparepartsModule.forRoot(),
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    BadgeModule,
    TagModule,
    DropdownModule,
    DialogModule,
    PasswordModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    TooltipModule,
  ],
  providers: [SparePartsFacade],
  bootstrap: [AppComponent]
})
export class AppModule {
}
