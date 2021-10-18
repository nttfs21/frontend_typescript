var FunctionDemo;
(function (FunctionDemo) {
    function printOnConsole(option) {
        return option ? 10 : 15;
    }
    FunctionDemo.printOnConsole = printOnConsole;
    //console.log(printOnConsole(true));
    FunctionDemo.func = function () {
        console.log("Anonymous func");
    };
    //func();
})(FunctionDemo || (FunctionDemo = {}));
//# sourceMappingURL=function.js.map