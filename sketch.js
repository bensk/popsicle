
var c_803 = ["Penelope","Randy","Brandon","Edelyn","Danielys","Angelina","Jason","Joseph","Lizbeth","Aaron","Melitza","Jayce","Kimberly","Candida","Edwin","Milka","Ricardo","Cindy","Tyzhae","Cynthia","Jayleene","Johan","Francis","Aury","Jalene","Jessica","Jared","Alexis","Kevin"]

var c_801 = [ "Geehaan", "Jerry", "Ashley", "Shaynne", "Jesus", "Brindy", "Beyonce", "Gianni", "Denise", "Daphne", "Anderson", "Jesus", "Marlene", "Jason", "Diana", "Stephano", "Aminata", "Christine", "Kadidia", "Joncarlo", "Gema", "Kevin", "Nisa", "Tyler", "Keith", "Derek", "Jaden", "Xavier", "Leslye", "Yostin"];
var c_804 = ["Adrianna", "Alexander", "Alyssa", "Axel", "Brianna", "Caitlin", "Chanel", "Chasity", "Crystal", "Dallana", "Devonte", "Fatoumata", "Jaron", "Jeremiah", "Jese", "Joncarlo", "Josue", "Keisha", "Kendra", "Luis", "Mariam", "Mariyam", "Matthew", "Mayra", "Melvin", "Nyasia", "Ricardo", "Tanisha", "Xiuya", "Yafer", "Yaritza"]
var econ = ["Anthony", "Bianny", "Charleen", "Christopher", "Darlenis", "Dazhane", "Elias", "Elvis", "Hailey", "Hector", "Jennifer", "Joanna", "Jonathan", "Jose", "Joshua", "Julian", "Julio", "Kellam", "Marlene", "Nephi", "Yennifer"]
var cs_11 = ["Aaron", "Aileen", "Angie", "Bestydanis", "Brionna", "David", "Dayris", "Genesis", "Gregorio", "Grismely", "Ibrahim", "Izaiyah", "James", "Jorge", "Jose", "Justin", "Karen", "Luis", "Marquis", "Michael Chavez", "Michael Delvalle", "Mommina", "Steven", "Vianelys", "Yomaris", "Zaire"]

var ap =["TiJuan", "Dayris", "Michael F.", "James", "Michael DV", "Brionna", "Luis", "David", "Karen", "Jose", "Izaiyah", "Genesis", "Grismely", "Aaron", "Ibrahim", "Mommina", "Aileen", "Gissel", "Vianelys", "Bestydanis", "Angie", "Jorge", "Justin", "Zaire", "Steven", "Terrell", "Gregorio", "Yomaris"]
    // var index;
    // Get a random element from an array

function setup() {
    createCanvas(windowWidth, windowHeight)
    background('white')
        // var index = floor(random(words.length)); // Convert to integer
        // var inp = createInput('');
        // inp.input(myInputEvent);
        // text(words[index],10,50);  // Displays one of the four words

    button801 = createButton("801")
    button801.position(windowWidth / 2-260, 10);
    // button801.touchEnded(popsicle801);
    button803 = createButton("803")
    button803.position(windowWidth / 2-60, 10);
    // button803.touchEnded(popsicle803);
    button804 = createButton("804")
    button804.position(windowWidth / 2+140, 10);
    // button804.touchEnded(popsicle804);

    buttonAP = createButton("AP")
    buttonAP.position(windowWidth/2-30,280)
    touchStarted();
    touchEnded();

    function touchStarted() {
        button801.touchStarted(popsicle801);
        button803.touchStarted(popsicle803);
        button804.touchStarted(popsicle804);
        buttonAP.touchStarted(popsicleAP)

    }


    function touchEnded() {
        return false;
    }
}



function popsicle801() {
    background('white')
        // line(0, 0, 50, 50)
        // text(words[1], 10, 50)
    textFont("Fugaz One")
    textAlign(CENTER)
    textSize(72)
    text(String(c_801[floor(random(c_801.length))]), windowWidth / 2, windowHeight / 2); // Displays one of the four words

}

function popsicle803() {
    background('white')
        // line(0, 0, 50, 50)
        // text(words[1], 10, 50)
    textSize(72)
    textAlign(CENTER)

    textFont("Fugaz One")
    text(String(c_803[floor(random(c_801.length))]), windowWidth / 2, windowHeight / 2); // Displays one of the four words

}

function popsicle804() {
    background('white')
        // line(0, 0, 50, 50)
        // text(words[1], 10, 50)
    textSize(72)
    textAlign(CENTER)

    textFont("Fugaz One")

    text(String(c_804[floor(random(c_801.length))]), windowWidth / 2, windowHeight / 2); // Displays one of the four words

}

function popsicleAP() {
    background('white')
        // line(0, 0, 50, 50)
        // text(words[1], 10, 50)
    textSize(72)
    textAlign(CENTER)

    textFont("Fugaz One")

    text(String(ap[floor(random(ap.length))]), windowWidth / 2, windowHeight / 2); // Displays one of the four words

}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
