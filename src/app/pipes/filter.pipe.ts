import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(dataArray: any[], value: string, parameter: string ): any[] {
        if (!dataArray) {
            return [];
        }
        if (!parameter || !value) {
            return dataArray;
        }
        return dataArray.filter(item => item[parameter].toLowerCase().includes(value.toLowerCase()));
    }
}
