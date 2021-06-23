noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    //it is used to start the execution.^
    
}

function modelLoaded(){
    console.log("PoseNet Is On...");
}

function draw(){
    background('#00CCFF');
    document.getElementById("text_side").innerHTML="Width and Height of the Text is - "+difference+"px";
    fill('#FFCC00');
    stroke('#FFCC00');
text('Vihaan',noseX,noseY);
textSize(difference);
    
    

}

function gotPoses(results){
if(results.length>0){
//^it is used to avoid any of the errors and stoping the prosseing of poseNet If condition is requried.
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("NoseX=" + noseX + " NoseY=" + noseY);
//^the nose functions..
rightWristX=results[0].pose.rightWrist.x;
leftWristX=results[0].pose.leftWrist.x;
difference=floor(leftWristX-rightWristX);
console.log("leftWristX =" + leftWristX + " rightWristX =" + rightWristX + " difference = " + difference);
 //^this is the final code..
}    
}