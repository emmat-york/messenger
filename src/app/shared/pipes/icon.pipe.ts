import { Pipe, PipeTransform } from '@angular/core';
import { FileExtensions } from '../enums/file-extensions.enum';
import { SrcBuilder } from '../utils/src-builder.util';

export type Folders = 'stickers';

@Pipe({
  name: 'icon',
  standalone: true,
})
export class IconPipe implements PipeTransform {
  transform(name: string, folder?: Folders): string {
    if (!folder) {
      return new SrcBuilder().setName(name).setExtension(FileExtensions.Svg).path;
    }

    const foldersState: Record<Folders, SrcBuilder> = {
      stickers: new SrcBuilder()
        .setFolderOne('stickers')
        .setExtension(FileExtensions.Svg),
    };

    return foldersState[folder].setName(name).path;
  }
}
