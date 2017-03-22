import { Routes } from '@angular/router';
import { TableViewComponent } from './table-view';
import { BlocksViewComponent } from './blocks-view';
import { ImageUploadComponent } from './image-upload';
import { SignInComponent } from './sign-in';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
    {path: '', redirectTo: '/sign-in', pathMatch: 'full'},
    {path: 'table-view', component: TableViewComponent},
    {path: 'blocks-view', component: BlocksViewComponent},
    {path: 'image-upload', component: ImageUploadComponent},
    {path: 'sign-in', component: SignInComponent},
    {path: '**', component: NoContentComponent},
];
