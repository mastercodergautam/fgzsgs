//https://teachablemachine.withgoogle.com/models/T7M2bRzaH/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/T7M2bRzaH/model.json",modelload)

}
function modelload(){
    console.log("modelready");
    classifier.classify(gotresult)
}
function gotresult(error,results){
if(error){
    console.log(error);

}
console.log(results)
}
