var Emp = function(num, name, gibon, nighttime, famnum){
   var num = num;
   var name = name;
   var gibon = gibon;
   var nighttime = nighttime;
   var famnum = famnum;
   var gibon2 = null;
   var dept = null;
   var hosal = null;
   var famsal = null;
   var nightsal = null;
   var sum = null;
   var sal = null;

   this.getNum = function(){return num;};
   this.getName = function(){return name;};
   this.getGibon = function(){return gibon;};
   this.getNighttime = function(){return nighttime;};
   this.getFamnum = function(){return famnum;};

   this.getDept = function(){return dept;};
   this.setDept = function(Dept){dept = Dept;};

   this.getGibon2= function(){return gibon2;};
   this.setGibon2= function(Gibon2){gibon2 = Gibon2;};

   this.getHosal = function(){return hosal;};
   this.setHosal =  function(Hosal){hosal = Hosal;};

   this.getFamsal = function(){return famsal;};
   this.setFamsal = function(Famsal){famsal = Famsal};

   this.getNightsal = function(){return nightsal;};
   this.setNightsal = function(Nightsal){nightsal = Nightsal};

   this.getSum = function(){return sum;};
   this.setSum = function(Sum){sum = Sum;};
   
   this.getSal = function(){return sal;};
   this.setSal = function(Sal){sal = Sal;};
}