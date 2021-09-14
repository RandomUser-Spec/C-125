song = "";
score_right_wrist = 0;
score_left_wrist = 0;
right_wristX = 0;
right_wristY = 0;
left_wristX = 0;
left_wristY = 0;

function preload()
{
    song = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}