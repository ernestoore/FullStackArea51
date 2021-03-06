import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatSidenavModule, MatNativeDateModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatSidenavModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		FlexLayoutModule,
		//Para trabajar con Cards
		MatCardModule,
		//Para trabajar con formularios
		MatFormFieldModule,
		MatInputModule,
		//Pata trabajar con listas
		MatListModule,
		//Para utilizar datePicker
		MatDatepickerModule,
		MatNativeDateModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
