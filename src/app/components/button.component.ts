import { Component } from '@angular/core';

@Component({
    selector: 'my-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})

export class Button{
    buttonText: string = 'ACESSAR';
    buttonNumber: number = 1;
    buttonTexts: string[] = ['VENDER', 'COMPRAR']
    buttonObject = {
        label: 'Adicionar ao carrinho',
    }
}