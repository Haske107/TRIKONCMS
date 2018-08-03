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
          if (Type === "Narrative") {
            if (Project.Type === "Short Film" || Project.Type === "Documentary") {
              NewProjects.push(Project);
            }
          }
          if (Type === "Fashion") {
            if (Project.Type === "Commercial" || Project.Type === "Fashion Film" || Project.Type === "Fashion") {
              NewProjects.push(Project);
            }
          }
          if (Type === "Music") {
            if (Project.Type === "Music Video" ) {
              NewProjects.push(Project);
            }
          }
        }
      });
    }






  return NewProjects;
}
}
