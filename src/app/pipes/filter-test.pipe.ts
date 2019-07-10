import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTest'
})
export class FilterTestPipe implements PipeTransform {

  transform(value: any[], searchJson: any) {

    if (searchJson.type.length === 0) {
      return value;
    }

    Array.prototype['equals'] = function (array) {
      if (!array) {
        return false;
      }
      for (let i = 0, l = this.length; i < l; i++) {
        if (array.includes(this[i].toLowerCase())) {
          return true;
        }
      }
      return false;
    };

    return value.filter(it => {
      let type;
      if (searchJson.type.length !== 0) {
        type = searchJson.type.includes(it.type.toString().toLowerCase());
      } else {
        type = true;
      }
      return (type);
    });

}
}
