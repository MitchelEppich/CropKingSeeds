export default function sketch(p) {
    let inc = 0.01;
    let start = 0;

    p.setup = function() {
        p.createCanvas(400, 400, p.WEBGL);
        p.pixelDensity(1);
    };

    // p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    //     if (props.rotation) {
    //         rotation = (props.rotation * Math.PI) / 180;
    //     }
    // };

    p.draw = function() {
        var yoff = 0;
        p.loadPixels();
        for (var y = 0; y < p.height; y++) {
            var xoff = 0;
            for (var x = 0; x < p.width; x++) {
                var index = (x + y * p.width) * 4;
                var r = p.noise(xoff, yoff) * 255;
                p.pixels[index + 0] = r;
                p.pixels[index + 1] = r;
                p.pixels[index + 2] = r;
                p.pixels[index + 3] = 255;
                xoff += inc;
            }
            yoff += inc;
        }
        p.updatePixels();
    };
}
