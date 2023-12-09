import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { SearcherComponent } from './components/searcher/searcher.component';

const routes: Routes = [
  {
    path: 'teamroster',
    component: ListComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: SearcherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
