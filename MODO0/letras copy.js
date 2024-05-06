let x=0
let y=0



function LETRA_A(x,y,size,color, colorStroke){
  
  push()
  translate(x, y)
  scale(size);
  strokeWeight(1)
  stroke(colorStroke)
strokeCap(PROJECT);
strokeJoin(MITER);
fill(color)

beginShape();
vertex(153,0);
vertex(153,60.15);
bezierVertex(201.39,61.62,240.17000000000002,101.3,240.17000000000002,150.05);
bezierVertex(240.17000000000002,198.8,199.9,240,150.22000000000003,240);
bezierVertex(100.54000000000005,240,60.270000000000024,199.73,60.270000000000024,150.05);
bezierVertex(60.270000000000024,100.37000000000003,98.81000000000003,61.860000000000014,147.00000000000003,60.170000000000016);
vertex(147.00000000000003,0);
vertex(0,0);
vertex(0,360);
vertex(59.38,360);
vertex(59.38,330);
bezierVertex(59.38,313.5,72.88,300,89.38,300);
vertex(210.17000000000002,300);
bezierVertex(226.67000000000002,300,240.17000000000002,313.5,240.17000000000002,330);
vertex(240.17000000000002,360);
vertex(300,360);
vertex(300,0);
vertex(153,0);
endShape();
pop()
}


function LETRA_B(x, y , size,color, colorStroke){
push()
translate(x, y)
scale(size);
strokeWeight(1)
  stroke(colorStroke)
strokeCap(PROJECT);
strokeJoin(MITER);
fill(color)
beginShape();
vertex(239.86,150.19);
bezierVertex(239.86,166.65,253.20000000000002,180,269.66,180);
vertex(300,180);
vertex(300,360);
vertex(0,360);
vertex(0,186.29);
vertex(60.05,186.29);
vertex(60.05,299.97);
vertex(209.94,299.97);
bezierVertex(226.56,299.97,240.03,286.5,240.03,269.87);
vertex(240.03,210.12);
bezierVertex(240.03,193.5,226.56,180.02,209.94,180.02);
vertex(0,180.02);
vertex(0,67.05000000000001);
vertex(60,67.05000000000001);
vertex(60,120.39000000000001);
vertex(210.23,120.39000000000001);
bezierVertex(218.45999999999998,120.39000000000001,225.91,117.05000000000001,231.29999999999998,111.66000000000001);
bezierVertex(236.68999999999997,106.27000000000001,240.02999999999997,98.82000000000001,240.02999999999997,90.59);
bezierVertex(240.02999999999997,74.13,226.68999999999997,60.790000000000006,210.22999999999996,60.790000000000006);
vertex(0,60.790000000000006);
vertex(0,0);
vertex(300,0);
vertex(300,120.39);
vertex(269.66,120.39);
bezierVertex(253.20000000000002,120.39,239.86,133.74,239.86,150.19);
endShape();
pop()
}


function LETRA_C(x, y, size, color, colorStroke){
  push()
  translate(x, y)
  scale(size);
  strokeWeight(1)
  stroke(colorStroke)
strokeCap(PROJECT);
strokeJoin(MITER);
fill(color)

  beginShape();
  vertex(300,60);
  vertex(300,0);
  vertex(0,0);
  vertex(0,360);
  vertex(300,360);
  vertex(300,300);
  vertex(150.54,300);
  bezierVertex(100.53999999999999,300,59.999999999999986,259.47,59.999999999999986,209.45999999999998);
  vertex(59.999999999999986,150.52999999999997);
  bezierVertex(59.999999999999986,100.52999999999997,100.52999999999999,59.98999999999997,150.54,59.98999999999997);
  vertex(300,59.98999999999997);
  endShape();
  pop()

}


function LETRA_D(x, y, size, color, colorStroke){
 push()
  translate(x, y)  
 scale(size);
  strokeWeight(1)
  stroke(colorStroke)
strokeCap(PROJECT);
strokeJoin(MITER);
fill(color)
 
  beginShape();
  vertex(0,0);
  vertex(0,60.13);
  vertex(59.86,60.13);
  vertex(59.86,60);
  vertex(150,60);
  bezierVertex(199.78,60,240.14,100.36,240.14,150.14);
  vertex(240.14,209.85999999999999);
  bezierVertex(240.14,259.64,199.77999999999997,300,150,300);
  vertex(59.86,300);
  vertex(59.86,66.13);
  vertex(0,66.13);
  vertex(0,360);
  vertex(300,360);
  vertex(300,0);
  vertex(0,0);
  endShape();
pop()
}
  

function LETRA_E(x, y, size,color, colorStroke){
 push()
  translate(x, y)
  scale(size);
  strokeWeight(1)
  stroke(colorStroke)
strokeCap(PROJECT);
strokeJoin(MITER);
fill(color)
  
  beginShape();
  vertex(300.48,60);
  vertex(300.48,0);
  vertex(0.48,0);
  vertex(0.48,120);
  vertex(0,120);
  vertex(0,180);
  vertex(0.48,180);
  vertex(0.48,360);
  vertex(300.48,360);
  vertex(300.48,300);
  vertex(60.48,300);
  vertex(60.48,270.13);
  bezierVertex(60.48,220.35,100.83,180,150.60999999999999,180);
  vertex(240.48,180);
  vertex(240.48,120);
  vertex(90.48,120);
  bezierVertex(73.91,120,60.480000000000004,106.57,60.480000000000004,90);
  vertex(60.480000000000004,90);
  bezierVertex(60.480000000000004,73.43,73.91,60,90.48,60);
  vertex(300.48,60);
  endShape();
  pop()

}


function LETRA_F(x,y,size,color, colorStroke){
  push()
    translate(x, y)
    scale(size);
    strokeWeight(1)
    stroke(colorStroke)
  strokeCap(PROJECT);
  strokeJoin(MITER);
  fill(color)
  
  beginShape();
  vertex(60.12,270.59);
  bezierVertex(60.12,220.55999999999997,100.68,179.99999999999997,150.71,179.99999999999997);
  vertex(240.3,179.99999999999997);
  vertex(240.3,119.99999999999997);
  vertex(90.12,119.99999999999997);
  bezierVertex(73.55000000000001,119.99999999999997,60.120000000000005,106.56999999999996,60.120000000000005,89.99999999999997);
  vertex(60.120000000000005,89.99999999999997);
  bezierVertex(60.120000000000005,73.42999999999998,73.55000000000001,59.99999999999997,90.12,59.99999999999997);
  vertex(240.29,59.99999999999997);
  vertex(240.29,59.97999999999997);
  vertex(300,59.97999999999997);
  vertex(300,0);
  vertex(0,0);
  vertex(0,360);
  vertex(60.12,360);
  vertex(60.12,270.59000000000003);
  endShape();
  pop()
}


function LETRA_G(x,y, size, color, colorStroke){
   push()
  translate(x, y)
    scale(size);
    strokeWeight(1)
    stroke(colorStroke)
  strokeCap(PROJECT);
  strokeJoin(MITER);
  fill(color)
  beginShape();
  vertex(300,0);
  vertex(0,0);
  vertex(0,360);
  vertex(300,360);
  vertex(300,180);
  vertex(179.82,180);
  vertex(179.82,240.2);
  vertex(206.60999999999999,240.2);
  bezierVertex(207.72,240.07,208.85,240,209.99999999999997,240);
  bezierVertex(211.14999999999995,240,212.27999999999997,240.07,213.38999999999996,240.2);
  vertex(213.38999999999996,240.2);
  bezierVertex(228.35999999999996,241.88,239.99999999999994,254.57999999999998,239.99999999999994,270);
  bezierVertex(239.99999999999994,285.42,228.35999999999996,298.12,213.38999999999993,299.8);
  vertex(213.38999999999993,300);
  vertex(89.64999999999993,300);
  bezierVertex(73.07999999999993,300,59.649999999999935,286.57,59.649999999999935,270);
  bezierVertex(59.649999999999935,268.44,59.76999999999993,266.9,59.999999999999936,265.4);
  vertex(59.999999999999936,90);
  bezierVertex(59.999999999999936,73.43,73.42999999999994,60,89.99999999999994,60);
  vertex(213.38999999999993,60);
  vertex(213.38999999999993,60.2);
  bezierVertex(228.35999999999993,61.88,239.99999999999994,74.58,239.99999999999994,90);
  vertex(239.99999999999994,120);
  vertex(299.99999999999994,120);
  vertex(299.99999999999994,0);
  endShape();
  pop()
}


function LETRA_H(x, y, size,color, colorStroke){
 push()
  translate(x, y)
  scale(size);
  strokeWeight(1)
  stroke(colorStroke)
strokeCap(PROJECT);
strokeJoin(MITER);
fill(color)
beginShape();
vertex(240.14,0);
vertex(240.14,29.9);
bezierVertex(240.14,79.68,199.77999999999997,120.03999999999999,150,120.03999999999999);
vertex(150,120.03999999999999);
bezierVertex(100.22,120.03999999999999,59.86,79.67999999999999,59.86,29.89999999999999);
vertex(59.86,0);
vertex(0,0);
vertex(0,360);
vertex(59.86,360);
vertex(59.86,270.1);
bezierVertex(59.86,220.32000000000002,100.22,179.96000000000004,150,179.96000000000004);
vertex(150,179.96000000000004);
bezierVertex(199.78,179.96000000000004,240.14,220.32000000000005,240.14,270.1);
vertex(240.14,360);
vertex(300,360);
vertex(300,0);
vertex(240.14,0);
endShape();
pop()
}


function LETRA_I(x, y, size,color, colorStroke){
  push()
  translate(x, y)
  scale(size);
  strokeWeight(1)
  stroke(colorStroke)
strokeCap(PROJECT);
strokeJoin(MITER);
fill(color)
beginShape();
vertex(213.64,26.3);
bezierVertex(198.02,10.67,176.67,0.76,153,0);
vertex(153,60.08);
bezierVertex(168.16,61.589999999999996,180,74.38,180,89.94);
bezierVertex(180,106.50999999999999,166.57,119.94,150,119.94);
bezierVertex(133.43,119.94,120,106.50999999999999,120,89.94);
bezierVertex(120,74.38,131.84,61.589999999999996,147,60.08);
vertex(147,0);
bezierVertex(98.68,1.57,60,41.24,60,89.94);
bezierVertex(60,114.8,70.07,137.3,86.36,153.57999999999998);
bezierVertex(101.37,168.6,121.66,178.32999999999998,144.22,179.75);
bezierVertex(146.13,179.88,148.06,179.94,150,179.94);
bezierVertex(151.94,179.94,153.87,179.88,155.78,179.75);
bezierVertex(178.34,178.33,198.63,168.6,213.64,153.57999999999998);
bezierVertex(229.92999999999998,137.29999999999998,240,114.79999999999998,240,89.93999999999998);
bezierVertex(240,65.07999999999998,229.93,42.579999999999984,213.64,26.299999999999983);
endShape();
fill(color)
beginShape();
vertex(180.29,269.99);
bezierVertex(180.29,253.45000000000002,193.7,240.04000000000002,210.23999999999998,240.04000000000002);
vertex(300.01,240.04000000000002);
vertex(300.01,179.93);
vertex(180.3,179.93);
vertex(180.3,179.74);
vertex(119.73000000000002,179.74);
vertex(119.73000000000002,179.93);
vertex(0,179.93);
vertex(0,240.04000000000002);
vertex(89.77,240.04000000000002);
bezierVertex(106.31,240.04000000000002,119.72,253.45000000000002,119.72,269.99);
vertex(119.72,269.99);
bezierVertex(119.72,286.53000000000003,106.31,299.94,89.77,299.94);
vertex(0,299.94);
vertex(0,359.94);
vertex(300,359.94);
vertex(300,299.94);
vertex(210.23000000000002,299.94);
bezierVertex(193.69000000000003,299.94,180.28000000000003,286.53,180.28000000000003,269.99);
endShape();

pop()
}


function LETRA_J(x, y, size,color, colorStroke){
 push()
  translate(x, y)
  scale(size);
strokeWeight(1)
  stroke(colorStroke)
strokeCap(PROJECT);
strokeJoin(MITER);
fill(color)
beginShape();
vertex(300,0.53);
vertex(240,0.53);
vertex(240,0);
vertex(179.97,0);
vertex(179.97,0.53);
vertex(0,0.53);
vertex(0,60.32);
vertex(89.64,60.32);
bezierVertex(139.53,60.32,179.97,100.75999999999999,179.97,150.65);
vertex(179.97,270.73);
bezierVertex(179.97,287.19,166.63,300.53000000000003,150.17,300.53000000000003);
vertex(89.80999999999999,300.53000000000003);
bezierVertex(73.35,300.53000000000003,60.00999999999999,287.19000000000005,60.00999999999999,270.73);
vertex(60.00999999999999,210.53000000000003);
vertex(0,210.53000000000003);
vertex(0,360.30000000000007);
vertex(179.97,360.30000000000007);
vertex(179.97,360.5300000000001);
vertex(240,360.5300000000001);
vertex(240,90.43);
bezierVertex(240,73.80000000000001,253.48,60.330000000000005,270.1,60.330000000000005);
vertex(300,60.330000000000005);
vertex(300,0.53);
endShape();
pop()
}

function LETRA_K(x, y, size,color, colorStroke){
push()
  translate(x, y)
  scale(size);
strokeWeight(1)
  stroke(colorStroke)
strokeCap(PROJECT);
strokeJoin(MITER);
fill(color)
beginShape();
vertex(270,179.8);
bezierVertex(253.54,179.8,240.2,166.46,240.2,150);
vertex(240.2,150);
bezierVertex(240.2,133.54,253.54,120.2,270,120.2);
vertex(300,120.2);
vertex(300,0);
vertex(240.14,0);
vertex(240.14,29.9);
bezierVertex(240.14,79.68,199.77999999999997,120.03999999999999,150,120.03999999999999);
vertex(150,120.03999999999999);
bezierVertex(100.22,120.03999999999999,59.86,79.67999999999999,59.86,29.89999999999999);
vertex(59.86,0);
vertex(0,0);
vertex(0,360);
vertex(59.86,360);
vertex(59.86,270.1);
bezierVertex(59.86,220.32000000000002,100.22,179.96000000000004,150,179.96000000000004);
vertex(150,179.96000000000004);
bezierVertex(199.78,179.96000000000004,240.14,220.32000000000005,240.14,270.1);
vertex(240.14,360);
vertex(300,360);
vertex(300,179.8);
vertex(270,179.8);
endShape();
pop()
}


function LETRA_L(x, y, size,color, colorStroke){
push()
  translate(x, y)
  scale(size);
strokeWeight(1)
  stroke(colorStroke)
strokeCap(PROJECT);
strokeJoin(MITER);
fill(color)
beginShape();
vertex(60,209.93);
vertex(60,0);
vertex(0,0);
vertex(0,360);
vertex(300,360);
vertex(300,299.93);
vertex(150,299.93);
bezierVertex(100.28999999999999,299.93,60,259.64,60,209.93);
endShape();
pop()
}


function LETRA_M(x, y, size,color, colorStroke){
push()
translate(x, y)
scale(size);
strokeWeight(1)
  stroke(colorStroke)
strokeCap(PROJECT);
strokeJoin(MITER);
fill(color)
beginShape();
vertex(180,0);
vertex(180,30);
bezierVertex(180,46.629999999999995,166.52,60.11,149.89,60.11);
vertex(149.89,60.11);
bezierVertex(133.26,60.11,119.77999999999999,46.629999999999995,119.77999999999999,30);
vertex(119.77999999999999,0);
vertex(0,0);
vertex(0,360);
vertex(59.52,360);
vertex(59.52,150.13);
bezierVertex(59.52,133.49,73.01,120,89.65,120);
vertex(89.65,120);
bezierVertex(106.29,120,119.78,133.49,119.78,150.13);
vertex(119.78,360);
vertex(179.88,360);
vertex(179.88,150.13);
bezierVertex(179.88,133.49,193.37,120,210.01,120);
vertex(210.01,120);
bezierVertex(226.64999999999998,120,240.14,133.49,240.14,150.13);
vertex(240.14,360);
vertex(300.01,360);
vertex(300.01,0);
vertex(180.01,0);
endShape();
pop()
}


function LETRA_N(x, y, size,color, colorStroke){
  push()
  translate(x, y)
  scale(size);
strokeWeight(1)
  stroke(colorStroke)
strokeCap(PROJECT);
strokeJoin(MITER);
fill(color)
  beginShape();
  vertex(239.97,0);
  vertex(239.97,270.25);
  bezierVertex(239.97,286.81,226.55,300.23,209.99,300.23);
  vertex(209.99,300.23);
  bezierVertex(193.43,300.23,180.01000000000002,286.81,180.01000000000002,270.25);
  vertex(180.01000000000002,0);
  vertex(0,0);
  vertex(0,360);
  vertex(60.02,360);
  vertex(60.02,89.98);
  bezierVertex(60.02,73.42,73.44,60,90,60);
  vertex(90,60);
  bezierVertex(106.56,60,119.98,73.42,119.98,89.98);
  vertex(119.98,360);
  vertex(300,360);
  vertex(300,0);
  vertex(239.97,0);
  endShape();
pop()
}


function LETRA_N2(x, y, size,color, colorStroke){
push()
  translate(x, y)
  scale(size);
strokeWeight(1)
  stroke(colorStroke)
strokeCap(PROJECT);
strokeJoin(MITER);
fill(color)
  beginShape();
  vertex(239.97,90);
  vertex(239.97,270.25);
  bezierVertex(239.97,286.81,226.55,300.23,209.99,300.23);
  vertex(209.99,300.23);
  bezierVertex(193.43,300.23,180.01000000000002,286.81,180.01000000000002,270.25);
  vertex(180.01000000000002,90);
  vertex(0,90);
  vertex(0,360);
  vertex(60.02,360);
  vertex(60.02,209.98);
  bezierVertex(60.02,193.42,73.44,180,90,180);
  vertex(90,180);
  bezierVertex(106.56,180,119.98,193.42,119.98,209.98);
  vertex(119.98,360);
  vertex(300,360);
  vertex(300,90);
  vertex(239.97,90);
  endShape();
  fill(color)
  beginShape();
  vertex(30.73,0);
  vertex(270,0);
  quadraticVertex(300,0,300,30);
  vertex(300,30);
  quadraticVertex(300,60,270,60);
  vertex(30.73,60);
  quadraticVertex(0.73,60,0.73,30);
  vertex(0.73,30);
  quadraticVertex(0.73,0,30.73,0);
  endShape();
pop()
}


function LETRA_O(x, y, size,color, colorStroke){
push()
  translate(x, y)
  scale(size);
strokeWeight(1)
  stroke(colorStroke)
strokeCap(PROJECT);
strokeJoin(MITER);
fill(color)
beginShape();
vertex(153,0);
vertex(153,60.06);
bezierVertex(201.32,61.64,240,101.30000000000001,240,150);
vertex(240,210);
bezierVertex(240,259.71,199.71,300,150,300);
bezierVertex(100.28999999999999,300,60,259.71,60,210);
vertex(60,150);
bezierVertex(60,101.3,98.68,61.64,147,60.06);
vertex(147,0);
vertex(0,0);
vertex(0,360);
vertex(300,360);
vertex(300,0);
vertex(153,0);
endShape();
pop()
}


function LETRA_P(x, y, size,color, colorStroke){
push()
  translate(x, y)
  scale(size);
strokeWeight(1)
  stroke(colorStroke)
strokeCap(PROJECT);
strokeJoin(MITER);
fill(color)
  beginShape();
  vertex(0,0);
  vertex(0,60.2);
  vertex(210,60.2);
  bezierVertex(226.46,60.2,239.8,73.54,239.8,90);
  vertex(239.8,90);
  bezierVertex(239.8,106.46000000000001,226.46,119.8,210,119.8);
  vertex(59.27,119.8);
  vertex(59.27,66.19999999999999);
  vertex(0,66.19999999999999);
  vertex(0,360);
  vertex(60.03,360);
  vertex(60.03,254.99);
  bezierVertex(60.03,213.57,93.6,180,135.01999999999998,180);
  vertex(300,180);
  vertex(300,0);
  vertex(0,0);
  endShape();
  pop()

}


function LETRA_Q(x, y, size,color, colorStroke){
push()
  translate(x, y)
  scale(size);
strokeWeight(1)
  stroke(colorStroke)
strokeCap(PROJECT);
strokeJoin(MITER);
fill(color)
beginShape();
vertex(270,239.89);
vertex(300,239.89);
vertex(300,0);
vertex(153,0);
vertex(153,60);
vertex(209.99,60);
bezierVertex(226.57,60,240,73.44,240,90.01);
vertex(240,210.19);
bezierVertex(240,226.65,226.66,239.99,210.2,239.99);
vertex(180,239.99);
vertex(180,270.21000000000004);
bezierVertex(180,286.67,166.66,300.01000000000005,150.2,300.01000000000005);
vertex(119.94999999999999,300.01000000000005);
vertex(119.94999999999999,300.1);
vertex(90.01999999999998,300.1);
bezierVertex(73.43999999999998,300.1,60.00999999999998,286.66,60.00999999999998,270.09000000000003);
vertex(60.00999999999998,90.01);
bezierVertex(60.00999999999998,73.43,73.44999999999997,60,90.01999999999998,60);
vertex(147.01,60);
vertex(147.01,0);
vertex(0,0);
vertex(0,360);
vertex(179.89,360);
vertex(179.89,330.22);
bezierVertex(179.89,313.59000000000003,193.36999999999998,300.11,210,300.11);
bezierVertex(226.63000000000002,300.11,240.11,313.59000000000003,240.11,330.22);
vertex(240.11,360);
vertex(300,360);
vertex(300,300.11);
vertex(270,300.11);
bezierVertex(253.37,300.11,239.89,286.63,239.89,270);
vertex(239.89,270);
bezierVertex(239.89,253.37,253.36999999999998,239.89,270,239.89);
endShape();
pop()
}


function LETRA_R(x, y, size,color, colorStroke){
push()
  translate(x, y)
  scale(size);
strokeWeight(1)
  stroke(colorStroke)
strokeCap(PROJECT);
strokeJoin(MITER);
fill(color)
beginShape();
vertex(269.73,120.19);
vertex(300,120.19);
vertex(300,0);
vertex(0,0);
vertex(0,60.79);
vertex(210.23,60.79);
bezierVertex(226.69,60.79,240.03,74.13,240.03,90.59);
bezierVertex(240.03,98.82000000000001,236.7,106.27000000000001,231.3,111.66);
bezierVertex(225.91000000000003,117.05,218.46,120.39,210.23000000000002,120.39);
vertex(60,120.39);
vertex(60,66.78999999999999);
vertex(0,66.78999999999999);
vertex(0,360);
vertex(60.05,360);
vertex(60.05,180.02);
vertex(149.88,180.02);
bezierVertex(199.67,180.02,240.03,220.38,240.03,270.17);
vertex(240.03,360);
vertex(300,360);
vertex(300,179.8);
vertex(269.73,179.8);
bezierVertex(253.27,179.8,239.93,166.45000000000002,239.93,150);
bezierVertex(239.93,141.77,243.26000000000002,134.32,248.66,128.92000000000002);
bezierVertex(254.04999999999998,123.53000000000002,261.5,120.19000000000001,269.73,120.19000000000001);
endShape();
pop()
}


function LETRA_S(x, y, size, color, colorStroke){
push()
  translate(x, y)
scale(size);
strokeWeight(1)
  stroke(colorStroke)
strokeCap(PROJECT);
strokeJoin(MITER);
fill(color)
beginShape();
vertex(60,0);
vertex(60,0.02);
vertex(300,0.02);
vertex(300,60.02);
vertex(90,60.02);
bezierVertex(73.43,60.02,60,73.45,60,90.02000000000001);
vertex(60,120.02000000000001);
bezierVertex(60,136.59,73.43,150.02,90,150.02);
vertex(300,150.02);
vertex(300,360.02);
vertex(0,360.02);
vertex(0,300.02);
vertex(210,300.02);
bezierVertex(226.57,300.02,240,286.59,240,270.02);
vertex(240,240.01999999999998);
bezierVertex(240,223.45,226.57,210.01999999999998,210,210.01999999999998);
vertex(0,210.01999999999998);
vertex(0,0);
vertex(60,0);
endShape();
pop()
}


function LETRA_T(x, y, size,color, colorStroke){
push()
  translate(x, y)
  scale(size);
  strokeWeight(1)
  stroke(colorStroke)
strokeCap(PROJECT);
strokeJoin(MITER);
fill(color)
  beginShape();
  vertex(270.26,59.98);
  vertex(300,59.98);
  vertex(300,0);
  vertex(0,0);
  vertex(0,59.91);
  vertex(29.89,59.91);
  bezierVertex(79.67,59.91,120.03,100.27,120.03,150.05);
  vertex(120.03,359.99);
  vertex(180.12,359.99);
  vertex(180.12,150.11);
  bezierVertex(180.12,100.33000000000001,220.48000000000002,59.97000000000001,270.26,59.97000000000001);
  endShape();
pop()
}


function LETRA_U (xU, yU, size,color, colorStroke){
push()
    translate(xU, yU)
    scale(size);
    strokeWeight(1)
    stroke(colorStroke)
  strokeCap(PROJECT);
  strokeJoin(MITER);
  fill(color)
    beginShape();
    vertex(240.03,0);
    vertex(240.03,210.05);
    bezierVertex(240.03,259.76,199.73000000000002,300.07,150.01,300.07);
    vertex(150.01,300.07);
    bezierVertex(100.29999999999998,300.07,59.989999999999995,259.77,59.989999999999995,210.05);
    vertex(59.989999999999995,0);
    vertex(0,0);
    vertex(0,360);
    vertex(300,360);
    vertex(300,0);
    vertex(240.03,0);
    endShape();
  pop()  
}


function LETRA_V(x, y, size,color, colorStroke){
push()
translate(x, y)
scale(size);
strokeWeight(1)
  stroke(colorStroke)
strokeCap(PROJECT);
strokeJoin(MITER);
fill(color)
beginShape();
vertex(30.02,300.02);
bezierVertex(46.58,300.02,60,313.44,60,330);
vertex(60,360);
vertex(240.02,360);
vertex(240.02,330.05);
bezierVertex(240.02,313.49,253.44,300.07,270,300.07);
vertex(300,300.07);
vertex(300,0);
vertex(240.03,0);
vertex(240.03,180.13);
bezierVertex(240.03,229.76999999999998,199.79,270,150.16,270);
vertex(150.16,270);
bezierVertex(100.52,270,60.28999999999999,229.76,60.28999999999999,180.13);
vertex(60.28999999999999,0);
vertex(0,0);
vertex(0,300.02);
vertex(30.02,300.02);
endShape();
pop()
}


function LETRA_W(x, y, size,color, colorStroke){
  push()
translate(x, y)
scale(size);
strokeWeight(1)
  stroke(colorStroke)
strokeCap(PROJECT);
strokeJoin(MITER);
fill(color)
beginShape();
vertex(120,360);
vertex(120,330);
bezierVertex(120,313.37,133.48,299.89,150.11,299.89);
vertex(150.11,299.89);
bezierVertex(166.74,299.89,180.22000000000003,313.37,180.22000000000003,330);
vertex(180.22000000000003,360);
vertex(300,360);
vertex(300,0);
vertex(240.48,0);
vertex(240.48,209.87);
bezierVertex(240.48,226.51,226.98999999999998,240,210.35,240);
vertex(210.35,240);
bezierVertex(193.70999999999998,240,180.22,226.51,180.22,209.87);
vertex(180.22,0);
vertex(120.12,0);
vertex(120.12,209.87);
bezierVertex(120.12,226.51,106.63000000000001,240,89.99000000000001,240);
vertex(89.99000000000001,240);
bezierVertex(73.35000000000001,240,59.860000000000014,226.51,59.860000000000014,209.87);
vertex(59.860000000000014,0);
vertex(0,0);
vertex(0,360);
vertex(120,360);
endShape();
pop()
}


function LETRA_X(x, y, size,color, colorStroke){
  push()
  translate(x, y)
  scale(size);
  strokeWeight(1)
  stroke(colorStroke)
strokeCap(PROJECT);
strokeJoin(MITER);
fill(color)
  beginShape();
  vertex(210.23,209.98);
  bezierVertex(193.81,209.98,180.5,196.67,180.5,180.25);
  vertex(180.5,180.25);
  bezierVertex(180.5,163.82999999999998,193.81,150.52,210.23,150.52);
  vertex(300,150.52);
  vertex(300,0);
  vertex(180,0);
  vertex(180,90.02);
  bezierVertex(180,106.44,166.69,119.75,150.27,119.75);
  vertex(150.27,119.75);
  bezierVertex(133.85000000000002,119.75,120.54,106.44,120.54,90.02);
  vertex(120.54,0);
  vertex(0,0);
  vertex(0,150.52);
  vertex(89.77,150.52);
  bezierVertex(106.19,150.52,119.5,163.83,119.5,180.25);
  vertex(119.5,180.25);
  bezierVertex(119.5,196.67000000000002,106.19,209.98,89.77,209.98);
  vertex(0,209.98);
  vertex(0,360);
  vertex(120.54,360);
  vertex(120.54,270.23);
  bezierVertex(120.54,253.81,133.85,240.50000000000003,150.27,240.50000000000003);
  vertex(150.27,240.50000000000003);
  bezierVertex(166.69,240.50000000000003,180,253.81000000000003,180,270.23);
  vertex(180,360);
  vertex(300,360);
  vertex(300,209.98);
  vertex(210.23000000000002,209.98);
  endShape();
pop()
}

function LETRA_Y(x, y, size,color, colorStroke){
  push()
translate(x,y)
scale(size);
strokeWeight(1)
  stroke(colorStroke)
strokeCap(PROJECT);
strokeJoin(MITER);
fill(color)
beginShape();
vertex(300,180);
vertex(300,0);
vertex(240,0);
vertex(240,149.97);
bezierVertex(240,166.55,226.56,180,209.97,180);
vertex(90.02,180);
bezierVertex(73.44,180,59.989999999999995,166.56,59.989999999999995,149.97);
vertex(59.989999999999995,0);
vertex(0,0);
vertex(0,240);
vertex(89.9,240);
bezierVertex(106.52000000000001,240,120,253.48,120,270.1);
vertex(120,360);
vertex(180,360);
vertex(180,270.1);
bezierVertex(180,253.48000000000002,193.48,240.00000000000003,210.1,240.00000000000003);
vertex(300.28999999999996,240.00000000000003);
vertex(300.28999999999996,180.00000000000003);
vertex(299.99999999999994,180.00000000000003);
endShape();
pop()
}


function LETRA_Z(x, y, size,color, colorStroke){
  push()
  translate(x,y)
  scale(size);
strokeWeight(1)
  stroke(colorStroke)
strokeCap(PROJECT);
strokeJoin(MITER);
fill(color)
  beginShape();
  vertex(240,0);
  vertex(240,0.02);
  vertex(0,0.02);
  vertex(0,60.02);
  vertex(209.6,60.02);
  bezierVertex(226.39,60.02,240,73.63,240,90.42);
  vertex(240,120.02000000000001);
  bezierVertex(240,136.59,226.57,150.02,210,150.02);
  vertex(89.55,150.02);
  bezierVertex(73.22999999999999,150.02,60,163.25,60,179.57000000000002);
  vertex(60,179.71);
  bezierVertex(60,196.45000000000002,46.43,210.02,29.69,210.02);
  vertex(0,210.02);
  vertex(0,360.02);
  vertex(300,360.02);
  vertex(300,300.02);
  vertex(90.32,300.02);
  bezierVertex(73.57,300.02,59.99999999999999,286.44,59.99999999999999,269.7);
  vertex(59.99999999999999,240.01999999999998);
  bezierVertex(59.99999999999999,223.45,73.42999999999999,210.01999999999998,90,210.01999999999998);
  vertex(210.45,210.01999999999998);
  bezierVertex(226.76999999999998,210.01999999999998,240,196.79,240,180.46999999999997);
  vertex(240,180.46999999999997);
  bezierVertex(240,163.64999999999998,253.63,150.01999999999998,270.45,150.01999999999998);
  vertex(300,150.01999999999998);
  vertex(300,0);
  vertex(240,0);
  endShape();
  pop()
}


function LETRA_espacio(x, y, size,color, colorStroke){
  push()
  translate(x,y)
  scale(size);
strokeWeight(1)
  stroke(colorStroke)
strokeCap(PROJECT);
strokeJoin(MITER);
fill(color)
vertex(6.52,0);
vertex(58.78,0);
quadraticVertex(65.3,0,65.3,6.52);
vertex(65.3,6.530000000000001);
quadraticVertex(65.3,13.05,58.78,13.05);
vertex(6.52,13.05);
quadraticVertex(0,13.05,0,6.530000000000001);
vertex(0,6.52);
quadraticVertex(0,0,6.52,0);
endShape();
pop()
}