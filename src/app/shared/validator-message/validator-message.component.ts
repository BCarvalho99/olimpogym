import {Component, Input} from '@angular/core';

@Component({
    selector: 'ac-vmessage',
    templateUrl: './validator-message.component.html'
})
export class ValidatorMessageComponent{
    @Input() text = '';
    @Input() classError = 'text-warning'
}