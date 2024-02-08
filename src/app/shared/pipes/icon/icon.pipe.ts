import { Pipe, PipeTransform } from '@angular/core';
import { FileExtensions } from '../../enums/file-extensions.enum';
import { Folders } from './interfaces/icon.interface';
import { SrcBuilder } from '../../utils/src-builder/src-builder.util';

@Pipe({
  name: 'icon',
  standalone: true,
})
export class IconPipe implements PipeTransform {
  transform(name: string, folder?: Folders): string {
    if (!folder || folder === 'system') {
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
