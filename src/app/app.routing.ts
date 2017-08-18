/**
 * Created by simona on 8/18/2017.
 */
import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { title: 'Home' }
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

