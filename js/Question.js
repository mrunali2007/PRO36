class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder","Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("").attribute("placeholder", "Choose the correct option");
    this.greetings = createElement("h2")

    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question1 = createElement("h3")
    this.option1 = createElement("h4")
    this.option2 = createElement("h4")
    this.option3 = createElement("h4")
    this.option4 = createElement("h4")

    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box
    this.question1.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.input2.hide();

  }

  display(){
    this.title.html("My Quiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    var Question1 = `
    Question1) 
    </br> What goes up but never comes down`
    this.question1.html(Question1); 

    var Option1 = `1) Height`
    this.option1.html(Option1);
    var Option2 = `2) Candle`
    this.option2.html(Option2);
    var Option3 = `3) Wood`
    this.option3.html(Option3);
    var Option4 = `4) Time`
    this.option4.html(Option4);

    this.input1.position(150, 320);
    this.button.position(310, 370);
    this.input2.position(350,320)
    this.question1.position(150,100);
    this.option1.position(150,150);
    this.option2.position(150,180);
    this.option3.position(150,210);
    this.option4.position(150,240);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
    var Greetings = `Thank You, Your Answer Has Been Submitted`
    this.greetings.html(Greetings);
    this.greetings.position(200,50);
    })


  }
}
