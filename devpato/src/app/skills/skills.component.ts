import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit {
  launch = false;
  counter = 10;
  interval: any;
  start = false;
  constructor() {}

  ngOnInit() {}

  launchRocket() {
    this.start = true;
    this.interval = setInterval(_ => {
      if (this.counter === 0) {
        clearInterval(this.interval);
        setTimeout(_ => {
          this.launch = true;
          setTimeout(_ => {
            this.start = false;
            this.launch = false;
            this.counter = 10;
          }, 5000);
        }, 0);
      } else {
        this.counter--;
      }
    }, 100);
  }
}
