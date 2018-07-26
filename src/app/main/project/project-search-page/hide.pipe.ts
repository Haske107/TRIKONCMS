import { Pipe, PipeTransform } from '@angular/core';
import {isUndefined} from "util";

@Pipe({
  name: 'hide'
})
export class HidePipe implements PipeTransform {

  transform(Projects: any, args?: any): any {
    let NewProjects = [];

    if (Projects) {
      Projects.forEach(Project => {

        // TEMP FILTERS
        // REMOVE DEAD END TILL AUG 26TH
        if(Project.Name !== 'Dead End') {
          NewProjects.push(Project);
        }

        // REMOVE NO PHOTO PROJECTS
        // if (!isUndefined(Project.Stills[0]))  {
        //   NewProjects.push(Project);
        // }



      });
    }





  return NewProjects;
}
}
