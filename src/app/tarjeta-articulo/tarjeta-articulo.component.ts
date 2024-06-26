import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MaterialModule} from "../material/material.module";
import { MiniArticuloModel} from "../models/mini-articulo.model";
import {format} from "../utils/date-utils";
import {NgClass} from "@angular/common";


@Component({
  selector: 'app-tarjeta-articulo',
  templateUrl: './tarjeta-articulo.component.html',
  styleUrl: './tarjeta-articulo.component.css',
  standalone: true,
  imports: [MaterialModule, MatButtonModule, NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TarjetaArticuloComponent {
  @Input() articulo!: MiniArticuloModel;
  @Input() horizontal: boolean = false;
  protected readonly format = format;
}
