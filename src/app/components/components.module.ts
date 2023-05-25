import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProofWithdirectivesComponent } from './proof-withdirectives/proof-withdirectives.component';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    ProofWithdirectivesComponent,
  ],
  imports: [
    CommonModule,
    DirectivesModule,
  ],
  exports: [
    ProofWithdirectivesComponent,
  ]
})
export class ComponentsModule { }
