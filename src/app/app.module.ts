import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomerComponent } from './customers/customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavLayoutComponent } from './nav-layout/nav-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './products/product.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './products/auth-interceptor';
import { CreditCardDirective } from './directives/credit-card/credit-card.directive';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';
import { UsedirectiveComponent } from './directives/usedirective/usedirective.component';
import { ContentProjectionComponent } from './dynamic/content-projection/content-projection.component';
import { TestdynamicComponent } from './dynamic/testdynamic/testdynamic.component';
import {MatCardModule} from '@angular/material/card';
import { ChildcmpComponent } from './dynamic/childcmp/childcmp.component';
import { RealchildComponent } from './dynamic/realchild/realchild.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    NavLayoutComponent,
    HomeComponent,
    CreditCardDirective,
    TooltipDirective,
    UsedirectiveComponent,
    ContentProjectionComponent,
    TestdynamicComponent,
    ChildcmpComponent,
    RealchildComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    FlexLayoutModule,
    ProductModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
