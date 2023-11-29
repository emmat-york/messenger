import { FileExtensions } from '../../enums/file-extensions.enum';
import { Folders } from '../../pipes/icon/interfaces/icon.interface';

export class SrcBuilder {
  private _folderOne = '';
  private _folderTwo = '';
  private _folderThree = '';
  private _folderFour = '';
  private _folderFive = '';
  private _name = '';
  private _extension = '.svg';
  private readonly _baseFolder = 'assets/icons/';

  setFolderOne(folder: Folders): SrcBuilder {
    this._folderOne = folder + '/';
    return this;
  }

  setFolderTwo(folder: Folders): SrcBuilder {
    this._folderTwo = folder + '/';
    return this;
  }

  setFolderThree(folder: Folders): SrcBuilder {
    this._folderThree = folder + '/';
    return this;
  }

  setFolderFour(folder: Folders): SrcBuilder {
    this._folderFour = folder + '/';
    return this;
  }

  setFolderFive(folder: Folders): SrcBuilder {
    this._folderFive = folder + '/';
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
      this._baseFolder +
      this._folderOne +
      this._folderTwo +
      this._folderThree +
      this._folderFour +
      this._folderFive +
      this._name +
      this._extension
    );
  }
}
