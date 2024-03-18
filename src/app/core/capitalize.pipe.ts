import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true,
})
export class CapitalizePipe implements PipeTransform {
  transform(
    value: string,
    capitalizationMethod: 'allUpperCase' | 'allLowerCase' | 'titleCase' | 'sentenceCase',
  ): string {
    if (capitalizationMethod === 'allUpperCase') {
      return value.toUpperCase();
    } else if (capitalizationMethod === 'allLowerCase') {
      return value.toLowerCase();
    } else if (capitalizationMethod === 'titleCase') {
      let capitalizedTitle = value.charAt(0).toUpperCase() + value.slice(1, value.length).toLocaleLowerCase();
      return capitalizedTitle;
    } else if (capitalizationMethod === 'sentenceCase') {
      const splitString = value.split('.').map((s) => {
        const trimmedString = s.trim();
        if (trimmedString.length > 0) {
          return `${trimmedString[0].toUpperCase()}${trimmedString.slice(1)}`;
        }
        return '';
      });
      return splitString.join('. ');
    }
    return '';
  }
}
