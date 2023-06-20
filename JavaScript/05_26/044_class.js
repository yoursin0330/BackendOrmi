function Parent() {
  this.name = "재현";
}
Parent.prototype.rename = function (name) {
  this.name = name;
};
Parent.prototype.sayName = function () {
  console.log(this.name);
};

let 부모1 = new Parent();
부모1.rename("호준");
부모1;

function Child() {
  Parent.call(this);
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.canWalk = function () {
  console.log("now i can walk!!");
};

Child.prototype.rename("호돌");
Child.prototype.sayName();

let 자식 = new Child("호돌돌");
