import { Component } from '@angular/core';
import { Story } from './interfaces/story';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shadowland';

  storyOne: Story = {
    title: 'HUMANIS FIGHTS BACK',
    image: 'https://i.imgur.com/F4LZtkH.png',
    text: `Everybody's favorite racists are back for more. Word on the street is, they've taken the fight to the pavement against Vogel's, Herandez's, and the Big D's campagin HQs. Plus the usual harassment of metahuman neighborhoods in smaller burgs throughout the UCAS.`,
    storyID: 1
  };

  comment = `>>>[Airlink intown is fast but expensive, around 45 nuyen fixed rate. Stick to cabs, chummer. If you really need air transport in the city, rent it. Airlinks to other parts of PCC are pretty reasonable, though, like 100-200 nuyen, dependig on distance.]>>>`
}
