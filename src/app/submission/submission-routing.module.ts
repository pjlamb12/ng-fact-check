import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmitArticleComponent } from './submit-article/submit-article.component';

const routes: Routes = [
	{
		path: '',
		component: SubmitArticleComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SubmissionRoutingModule {}
