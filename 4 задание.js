function Devices(name, power) {
  this.name = name;
  this.power = power;
  this.pluggedIn = false;
}

Devices.prototype.plugIn = function () {
  this.pluggedIn = true;
  console.log(`${this.name} включен(а) в розетку.`);
}

Devices.prototype.unplug = function () {
  this.pluggedIn = false;
  console.log(`${this.name} выключен(а) из розетки.`);
}

function DeskLamp(brightness) {
  Devices.call(this, "Настольная лампа", 40);
  this.brightness = brightness;
}

DeskLamp.prototype = Object.create(Devices.prototype);
DeskLamp.prototype.constructor = DeskLamp;

DeskLamp.prototype.adjustBrightness = function(brightness) {
  this.brightness = brightness;
  console.log(`Яркость лампы установлена на ${brightness} %.`);
}


function Computer(brand, model, power) {
  Devices.call(this, "Компьютер", 500);
  this.brand = brand || "Неизвестно";
  this.model = model || "Неизвестно";
}

Computer.prototype = Object.create(Devices.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.turnOn = function() {
  console.log(`Компьютер ${this.brand} ${this.model} запущен.`);
}

Computer.prototype.turnOff = function() {
  console.log(`Компьютер ${this.brand} ${this.model} выключен.`);
}


const lamp = new DeskLamp();
const computer = new Computer();

//lamp.unplug();
lamp.plugIn();
//computer.unplug();
computer.plugIn();


let totalPower = 0;
if (lamp.pluggedIn) {
  totalPower += lamp.power;
}
if (computer.pluggedIn) {
  totalPower += computer.power;
}

console.log(`Суммарная потребляемая мощность: ${totalPower} Вт.`);

const turn = new Computer("Apple", "MacBook Pro")
//turn.turnOff()
turn.turnOn()

const brightness = new DeskLamp()
brightness.adjustBrightness(100)