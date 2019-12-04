import { Credentials } from '@core/authentication/credentials.service';

export class MockCredentialsService {

  credentials: Credentials | null = {
    username: 'test',
    token: '123'
  };

  isAuthenticated(): boolean {
    return !!this.credentials;
  }

  setCredentials(credentials?: Credentials, remember?: boolean) {
    this.credentials = credentials || null;
  }

}
