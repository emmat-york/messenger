import { Pipe, PipeTransform } from '@angular/core';
import { Icon } from '../../enums/icons.enum';
import { PathBuilder } from '../../utils/path-builder/path-builder.util';
import { FileExtensions } from '../../enums/file-extensions.enum';

@Pipe({
  name: 'appIcon',
})
export class IconPipe implements PipeTransform {
  transform(name: Icon): string {
    const builder = new PathBuilder();
    builder.setFirstLvl('icons').setName(name).setExtension(FileExtensions.Svg);

    return builder.path;
  }
}
