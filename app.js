window.addEventListener('contextmenu', function (e) {
  console.log('context menu disabled');
  e.preventDefault();
}, false);

document.addEventListener('mouseup', function (e) {
  if (e.button === 2) {
    console.log('right-click enabled');
  }
}, false);