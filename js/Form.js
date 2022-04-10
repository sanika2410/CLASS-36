class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }
setElementPosition(){
  this.titleImg.position(width/2,100)
  this.input.position(width/2-100,height/2-80)
  this.playButton.position(width/2-50,height/2-30)
  this.greeting.position(width/2,height/2)

}
setElementStyle(){
  this.titleImg.class("gameTitle")
  this.input.class("customInput")
  this.playButton.class("customButton")
  this.greeting.class("greeting")
}
display(){
  this.setElementPosition()
  this.setElementStyle()
  this.handlemousePressed()
}
handlemousePressed(){
  this.playButton.mousePressed(()=>{
    this.input.hide()
    this.playButton.hide()
    var message='hello ${this.input.value()} </br> wait for another player to join';
    this.greeting.html(message)
  })
}

}

