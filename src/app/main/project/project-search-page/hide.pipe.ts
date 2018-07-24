import { Pipe, PipeTransform } from '@angular/core';
import {isUndefined} from "util";

@Pipe({
  name: 'hide'
})
export class HidePipe implements PipeTransform {

  transform(Projects: any, args?: any): any {
    let NewProjects = [];
    Projects.forEach(Project => {
      if (!isUndefined(Project.Stills[0]))  {
        NewProjects.push(Project);
      }
    });
  return NewProjects;
}
}
