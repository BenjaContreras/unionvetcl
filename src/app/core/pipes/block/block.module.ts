import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockPipe } from './block.pipe';



@NgModule({
  declarations: [BlockPipe],  
  imports: [
    CommonModule
  ],
  exports: [BlockPipe]
})
export class BlockModule { }
