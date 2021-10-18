namespace FunctionDemo{
    
    export function printOnConsole(option: boolean):number{
        return option?10:15;
    }

    //console.log(printOnConsole(true));

    export let func = function():void{
        console.log("Anonymous func");
    }
    //func();
}