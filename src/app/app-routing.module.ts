import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseYourGearComponent } from './choose-your-gear/choose-your-gear.component';
import { SkiFormComponent } from './ski-form/ski-form.component';
const routes: Routes = [
  { path: '', component: ChooseYourGearComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
