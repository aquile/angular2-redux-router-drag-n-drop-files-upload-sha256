import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppActions } from '../../app.actions';
import { Patient } from '../../reducers';

@Component({
    selector: 'sign-in',
    templateUrl: 'sign-in.component.html',
    styleUrls: ['sign-in.component.scss']
})
export class SignInComponent implements OnInit {
    // patient: Patient;
    //
    // constructor(protected router: Router,
    //             protected actions: AppActions) {}
    //
    ngOnInit() {
    //     this.patient = {
    //         id: 0,
    //         dob: moment(0).format('YYYY-MM-DD'),
    //         name: ''
    //     };
    }
    //
    // savePatient() {
    //     this.patient.id = new Date().getTime();
    //     this.actions.onAddPatient(this.patient);
    //     this.router.navigate(['/patient-info']);
    // }
}
