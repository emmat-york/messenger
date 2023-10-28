import { Pipe, PipeTransform } from '@angular/core';
import { Icon } from '../../enums/icons.enum';
import { SrcBuilder } from '../../utils/src-builder/src-builder.utils';
import { FileExtensions } from '../../enums/file-extensions.enum';
import { Folders } from './interfaces/icon.interfaces';

@Pipe({
  name: 'appIcon',
  standalone: true,
})
export class IconPipe implements PipeTransform {
  transform(name: Icon, folder?: Folders): string {
    if (!folder) {
      return new SrcBuilder()
        .setFolderOne('system')
        .setName(name)
        .setExtension(FileExtensions.Svg).path;
    }

    const foldersState: Record<Folders, SrcBuilder> = {
      flags: new SrcBuilder().setFolderOne('flags').setExtension(FileExtensions.Svg),
    } as Record<Folders, SrcBuilder>;

    return foldersState[folder].setName(name).path;
  }
}
