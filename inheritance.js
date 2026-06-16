//Inheritance
//Child class is able to access the parent class properties
//but parent can not access anything from the child


class Car {
speed =100;
start()
{
    console.log('car --start');
}
stop()
{
console.log('car --stop');
}
refuel()
{
    console.log('car--refuel');
}

}
class BWM extends Car
{
    //speed =200;

    //METHOD OVERRIDING
    start()
    {
        console.log('BWM -- start');
    }

    parking()
    {
        console.log('BWM --parking');
    }
  #billing()
  {
    console.log('billing --method')
  }
  getBillingMethod()
  {
    this.#billing();
  }
}
let bwm =new BWM();
console.log(bwm.speed);
bwm.start(); //OVERRIDEN
bwm.refuel();//INHERITED
bwm.stop();//INHERITED
bwm.parking();
bwm.getBillingMethod ();

let c1 =new Car();
console.log(c1.speed);
c1.start();
c1.stop();
c1.refuel();
//c1.parking();


class Car {
speed =100;
start()
{
    console.log('car --start');
}
}

class BMW extends Car
{
    speed =200;

    start()
    {
        console.log('BMW---start');
        super.start();
    }
    dashboard()
    {
      this.start();
      super.start();
      console.log(this.speed);
      //console.log(super.speed);
    }
}

let bwm = new BMW;
bwm.dashboard();