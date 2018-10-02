function calc(std){
 std.sum = std.kor+std.eng+std.mat+std.edp;
 std.avg = std.sum/4.;
 std.grade = (std.avg <=100 && std.avg >= 90) ? 'A' :
 					(std.avg <90 && std.avg >= 80) ? 'B' :
 					(std.avg <80 && std.avg >= 70) ? 'C' :
 					(std.avg <70 && std.avg >= 60) ? 'D' : 'F';
};