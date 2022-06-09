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
console.log("===第一題===");
countEmployee();
console.log("===第二題===");
countFactory();

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