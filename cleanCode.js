//Q1
const factories = [
    { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
    { name: "BR2", employees: ["Jessie", "Karen", "John"] },
    { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
    { name: "BR4", employees: [] }
  ]; 



const employeeType = [
    {id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00"},
    {id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00"},
    {id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00"},
];
const employees = [
    {id: 1, name: "Alice", type: 2},
    {id: 2, name: "Bob", type: 3},
    {id: 3, name: "John", type: 2},
    {id: 4, name: "Karen", type: 1},
    {id: 5, name: "Miles", type: 3},
    {id: 6, name: "Henry", type: 1}
];
const tasks = [
    {id: 1, title: "task01", duration: 60 },
    {id: 2, title: "task02", duration: 120},
    {id: 3, title: "task03", duration: 180},
    {id: 4, title: "task04", duration: 360},
    {id: 5, title: "task05", duration: 30},
    {id: 6, title: "task06", duration: 220},
    {id: 7, title: "task07", duration: 640},
    {id: 8, title: "task08", duration: 250},
    {id: 9, title: "task09", duration: 119},
    {id: 10, title: "task10", duration: 560},
    {id: 11, title: "task11", duration: 340},
    {id: 12, title: "task12", duration: 45},
    {id: 13, title: "task13", duration: 86},
    {id: 14, title: "task14", duration: 480},
    {id: 15, title: "task15", duration: 900}
];

//main 

console.log("===第一題===");
countEmployee();
console.log("===第二題===");
countFactory();
console.log("===第三題===");
list();
console.log("===第四題===");
totalHours();
console.log("===第五題===");
let time = prompt("測試第五題:請輸入時間(EX:21:03:35)") ;
if(time == ""){
    alert("沒有輸入值，預設為21:03:35");
    time = "21:03:35";
}
let countWorker = howManyEmployeeByTime(time);
console.log("有"+countWorker+"個員工在"+time+"時工作");

console.log("===第六題===");
tasksDuration();


//以下function

function tasksDuration(){
    let day = 1;
    let start = 10;
    const end = 24;
    let over = 0;
    tasks.forEach(element => {
        let taskTime = element.duration;
        while(taskTime > 0){
            if(over>0){
                taskTime -= over;
                over = 0;
            }
            taskTime -= howManyEmployeeByTime(start.toString())*60;
            start ++ ;
            if(start == end ){
                start = 10;
                day++;
            }
            if(taskTime<0)over+=Math.abs(taskTime);   
        }   
     
    });
    let minute = 60 - over;
    let hour = start - 1;
    day += Math.floor(hour/20);
    hour %= 20;
    console.log("總共花"+day+"天"+hour+"小時"+minute+"分鐘");
}
function howManyEmployeeByTime(time){
    let count = 0;
    let timeInt = time.substring(0,2);
    employeeType.forEach(element => {
        let end = parseInt(element.work_end.substring(0,2));
        if(end < 6) end += 24;//調整半夜出現的情況
        if(timeInt < 6 )timeInt += 24;
        if(parseInt(element.work_begin.substring(0,2))<=timeInt&&end>timeInt){
            employees.forEach(employee => {
                if(element.id==employee.type){
                    count++;
                }
            });
        }
    });


    return count ;
}

function totalHours(){
    let tHour = 0;
    let tMinute = 0;
    let tSeconds = 0;
    employeeType.forEach(element => {
        let hour = parseInt(element.work_end.substring(0,2)) - parseInt(element.work_begin.substring(0,2));
        let minute = parseInt(element.work_end.substring(3,5)) - parseInt(element.work_begin.substring(3,5));
        let seconds = parseInt(element.work_end.substring(6,8)) - parseInt(element.work_begin.substring(6,8));
        if(hour < 0)hour = 24 + hour;
        if(minute < 0)minute = 24 + minute;
        if(seconds < 0)seconds = 24 + seconds;
        tHour += hour;
        tMinute += minute;
        tSeconds += seconds;
    });
    console.log("一天總工作時間為"+tHour.toString()+":"+tMinute.toString()+":"+tSeconds.toString()+"");
}

function list(){
    factories.forEach(element => {
        console.log("name" + element.name + ",employees:" + element.employees.sort());
    });
}

function countFactory(){
    let flag = [];
    let re ;
    let count ;
    factories.forEach(element => {//工廠
        count = 0;
        re = false;
        element.employees.forEach(employee=>{//所有員工
            flag.forEach(data => {//跳過以計算過的員工
                if(data == employee){
                   re = true; 
                }                                
            });
            if(re == false){//還沒計算過的
                flag.push(employee);
                factories.forEach(factorie2 => {//第二次工廠
                    factorie2.employees.forEach(employee2 => {//第二次所有員工的計數
                        if(employee2 == employee){
                            count ++;
                        }
                    });   
                });                
                console.log("員工:" + employee + "去過" + count + "工廠");
            }
        });
        
    });
}

function countEmployee(){
    factories.forEach(element => {
        console.log(element.name + ",count :" + element.employees.length);
    });
}