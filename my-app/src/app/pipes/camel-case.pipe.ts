import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {

    let forChar: string[] = []
    let finalCamelArray: string[] = []

    value.split(' ')
      .map((word, index) => {
        word.split('').map((char, index) => {
          forChar.push(index % 2 == 0 ? char.toUpperCase() : char.toLowerCase())
        })
        finalCamelArray[index] = forChar.join('')
        forChar = []
      })
    
    return finalCamelArray.join(' ')

  }

}
