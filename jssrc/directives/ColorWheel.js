export class ColorWheel {
  constructor() {
    this.restrict = 'E';
    this.template = '<canvas id="color-wheel" width="300" height="300"></canvas>';
    this.scope = {
      selectedColor: '='
    }
  }

  link($scope, $element, $attrs) {
    const canvas = $element.find('canvas')[0];
    const ctx = canvas.getContext('2d');
    const image = new Image();
    const w = canvas.width, h = canvas.height;
    image.onload = function() {
      ctx.drawImage(image, 0, 0, image.width, image.height);
    };
    image.src = '/img/color-wheel.png';
    ctx.clearRect(w/2 - 50, h/2 - 50, w/2 - 50, h/2 - 50);
    ctx.arc(w/2, h/2, 50, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#' + $scope.selectedColor;
    ctx.fill();

    $element.bind('click', function(e) { 
      const canvasX = Math.floor(e.pageX - canvas.offsetLeft);
      // TODO: why the 44?
      const canvasY = Math.floor(e.pageY - canvas.offsetTop) - 44;
      const imageData = ctx.getImageData(canvasX, canvasY, 1, 1);
      const pixel = imageData.data;
      const dColor = pixel[2] + 256 * pixel[1] + 65536 * pixel[0];
      
      if (dColor != 0) {
        const color = ('000000' + dColor.toString(16)).substr(-6);
        $scope.selectedColor = color;
        $scope.$parent.$parent.$digest();
        
        ctx.beginPath();
        ctx.clearRect(w/2 - 50, h/2 - 50, w/2 - 50, h/2 - 50);
        ctx.arc(w/2, h/2, 50, 0, 2 * Math.PI, false);
        ctx.fillStyle = '#' + color;
        ctx.fill();
        ctx.closePath();
      }
    });
  }
}

ColorWheel.$inject = [];
