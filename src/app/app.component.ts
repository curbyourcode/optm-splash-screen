import { Component } from '@angular/core';
// import { query, trigger, state, style, animate, transition } from '@angular/animations/src/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public audio: any;
    public myVideo: any;
    public muted: boolean;
    public currentTime: number;
    public showElement: boolean;
    // public skipInt = false;
    public isShown = false;
    public show = false;
    public buttonName: any = 'Show';

    playAudio() {
        const audio = new Audio();
        audio.src = '../../assets/sounds/Swish.mp3';
        audio.load();
        audio.play();
    }

    mute() {
        const myVideo = this.myVideo.getElementById('myVideo');
        if (myVideo) {
            this.myVideo.muted = false;
        } else {
            this.myVideo.muted = true;
        }
    }

    delayPlay() {
        this.myVideo.currentTime = 2;
    }

}
