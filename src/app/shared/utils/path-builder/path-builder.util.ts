import { FileExtensions } from '../../enums/file-extensions.enum';

export class PathBuilder {
  private readonly _baseFolder = 'assets/';

  private _firstLvl = '';
  private _secondLvl = '';
  private _thirdLvl = '';
  private _fourthLvl = '';
  private _fifthLvl = '';

  private _name = '';

  private _extension = '.svg';

  setFirstLvl(folder: string): PathBuilder {
    this._firstLvl = folder + '/';
    return this;
  }

  setSecondLvl(folder: string): PathBuilder {
    this._secondLvl = folder + '/';
    return this;
  }

  setThirdLvl(folder: string): PathBuilder {
    this._thirdLvl = folder + '/';
    return this;
  }

  setFourthLvl(folder: string): PathBuilder {
    this._fourthLvl = folder + '/';
    return this;
  }

  setFifthLvl(folder: string): PathBuilder {
    this._fifthLvl = folder + '/';
    return this;
  }

  setName(name: string): PathBuilder {
    this._name = name;
    return this;
  }

  setExtension(extension: FileExtensions): PathBuilder {
    this._extension = extension;
    return this;
  }

  get firstLvl(): string {
    return this._firstLvl;
  }

  get secondLvl(): string {
    return this._secondLvl;
  }

  get thirdLvl(): string {
    return this._thirdLvl;
  }

  get fourthLvl(): string {
    return this._fourthLvl;
  }

  get fifthLvl(): string {
    return this._fifthLvl;
  }

  get name(): string {
    return this._name;
  }

  get extension(): string {
    return this._extension;
  }

  get path(): string {
    return (
      this._baseFolder +
      this.firstLvl +
      this.secondLvl +
      this.thirdLvl +
      this.fourthLvl +
      this.fifthLvl +
      this.name +
      this.extension
    );
  }
}
