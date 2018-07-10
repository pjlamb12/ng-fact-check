import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		LayoutRoutingModule,
	],
	declarations: [LayoutComponent, NavigationComponent],
})
export class LayoutModule {}
