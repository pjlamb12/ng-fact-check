import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SubmissionRoutingModule } from './submission-routing.module';
import { SubmitArticleComponent } from './submit-article/submit-article.component';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule, SubmissionRoutingModule],
	declarations: [SubmitArticleComponent],
})
export class SubmissionModule {}
