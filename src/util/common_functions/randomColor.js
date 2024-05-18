export default function randomColor(length) {
    let hex = Math.floor(length * 0xf1a383);
    let color = "#" + hex.toString(16);

    var r = parseInt(color.slice(1, 3), 16),
      g = parseInt(color.slice(3, 5), 16),
      b = parseInt(color.slice(5, 7), 16);

    return [
      "rgba(" + r + ", " + g + ", " + b + ", 0.3)",
      "rgba(" + r + ", " + g + ", " + b + ", 1)",
    ];
  }