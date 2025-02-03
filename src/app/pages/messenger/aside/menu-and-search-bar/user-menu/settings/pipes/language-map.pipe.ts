import { Pipe, PipeTransform } from '@angular/core';
import { Language } from '../../../../../../../shared/enums/languages.enum';

@Pipe({
  name: 'languageMap',
  standalone: true,
})
export class LanguageMapPipe implements PipeTransform {
  transform(language: Language): string {
    const map: Record<Language, string> = {
      [Language.En]: 'English',
      [Language.Ru]: 'Russian',
      [Language.De]: 'German',
      [Language.Es]: 'Spanish',
      [Language.Fr]: 'French',
      [Language.Pt]: 'Portuguese',
    };

    return map[language];
  }
}
