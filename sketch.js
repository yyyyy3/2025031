let seaGrass = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // 設置畫布背景透明
  clear();
  // 創建海草物件
  for (let i = 0; i < 30; i++) { // 增加到 30 條線
    seaGrass.push(new SeaGrass(random(width), height));
  }
}

function draw() {
  clear(); // 清除畫布，保持背景透明

  // 繪製海草
  for (let i = 0; i < seaGrass.length; i++) {
    seaGrass[i].update();
    seaGrass[i].display();
  }
}

// 定義海草類別
class SeaGrass {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = 0; // 初始角度為0
    this.length = 10 * 37.795275591; // 海草的長度，50公分轉換為像素
    this.amplitude = random(1, 3); // 輕微波動幅度
    this.frequency = random(0.01, 0.03); // 波動頻率
  }

  update() {
    // 改變海草隨時間波動的角度
    this.angle = sin(frameCount * this.frequency) * this.amplitude;
  }

  display() {
    push();
    translate(this.x, this.y); // 將繪製原點移到海草的基點
    rotate(this.angle); // 根據角度旋轉
    stroke(34, 139, 34, 150); // 海草顏色，帶透明度
    strokeWeight(10); // 設定線條寬度為原來的五倍
    line(0, 0, 0, -this.length); // 畫海草
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}