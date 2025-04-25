import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatIconRegistry } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: any;
  let storeMock: jasmine.SpyObj<Store>;
  let debugElement: DebugElement;
  let iconRegistry: any;
  beforeEach(async () => {
    // Create spies for dependencies
    storeMock = jasmine.createSpyObj('Store', ['select']);

    // Set up the mock return value for store.select
    storeMock.select.and.returnValue(of(2)); // Mock 2 items in cart

    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        CommonModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatBadgeModule,
        NoopAnimationsModule,
      ],
      providers: [{ provide: Store, useValue: storeMock }, MatIconRegistry],
    }).compileComponents();

    // Configure MatIconRegistry for testing
    iconRegistry = TestBed.inject(MatIconRegistry);

    // Set spy on the setDefaultFontSetClass method
    spyOn(iconRegistry, 'setDefaultFontSetClass').and.callThrough();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'electro-cart' title`, () => {
    expect(component.title).toEqual('electro-cart');
  });

  it('should register Material icons', () => {
    expect(iconRegistry.setDefaultFontSetClass).toHaveBeenCalledWith(
      'material-icons'
    );
  });

  it('should select cart items count from store', () => {
    expect(storeMock.select).toHaveBeenCalled();

    component.cartItemsCount$.subscribe((count: number) => {
      expect(count).toBe(2);
    });
  });

  it('should have a router outlet', () => {
    const routerOutlet = debugElement.query(By.css('router-outlet'));
    expect(routerOutlet).not.toBeNull();
  });

  it('should have a toolbar with logo text', () => {
    const toolbarElement = debugElement.query(By.css('mat-toolbar'));
    expect(toolbarElement).toBeTruthy();

    const logoElement = debugElement.query(By.css('.logo'));
    expect(logoElement.nativeElement.textContent).toContain('Electro Cart');
  });

  it('should have a cart button with badge', () => {
    const cartButton = debugElement.query(By.css('.cart-button'));
    expect(cartButton).toBeTruthy();

    const matIcon = cartButton.query(By.css('mat-icon'));
    expect(matIcon.nativeElement.textContent).toContain('shopping_cart');
  });

  it('should have a footer with copyright text', () => {
    const footerElement = debugElement.query(By.css('.footer'));
    expect(footerElement).toBeTruthy();
    expect(footerElement.nativeElement.textContent).toContain(
      '© 2025 Electro Cart'
    );
  });
});
