import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { AppComponent } from './app.component';
// import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { ClientComponent } from './client/client.component';
import { ClientService } from './client/client.service';
import { HomeComponent } from './home/home.component';
import { AppRouterModule } from './app-router.module';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ClientComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [ ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
