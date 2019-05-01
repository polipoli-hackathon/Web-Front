import { Component, OnInit } from '@angular/core';
import { AuthStateService } from 'src/app/services/auth-state.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-line-auth-handler',
  templateUrl: './line-auth-handler.component.html',
  styleUrls: ['./line-auth-handler.component.scss']
})
export class LineAuthHandlerComponent implements OnInit {

  constructor (
    private authStateService: AuthStateService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClientModule,
    private afAuth: AngularFireAuth
  ) {
    this.route.queryParams.subscribe((params: Params) => {
      const responded_error = params['error'];
      const responded_error_discription = params['error_discription'];

      if (responded_error) {
        console.error(responded_error_discription);
        this.router.navigate(['/']);
        return;
      }

      const code = params['code'];
      const state = params['state'];

      if (this.authStateService.checkState(state) === false) {
        console.log('state is wrong');
        this.router.navigate(['/']);
        return;
      }

      Promise.resolve().then(() => {
        
      })
    });
   }

  ngOnInit() {
  }

}
