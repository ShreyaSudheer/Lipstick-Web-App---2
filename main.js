noseX = 0;
noseY = 0;

function preload()
{
   clown_nose = loadImage('https://i.postimg.cc/g0mG8Fpd/clown-nose-png-12.png');
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw()
{
    image(video, 0, 0, 300,300);
    image(clown_nose, noseX, noseY, 30, 30);
}
function modelLoaded()
{
    console.log("The PoseNet Model is Loaded");
}
function take_snapshot()
{
    save("My_Snapshot.png");
}
function gotPoses(results)
{
    console.log(results);
    noseX =  results[0].pose.nose.x;
    console.log("nose X = " + noseX - 15);
    noseY =  results[0].pose.nose.y;
    console.log("nose Y = " + noseY - 10);
}