import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { AppComponent } from './app.component';
// import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './services/http-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { ClientComponent } from './client/client.component';
import { ClientService } from './client/client.service';
import { HomeComponent } from './home/home.component';
import { AppRouterModule } from './app-router.module';
import { UserComponent } from './user/user.component';
import { UserResolveService } from './user/user-resolve.service';
import { UserService } from './user/user.service';
import { LoaderService } from './loader/loader.service';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { PopupComponent } from './popup/popup.component';
import { UtilityService } from './services/utility.service';
import { MapToIterable } from './pipes/key-value.pipe';
import { LoginComponent } from './login/login.component';
import { Globals } from './services/global.service';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    PopupComponent,
    ServerComponent,
    ServersComponent,
    ClientComponent,
    HomeComponent,
    UserComponent,
    MapToIterable,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRouterModule
  ],
  providers: [ LoaderService, ClientService, UserService, UserResolveService, UtilityService, Globals,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
