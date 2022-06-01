const factories = [
    { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
    { name: "BR2", employees: ["Jessie", "Karen", "John"] },
    { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
    { name: "BR4", employees: [] }
];
const test = [
    '1', '2', '3', '4'
]
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
const employees = [
    {id: 1, name: "Alice", type: 2},
    {id: 2, name: "Bob", type: 3},
    {id: 3, name: "John", type: 2},
    {id: 4, name: "Karen", type: 1},
    {id: 5, name: "Miles", type: 3},
    {id: 6, name: "Henry", type: 1}
];

const employeeType = [
    {id: "1", name: "FullTime", work_begin: "09:00:00", work_end: "17:00:00"},
    {id: "2", name: "MidTime", work_begin: "12:00:00", work_end: "21:00:00"},
    {id: "3", name: "HalfTime", work_begin: "20:00:00", work_end: "00:00:00"},
];




function showData() {
    factories.forEach((item , index) => {
        let row = document.createElement('tr');
        let data_1 = document.createElement('td');
        data_1.innerHTML = item.name;
        let data_2 = document.createElement('td');
        data_2.innerHTML = item.employees;

        row.appendChild(data_1);
        row.appendChild(data_2);
        document.getElementById('Ftbody').appendChild(row);
    });

    employeeType.forEach((item , index) => {
        let row = document.createElement('tr');
        let data_1 = document.createElement('td');
        data_1.innerHTML = item.id;
        let data_2 = document.createElement('td');
        data_2.innerHTML = item.name;
        let data_3 = document.createElement('td');
        data_3.innerHTML = item.work_begin;
        let data_4 = document.createElement('td');
        data_4.innerHTML = item.work_end;

        row.appendChild(data_1);
        row.appendChild(data_2);
        row.appendChild(data_3);
        row.appendChild(data_4);
        document.getElementById('ETtbody').appendChild(row);
    });


    employeeType.forEach((item , index) => {
        let row = document.createElement('tr');
        let data_1 = document.createElement('td');
        data_1.innerHTML = item.id;
        let data_2 = document.createElement('td');
        data_2.innerHTML = item.name;
        let data_3 = document.createElement('td');
        data_3.innerHTML = item.type;

        row.appendChild(data_1);
        row.appendChild(data_2);
        row.appendChild(data_3);
        document.getElementById('Etbody').appendChild(row);
    });

    tasks.forEach((item , index) => {
        let row = document.createElement('tr');
        let data_1 = document.createElement('td');
        data_1.innerHTML = item.id;
        let data_2 = document.createElement('td');
        data_2.innerHTML = item.title;
        let data_3 = document.createElement('td');
        data_3.innerHTML = item.duration;

        row.appendChild(data_1);
        row.appendChild(data_2);
        row.appendChild(data_3);
        document.getElementById('Ttbody').appendChild(row);
    });


}

//這裡是第一題使用的函式
function countEmployee(){
    // console.log('test');
    let S1 = document.getElementById("S1");
    let index = S1.selectedIndex;
    let name = S1.options[index].value;
    let count = 0;

    factories.forEach(items => {
        if (items.name == name)
            count = items.employees.length;
        
    });

    document.getElementById("answer1").innerHTML = "這個工廠有" + count + "個員工";
}

//這裡是第二題使用的函式
function countFactory(){
    // console.log('test');
    let S2 = document.getElementById("S2");
    let index = S2.selectedIndex;
    let name = S2.options[index].value;
    let count = 0;

    factories.forEach(items => {
        items.employees.forEach(item => {
            // console.log(item);
            if(item == name)
                count++;
        });
        
    });


    document.getElementById("answer2").innerHTML = "這個員工去過" + count + "個工廠";
}

//這裡是第三題使用的函式
function DO(){
    factories.forEach(items=>{
        items.employees.sort();
    });

    factories.forEach(items => {
        let row = document.createElement("p")
        row.innerText =  items.name + ":" + items.employees ;
        document.getElementById("answer3").appendChild(row);
    });
    
}

function IO(){
    factories.forEach(items=>{
        items.employees.sort();
        items.employees.reverse();
    });

    factories.forEach(items => {
        let row = document.createElement("p")
        row.innerText =  items.name + ":" + items.employees ;
        document.getElementById("answer3").appendChild(row);
    });
    
}

// 第四題 
function sumTime(){
    let s4 = document.getElementById("S4");
    let index = s4.selectedIndex;
    let type = s4.options[index].value;
    let sum = 0;
    employeeType.forEach(item =>{
        let end = parseInt(item.work_end.substring(0,2));
        if (end == 0 )
            end = 24;  
        // console.log(end);              
        let day =  end - parseInt(item.work_begin.substring(0,2)) ;
        sum += day;
        if(item.name == type){
            document.getElementById("answer4").innerHTML = type + "的一天工作時數為:" + day ;
        }
    });
    document.getElementById("sum").innerHTML = "總工作時數為:" + sum;
}


// 第五題
function TC(){
    let time = parseInt(document.getElementById("time").value.substring(0,2));
    let count = 0;
    let worker = "";
    employeeType.forEach(item =>{
        let begin = parseInt(item.work_begin.substring(0,2));
        let end = parseInt(item.work_end.substring(0,2));
        if (end == 0 )
            end = 24;  
        // console.log(time);    
        if(time >= begin && time < end  ){
            employees.forEach(employee => {
                if(employee.type == item.id){
                    count++;
                    worker += employee.name + "、";
                }                
            });            
        }
        
    });
    document.getElementById("answer5").innerHTML = "這個時間有" + count + "個員工在工作: " + worker;

}