import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { IconPipe } from '../../../../../shared/pipes/icon.pipe';

@Component({
  selector: 'app-no-dialog-sticker',
  standalone: true,
  templateUrl: 'no-dialog-sticker.component.html',
  styleUrl: 'no-dialog-sticker.component.scss',
  imports: [NgOptimizedImage, IconPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoDialogComponent {}
