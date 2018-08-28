import { Component, OnInit } from '@angular/core';
import { Project } from '../../_models/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  projects: Project[] = [
    {
      name: "pathfinder", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas leo at semper mattis. Cras nulla arcu, consequat eget convallis vitae, maximus in orci. Vivamus fermentum molestie vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut quis ex a ligula fermentum ornare nec eu nisl.",
      tags: ["Annual Project","No experience required, First year majority"],
      icons: ["clock","brain"]
    },
    {
      name: "pathfinder", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas leo at semper mattis. Cras nulla arcu, consequat eget convallis vitae, maximus in orci. Vivamus fermentum molestie vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut quis ex a ligula fermentum ornare nec eu nisl.",
      tags: ["Annual Project","No experience required, First year majority","Competition Rocket"],
      icons: ["clock","brain","award"]
    },
    {
      name: "pathfinder", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas leo at semper mattis. Cras nulla arcu, consequat eget convallis vitae, maximus in orci. Vivamus fermentum molestie vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut quis ex a ligula fermentum ornare nec eu nisl.",
      tags: ["Annual Project","No experience required, First year majority","Competition Rocket"],
      icons: ["clock","brain","award"]
    },
    {
      name: "pathfinder", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas leo at semper mattis. Cras nulla arcu, consequat eget convallis vitae, maximus in orci. Vivamus fermentum molestie vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut quis ex a ligula fermentum ornare nec eu nisl.",
      tags: ["Annual Project","No experience required, First year majority","Competition Rocket"],
      icons: ["clock","brain","award"]
    }
  ]

  constructor() { }

  ngOnInit() {
  }


}
