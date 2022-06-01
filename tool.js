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
    console.log('test');
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