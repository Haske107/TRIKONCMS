import { Pipe, PipeTransform } from '@angular/core';
import {isUndefined} from "util";

@Pipe({
  name: 'hide',
  pure: false
})
export class HidePipe implements PipeTransform {

  transform(Projects: any, Type: any): any {
    let NewProjects = [];

    if (Projects) {
      Projects.forEach(Project => {
        if(Project.Name !== 'Dead End'
        && Project.Name !== 'Costco'
          && Project.Name !== 'ArtFamilia'
          && Project.Name !== 'Trikon Promo Shorts'
          && Project.Name !== 'My Beautiful Thing'
          && Project.Name !== 'Hatch Beauty'
        ) {


          if (Type === "all") {
            console.log("test");
            NewProjects.push(Project);
          }
          if (Type === "narrative") {
            if (Project.Type.toUpperCase() === "NARRATIVE") {
              NewProjects.push(Project);
            }
          }
          if (Type === "fashion") {
            if (Project.Type.toUpperCase() === "FASHION" ) {
              NewProjects.push(Project);
            }
          }
          if (Type === "music") {
            if (Project.Type.toUpperCase() === "MUSIC VIDEO" ) {
              NewProjects.push(Project);
            }
          }
        }
      });
    }






  return NewProjects;
}
}
