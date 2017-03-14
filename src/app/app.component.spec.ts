import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login/login.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [LoginComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(LoginComponent);
    expect(fixture.componentInstance instanceof LoginComponent).toBe(true, 'should create LoginComponent');
  });
});
