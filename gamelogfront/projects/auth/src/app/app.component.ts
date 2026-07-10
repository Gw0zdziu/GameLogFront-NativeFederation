import {Component, inject, OnInit, signal} from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  router = inject(Router)
  private route = inject(ActivatedRoute);


  ngOnInit() {
    this.route.url.subscribe({
      next: (url) => {
        console.log(url);
      }
    })
  }

  click(){
    this.router.navigate(['login'], {
      relativeTo: this.route
    });
  }
}
