import { Component, OnInit } from '@angular/core';

declare var UIkit: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-angular-uikit';

  ngOnInit() {
  }

  showAlert(): void {
    UIkit.modal.alert('This is UI KIT Alert!');
  }

}
