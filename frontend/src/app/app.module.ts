import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {SparePartsService} from './services/spare-parts.service';
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
// import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
// import {AngularFireModule} from "@angular/fire/compat";

// const firebaseConfig = {
//   apiKey: "AIzaSyCgc0XnknWcxqxlVrh0LvrEpHUBCS8mM7s",
//   authDomain: "agriculture-spare-parts.firebaseapp.com",
//   databaseURL: "https://agriculture-spare-parts-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "agriculture-spare-parts",
//   storageBucket: "agriculture-spare-parts.appspot.com",
//   messagingSenderId: "780408971488",
//   appId: "1:780408971488:web:8115c97f80d69178523085",
//   measurementId: "G-8C7QHFYDW3"
// };

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    SparePartsPageComponent,
    SearchResultsPageComponent
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

    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFirestoreModule,
  ],
  providers: [SparePartsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
