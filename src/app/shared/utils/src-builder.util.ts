import { FileExtensions } from '../enums/file-extensions.enum';
import { Folders } from '../pipes/icon.pipe';

export class SrcBuilder {
  private _folderOne = '';
  private _folderTwo = '';
  private _name = '';
  private _extension = FileExtensions.Svg;
  private readonly _baseFolder = 'assets/icons/';

  setFolderOne(folder: Folders): SrcBuilder {
    this._folderOne = folder + '/';
    return this;
  }

  setFolderTwo(folder: Folders): SrcBuilder {
    this._folderTwo = folder + '/';
    return this;
  }

  setName(name: string): SrcBuilder {
    this._name = name;
    return this;
  }

  setExtension(extension: FileExtensions): SrcBuilder {
    this._extension = extension;
    return this;
  }

  get path(): string {
    return (
      this._baseFolder + this._folderOne + this._folderTwo + this._name + this._extension
    );
  }
}
