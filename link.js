function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
  image(video, 0, 0, 300, 300);
}

function takeSnapshot() {
    save('minhaFotoComFiltro.png');
}

function modelLoaded() {
    console.log('poseNet foi inicializado');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("olho esquerdo x = " + results[0].pose.leftEye.x);
        console.log("olho esquerdo y = " + results[0].pose.leftEye.y);
        console.log("olho direito x = " + results[0].pose.rigthEyeEye.x);
        console.log("olho direito y = " + results[0].pose.rigthEye.y);
    }
}