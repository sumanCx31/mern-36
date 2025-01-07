//Asynchronous closure: A closure that is called after the outer function has returned.

function func1()
{
    console.log("func1 called");

    function func2()
    {
        console.log("func2 called");
    }
    return func2();
}
const closure = func1(); //func1 called, func2 called