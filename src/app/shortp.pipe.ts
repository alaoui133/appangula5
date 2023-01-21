import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortp'
})
export class ShortpPipe implements PipeTransform {

  mylimit:number=0;

  transform(value: any, args?: number): any {
    
    if (!value) {
      return null;
    }
    this.mylimit=(args)? args:30;
    return value.substr(0,this.mylimit)+'...';
  }

}
