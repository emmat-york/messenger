import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-chat-top-bar',
  standalone: true,
  templateUrl: 'chat-top-bar.component.html',
  styleUrl: 'chat-top-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
})
export class ChatTopBarComponent {}
