export class ArticleSubmission {
	email: string;
	link: string;
	tags: any[];

	constructor(obj: any = {}) {
		this.email = obj.email ? obj.email : '';
		this.link = obj.link ? obj.link : '';
		this.tags = obj.tags ? obj.tags : [];

		return this;
	}
}
