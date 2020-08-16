function init() {
  var stage = new createjs.Stage("demoCanvas");
  var circle = new createjs.Shape();
circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
circle.x = 100;
circle.y = 100;
stage.addChild(circle);
// stage.update();
createjs.Tween.get(circle, { loop: true })
  .to({ x: 400 }, 1000, createjs.Ease.getPowInOut(4))
  .to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2))
  .to({ alpha: 0, y: 225 }, 100)
  .to({ alpha: 1, y: 200 }, 500, createjs.Ease.getPowInOut(2))
  .to({ x: 100 }, 800, createjs.Ease.getPowInOut(2));
  
  createjs.Ticker.framerate = 60;
  createjs.Ticker.addEventListener("tick", stage);
  
  stage.on("stagemousedown", function(evt) {
      //alert("the canvas was clicked at "+evt.stageX+","+evt.stageY);
        var circle2 = new createjs.Shape();
        circle2.graphics.beginFill("Red").drawCircle(0, 0, 50);
        circle2.x = evt.stageX;
        circle2.y = evt.stageY;
        circle2.scale = evt.stageX * evt.stageY / 100000;
/*        circle2.on("tick", function(evt) {
          
        };
        */
        stage.addChild(circle2);
  });
}