import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpansionTableComponent } from './expansion-table/expansion-table.component';
import {RouterModule, Routes} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";

const routes: Routes = [
  {path: 'table', component: ExpansionTableComponent},
  // {path: '', redirectTo: 'table', pathMatch: "full"},
  // {path: '**', redirectTo: 'table'}
]

@NgModule({
  declarations: [
    ExpansionTableComponent
  ],
    imports: [
        CommonModule,
        [RouterModule.forChild(routes)],

        BrowserAnimationsModule,
        MatTableModule,
        MatSortModule,
        MatButtonModule,
        MatFormFieldModule
    ],
  bootstrap: [ExpansionTableComponent]
})
export class TableModule { }
