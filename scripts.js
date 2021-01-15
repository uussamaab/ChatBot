var todos = [
"A",
"B",
"C",
"D",
"E"
]


// for (var i=0; i < todos.lenght; i++) {
// 	console.log(todos[i]);
// }

// console.log(todos);


// var counter = 0;
// while(counter < 10) {
// console.log(counter);
// counter++
// }
// 

function logtodos(todo, i){
	console.log(todo, i)
};

todos.forEach(logtodos);