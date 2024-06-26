import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleViewComponent } from './article-view.component';

const routes: Routes = [{ path: '', component: ArticleViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleViewRoutingModule { }
