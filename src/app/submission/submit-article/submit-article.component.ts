import { Component, OnInit } from '@angular/core';
import { ArticleSubmission } from '../article-submission';
import { FormGroup, FormControl } from '@angular/forms';
import * as uniq from 'lodash.uniq';

@Component({
	selector: 'app-submit-article',
	templateUrl: './submit-article.component.html',
	styleUrls: ['./submit-article.component.scss'],
})
export class SubmitArticleComponent implements OnInit {
	public article: ArticleSubmission = new ArticleSubmission();
	public submitted: boolean;
	public articleForm: FormGroup = new FormGroup({
		email: new FormControl(),
		link: new FormControl(),
		tags: new FormControl(),
	});

	constructor() {}

	ngOnInit() {}

	submitForm() {
		this.article = {
			...this.articleForm.value,
			tags: uniq(
				this.articleForm.controls.tags.value
					.split(',')
					.map(tag => tag.trim())
					.map(tag => tag.toLowerCase()),
			),
		};
		this.submitted = true;
		this.articleForm.reset();
	}
}
