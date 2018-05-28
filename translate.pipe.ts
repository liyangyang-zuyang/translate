// app/translate/translate.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service'; // our translate service

@Pipe({
    name: 'translate',
    pure: true // impure pipe, update value when we change language
})

export class TranslatePipe implements PipeTransform {

	constructor(private _translate: TranslateService) { }

	transform(value: string): any {
		if (!value) return;
		return this._translate.instant(value);
	}
}