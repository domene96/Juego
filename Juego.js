import flash.events.KeyboardEvent;
import flash.ui.Keyboard;
import flash.events.Event;


//Crear personaje que se mueva
var per:mono = new mono();
addChild(per);


//posicionar personaje en el centro
per.x = stage.stageWidth/2;
per.y = stage.stageHeight/2;


//Varaible para cuando se presione
var mIz:Boolean = false;
var mDe:Boolean = false;
var mAr:Boolean = false;
var mAba:Boolean = false;


//Variable de cuantos pixeles se mueve
var vel:Number = 5;


//Crear un evento cuando se presione y el mover
stage.addEventListener(KeyboardEvent.KEY_DOWN, teclaPres);
stage.addEventListener(KeyboardEvent.KEY_UP, teclaLib);
stage.addEventListener(Event.ENTER_FRAME, mover);


//Funcion cuando se presione
function teclaPres(e:KeyboardEvent):void{
    if(e.keyCode == 37){
        mIz = true;
    }
    if(e.keyCode == 38){
        mAr = true;
    }
    if(e.keyCode == 39){
        mDe = true;
    }
	if(e.keyCode == 40){
        mAba = true;
    }

}
//Funcion libere cada tecla
function teclaLib(e:KeyboardEvent):void{
    if(e.keyCode == 37){
        mIz = false;
    }
    if(e.keyCode == 38){
        mAr = false;
    }
    if(e.keyCode == 39){
        mDe = false;
    }
    if(e.keyCode == 40){
        mAba = false;
    }
}
//Hace que se mueva
function mover(e:Event):void{
    if(mIz && (per.x!=20)){
        per.x -= vel;
    }
    if(mDe && (per.x!=580)){
        per.x += vel;
    }
    if(mAr && (per.y!=30)){
        per.y -= vel;
    }
    if(mAba && (per.y!=350)){
        per.y += vel;
    }
}
