import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,searchString?: any): any {  
    if(!searchString){
     return value;
    }
    console.log(searchString);
    console.log(value);
    return value.filter((message:any)=>{
      console.log(message);
      return message.title.toLowerCase().includes(searchString) | message.description.toLowerCase().includes(searchString);
    })
  }

}