import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})

export class AboutComponent implements OnInit {
  private carouselContent = [{title: 'title1', content: `Hey there where ya goin', not exactly knowin', who says you have to call ` +
                                                `just one place home. He's goin' everywhere, B.J. McKay and his best friend Bear. ` +
                                                `He just keeps on movin', ladies keep improvin', every day is better than the last. ` +
                                                `New dreams and better scenes, and best of all I don't pay property tax. Rollin' down to ` +
                                                `Dallas, who's providin' my palace, off to New Orleans or who knows where. Places new and` +
                                                ` ladies, too, I'm B.J. McKay and this is my best friend Bear.`},
                     {title: 'title2', content: `80 days around the world, we'll find a pot of gold just sitting where the rainbow's ` +
                                                `ending. Time - we'll fight against the time, and we'll fly on the white wings of the ` +
                                                `wind. 80 days around the world, no we won't say a word before the ship is really back. ` +
                                                `Round, round, all around the world. Round, all around the world. Round, all around the ` +
                                                `world. Round, all around the world.`},
                     {title: 'title3', content: `There's a voice that keeps on calling me. Down the road, that's where I'll always be. ` +
                                                `Every stop I make, I make a new friend. Can't stay for long, just turn around and I'm ` +
                                                `gone again. Maybe tomorrow, I'll want to settle down, Until tomorrow, I'll just keep ` +
                                                `moving on.`}];
  public carouselData = this.carouselContent.map((data) => {
    return { img: `https://picsum.photos/900/500?random&t=${Math.random()}`,  title: data.title, content: data.content};
  });
  public innertext =
  [{title: 'Bear', content: `Hey there where ya goin', not exactly knowin', who says you have to call just one place home. ` +
  `He's goin' everywhere, B.J. McKay and his best friend Bear. He just keeps on movin', ladies keep improvin', every day is` +
  `better than the last. New dreams and better scenes, and best of all I don't pay property tax. Rollin' down to` +
  `Dallas, who's providin' my palace, off to New Orleans or who knows where. Places new and ladies, too, I'm B.J.` +
  `McKay and this is my best friend Bear.`},
  {title: 'Tarzan', content: `I never spend much time in school but I taught ladies plenty. It's true I hire my body out for pay, ` +
  `hey hey. I've gotten burned over Cheryl Tiegs, blown up for Raquel Welch. But when I end up in the hay it's only hay, hey` +
  `hey. I might jump an open drawbridge, or Tarzan from a vine. 'Cause I'm the unknown stuntman that makes Eastwood look so fine.`},
  {title: 'it was MURDER', content: `This is my boss, Jonathan Hart, a self-made millionaire, he's quite a guy. This is Mrs H.,` +
  `she's gorgeous, she's one lady who knows how to take care of herself. By the way, my name is Max. I take care of both of them, which` +
  `ain't easy, 'cause when they met it was MURDER!`}];
  ngOnInit() {

  }

}
