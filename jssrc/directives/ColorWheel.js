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
    image.onload = function() {
      ctx.drawImage(image, 0, 0, image.width, image.height);
    };
    image.src = '/img/color-wheel.png';

    $element.bind('click', function(e) { 
      const canvasX = Math.floor(e.pageX - canvas.offsetLeft);
      // TODO: why the 44?
      const canvasY = Math.floor(e.pageY - canvas.offsetTop) - 44;
      console.log(canvasX, canvasY);
      const imageData = ctx.getImageData(canvasX, canvasY, 1, 1);
      const pixel = imageData.data;
      const dColor = pixel[2] + 256 * pixel[1] + 65536 * pixel[0];
      
      if (dColor != 0) {
        const color = ('0000' + dColor.toString(16)).substr(-6);
        $scope.selectedColor = color;
        $scope.$parent.$digest();
      }
    });
  }
}

ColorWheel.$inject = [];
