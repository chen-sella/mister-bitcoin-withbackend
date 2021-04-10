export function makeId(length = 5) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export function getRandColor() {
  const colors = ['#7887FC', '#ED6694', '#428BF6', '#394468', '#ED8DFB'];
  const randNum = Math.floor(Math.random() * (colors.length - 1));
  return colors[randNum];
}
