var nosex = 0
var nosey = 0
function preload (){
    narizpahaço = loadImage ('https://i.postimg.cc/DyT8F8C0/bigode.png')
}
function setup(){
canvas = createCanvas (300 , 300)
canvas.center()
video = createCapture(VIDEO)
video.size (300 , 300 )
video.hide()
posenet = ml5.poseNet(video , modelo )
posenet.on('pose', pegarpose)
}
function draw (){
image(video , 0 , 0 , 300 , 300)
//fill (255 , 0 , 0)
//stroke (255 , 0 , 0)
//circle (nosex , nosey , 20)
image(narizpahaço, nosex -25 , nosey  , 50  , 40 )
}
function tirarfoto(){
save ('foto.png')
}
function modelo (){
 console.log('funcionado')

}
function pegarpose (results){
if (results.length > 0 ){
    console.log(results)
    console.log('x:', results [0].pose.nose.x)
    console.log('y:', results [0].pose.nose.y)
    nosex = results[0].pose.nose.x
    nosey = results[0].pose.nose.y
}
}