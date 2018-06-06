import { Pipe , PipeTransform} from "@angular/core";

@Pipe({ 
    name: 'filter'
})

export class FilterPipe implements PipeTransform{
    filteredData = [];
    console
    transform(value : any , search){
        console.log(search)
        if(search === undefined){
            this.filteredData = [];
            return value;
        }else{
            this.filteredData = [];
           for (const v of value){
               console.log(v);
               if(v.toString().indexOf(search)>=0){
                   this.filteredData.push(v);
               }
           }
        }
        return this.filteredData; 
    }
}