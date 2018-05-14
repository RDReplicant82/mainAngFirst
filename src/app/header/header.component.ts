import { Component, Output, EventEmitter } from '@angular/core';

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{

    @Output()
    viewChange = new EventEmitter<string>();

    viewToRender(viewName: string) {
        this.viewChange.emit(viewName);
    }

};