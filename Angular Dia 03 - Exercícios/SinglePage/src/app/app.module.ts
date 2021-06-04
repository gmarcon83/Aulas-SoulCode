import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FeaturesComponent } from './features/features.component';
import { FeatureComponent } from './feature/feature.component';
import { InstallComponent } from './install/install.component';
import { InstallsComponent } from './installs/installs.component';
import { ServicesComponent } from './services/services.component';
import { ServiceComponent } from './service/service.component';
import { ActionComponent } from './action/action.component';
import { PricesComponent } from './prices/prices.component';
import { PriceComponent } from './price/price.component';
import { AboutsComponent } from './abouts/abouts.component';
import { AboutComponent } from './about/about.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FeaturesComponent,
    FeatureComponent,
    InstallComponent,
    InstallsComponent,
    ServicesComponent,
    ServiceComponent,
    ActionComponent,
    PricesComponent,
    PriceComponent,
    AboutsComponent,
    AboutComponent,
    TestimonialComponent,
    FooterComponent,
    MainComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
