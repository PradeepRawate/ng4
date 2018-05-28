import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mapToIterable'
})

export class MapToIterable implements PipeTransform {
    transform(value, args: string[]): any {
        const keys = [];
        for (const key in value) {
            if (key) {
                keys.push({key: key, value: value[key]});
            }
        }
        return keys;
    }
}
