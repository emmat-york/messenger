import { Pipe, PipeTransform } from '@angular/core';
import { Icon } from '../../enums/icons.enum';
import { SrcBuilder } from '../../utils/src-builder/src-builder.util';
import { FileExtensions } from '../../enums/file-extensions.enum';

@Pipe({
  name: 'appSrc',
  standalone: true,
})
export class SrcPipe implements PipeTransform {
  transform(name: Icon): string {
    return new SrcBuilder()
      .setFolderOne('icons')
      .setName(name)
      .setExtension(FileExtensions.Svg).path;
  }
}
