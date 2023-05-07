song1 = "";
song2 = "";
rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function preload() {
    song1 = loadSound("Believer(PagalWorld).mp3");
    song2 = loadSound("Bones(PaglaSongs).mp3");
    
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    //Adding code to initialize posenet model
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('poses', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is initialized");
}

function draw() {
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
	stroke("#FF0000");
}

function gotPoses(results) {
    if (results.length > 0) {
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);

    }
}
function play()
{
	song1.play();
	song1.setVolume(1);
	song1.rate(1);
    song2.play();
	song2.setVolume(1);
	song2.rate(1);
}