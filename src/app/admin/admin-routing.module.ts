import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagsPageComponent } from './pages/tags-page/tags-page.component';

const routes: Routes = [
  { path: 'tags', component: TagsPageComponent, title: 'თეგების მართვა' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
