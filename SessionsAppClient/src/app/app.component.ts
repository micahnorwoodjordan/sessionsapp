import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { APIService } from './services/api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {

  constructor(private apiService: APIService) {  }

  title = 'SessionsAppClient';

  // TODO: this is just to make sure the client can reach the API; clean up when actually handling sessions
  pingAPI() {
      this.apiService.pingAPI().subscribe({
        next: (data) => console.log(`RESPONSE DATA: ${data}`),
        error: (error) => console.error(`RESPONSE ERROR: ${error}`)
      });
  }
}
