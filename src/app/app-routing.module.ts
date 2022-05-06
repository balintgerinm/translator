import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SynonymComponent } from './components/synonym/synonym.component';
import { TranslateComponent } from './components/translate/translate.component';

const routes: Routes = [
  { path: 'translate', component: TranslateComponent },
  { path: 'synonym', component: SynonymComponent },
  { path: '',   redirectTo: '/translate', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
