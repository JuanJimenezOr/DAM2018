interface Person{
    name: string;
    email:string;
    salary: number;
    active: boolean;
}

var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
var people = Array<Person>();

function createPeople():void {
    let newPerson:any
    for (let i = 0; i <10; i++){
        newPerson = {
            name:`Daniel${i}`,
            email:`d${i}@gmail.com`,
            salary: (i+10000),
            active: i%2==0?true:false,
        }
        people.push(newPerson);
    }
}



function readPeople():void{
    people.forEach(function(elemento, indice, array){
        if(elemento.active==true && EMAIL_REGEXP.test(elemento.email)){
            console.log(elemento) ;
        }
    });
}

createPeople();
readPeople();