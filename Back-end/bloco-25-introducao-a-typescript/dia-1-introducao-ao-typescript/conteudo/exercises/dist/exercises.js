"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.radiusCircleArea = exports.areaOfATrapezoid = exports.areaOfRand = exports.triangleCheck = exports.getPolygonPerimeter = exports.getTriangleArea = exports.getRectangleArea = exports.getSquareArea = void 0;
function getSquareArea(side) {
    return side ** 2;
}
exports.getSquareArea = getSquareArea;
function getRectangleArea(base, height) {
    return base * height;
}
exports.getRectangleArea = getRectangleArea;
function getTriangleArea(base, height) {
    return (base * height) / 2;
}
exports.getTriangleArea = getTriangleArea;
function getPolygonPerimeter(sides) {
    return sides.reduce((acc, side) => acc + side, 0);
}
exports.getPolygonPerimeter = getPolygonPerimeter;
function triangleCheck(sideA, sideB, sideC) {
    const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
    const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
    const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
    return checkSideA && checkSideB && checkSideC;
}
exports.triangleCheck = triangleCheck;
function areaOfRand(D, d) {
    return (D * d) / 2;
}
exports.areaOfRand = areaOfRand;
function areaOfATrapezoid(B, b, h) {
    return (B + b) * h / 2;
}
exports.areaOfATrapezoid = areaOfATrapezoid;
function radiusCircleArea(r) {
    const ℼ = 3.14;
    return ℼ * r ** 2;
}
exports.radiusCircleArea = radiusCircleArea;
