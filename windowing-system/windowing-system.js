// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}
Size.prototype.resize = function (width, height) {
  this.width = width;
  this.height = height;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    if (newSize.width > 0 && newSize.width <= 300) {
      this.size.width = newSize.width;
    } else if (newSize.width <= 0) {
      this.size.width = 1;
    } else if (newSize.width > 300) {
      this.size.width = 300;
    }
    if (newSize.height > 0 && newSize.height <= 300) {
      this.size.height = newSize.height;
    } else if (newSize.height <= 0) {
      this.size.height = 1;
    } else if (newSize.height > 400) {
      this.size.height = 400;
    }
  }

  move(newPosition) {
    // Screen size is (800,600)
    if (newPosition.x >= 0) {
      this.position.x = newPosition.x;
    } else if (newPosition.x < 0) {
      this.position.x = 0;
    } else if (newPosition.x > this.size.width) {
      this.position.x = 800;
    }
    if (newPosition.y >= 0) {
      this.position.y = newPosition.y;
    } else if (newPosition.y < 0) {
      this.position.y = 0;
    } else if (newPosition.y > this.size.height) {
      this.position.y = 600;
    }
  }
}
