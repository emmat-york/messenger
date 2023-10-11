import { Pipe, PipeTransform } from '@angular/core';
import { Icon } from '../../enums/icons.enum';
import { PathBuilder } from '../../utils/path-builder/path-builder.util';
import { FileExtensions } from '../../enums/file-extensions.enum';

@Pipe({
  name: 'appIcon',
  standalone: true,
})
export class IconPipe implements PipeTransform {
  transform(name: Icon): string {
    return new PathBuilder()
      .setFirstLvl('icons')
      .setName(name)
      .setExtension(FileExtensions.Svg).path;
  }
}
