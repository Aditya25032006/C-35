class Form{
    constructor() {

    }

    display() {
    var title = createElement("h2");
    title.html("Multiplayer Game");
    title.position(250,50);

    var input = createInput("NAME");
    input.position(250,250);

    var button = createButton("PLAY");
    button.position(280,280);

    var greeting = createElement("h4");
    
    button.mousePressed(function(){
        input.hide();
        button.hide();

        var name = input.value();

        playerCount +=1;
        player.update(name);
        player.updateCount(playerCount);

        greeting.html("Hello " + name);
        greeting.position(100,50);
        


    })

    }

}