import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SoundService {
  private readonly instance = new Audio();

  play(): Promise<void> {
    this.instance.src = '../../../assets/sound/desktop-notification.mp3';
    this.instance.autoplay = true;

    return this.instance.play();
  }
}
