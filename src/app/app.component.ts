import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Food} from "./game-engine/food";
import {Snake} from "./game-engine/snake";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, AfterViewInit {
  title = 'snakeGame1938web';
  gameBoard: any;
  snake = new Snake();
  food = new Food(this.snake);

  ngAfterViewInit() {
    this.gameBoard = document.querySelector('.game-board');
    window.requestAnimationFrame(this.start.bind(this));
  }

  ngOnInit(): void {
  }

  start(currentTime: any) {

    window.requestAnimationFrame(this.start.bind(this));

    this.update();
    this.draw();
  }

  update() {
    this.snake.update();
    this.food.update();
  }

  draw() {
    this.gameBoard.innerHTML = '';
    this.snake.draw(this.gameBoard);
    this.food.draw(this.gameBoard);
  }
}
