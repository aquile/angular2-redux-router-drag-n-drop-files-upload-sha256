import { Component, OnInit } from '@angular/core';
import { AppActions } from '../app.actions';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'table-view',
    styleUrls: ['table-view.component.scss'],
    templateUrl: 'table-view.component.html',
})
export class TableViewComponent implements OnInit {
    // private patients: any[];
    // @select(state => state.patients) patients$: Observable <any>;

    constructor(protected actions: AppActions){}

    public ngOnInit() {
        // this.patients$.subscribe(arr => this.patients = arr);
    }

    removePatient(id){
        // this.actions.onRemovePatient({id})
    }
}
