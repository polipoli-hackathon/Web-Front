import { Injectable } from '@angular/core';
import { UUID } from 'uuid';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment.prod';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';

@Injectable()
export class AuthStateService {
  constructor (
    private cookieService: CookieService,
    private http: HttpClientModule
  ) {
  }

  loginWithLine() {
    const response_type = encodeURIComponent('code');
    const client_id = environment.line.login.channel_id;
    const redirect_uri = encodeURIComponent(window.location.href + 'line_auth_handler');
    const state = this.getState();
    const scope = encodeURIComponent('openid profile');
    const url = `https://access.line.me/oauth2/v2.1/authorize?response_type=${response_type}&client_id=${client_id}&`
      + `redirect_uri=${redirect_uri}&state=${state}&scope=${scope}`;

    window.location.href = url;
  }

  getState() {
    const state = UUID.UUID().toString();
    this.cookieService.set('auth_state', state);
    return state;
  }

  checkState(target: string): boolean {
    const state = this.cookieService.get('auth_state');
    const checkResult = (state === target);

    this.cookieService.delete('auth_state');
    return checkResult;
  }

  async postLineApi(code: string) {
    const url = `${environment.cloud_functions.host_name}/api/auth/line_login/web/custom_token`;
    const redirectUri = (window.location.href).replace(/\?.*$/, '');
    const body = {
      code: code,
      redirect_uri: redirectUri,
    };
    const response = await this.http.post(url, body, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
      ,
    }).toPromise();
  }
}
