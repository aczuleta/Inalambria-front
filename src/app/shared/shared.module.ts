import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list'
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  imports: [
        MatFormFieldModule, MatInputModule, MatIconModule, 
        MatProgressSpinnerModule, MatButtonModule, MatCardModule,
        MatTableModule, FormsModule, MatSelectModule,
        HttpClientModule, ApolloModule, HttpLinkModule, MatCheckboxModule,
        MatExpansionModule, ReactiveFormsModule, MatListModule, MatTabsModule,
        MatToolbarModule
  ],
  exports: [
        MatFormFieldModule, MatInputModule, MatIconModule, 
        MatProgressSpinnerModule, MatButtonModule,  MatCardModule,
        FormsModule, MatTableModule, MatSelectModule,
        HttpClientModule, ApolloModule, HttpLinkModule, MatCheckboxModule,
        MatExpansionModule, ReactiveFormsModule, MatListModule, MatTabsModule,
        MatToolbarModule
  ]
})
export class SharedModule { }