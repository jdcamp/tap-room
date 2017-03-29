import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: 'lowVolume',
  pure: true
})

export class LowVolumePipe implements PipeTransform {
  transform(input: Keg[], args) {
    let output: Keg[] = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i].volumeRemaining < 10) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
