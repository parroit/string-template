var assert = require("assert");
var expect = require("expect.js");


var format = require("../index.js");

it("Named arguments are replaced", function () {
    var result = format("Hello {name}, how are you?", { name: "Mark" });
    expect(result).to.be.equal("Hello Mark, how are you?");
   
});

it("Named arguments at the start of strings are replaced",
    function () {
        var result = format("{likes} people have liked this", {
            likes: 123
        });

        expect(result).to.be.equal("123 people have liked this");
       
    });

it("Named arguments at the end of string are replaced",
    function () {
        var result = format("Please respond by {date}", {
            date: "01/01/2015"
        });

        expect(result).to.be.equal("Please respond by 01/01/2015");
       
    });

it("Multiple named arguments are replaced", function () {
    var result = format("Hello {name}, you have {emails} new messages", {
        name: "Anna",
        emails: 5
    });

    expect(result).to.be.equal("Hello Anna, you have 5 new messages");
   
});

it("Missing named arguments become 0 characters", function () {
    var result = format("Hello{name}, how are you?", {});
    expect(result).to.be.equal("Hello, how are you?");
   
});

it("Named arguments can be escaped", function () {
    var result = format("Hello {{name}}, how are you?", { name: "Mark" });
    expect(result).to.be.equal("Hello {name}, how are you?");
   
});

it("Array arguments are replaced", function () {
    var result = format("Hello {0}, how are you?", ["Mark"]);
    expect(result).to.be.equal("Hello Mark, how are you?");
   
});

it("Array arguments at the start of strings are replaced",
    function () {
        var result = format("{0} people have liked this", [123]);

        expect(result).to.be.equal("123 people have liked this");
       
    });

it("Array arguments at the end of string are replaced",
    function () {
        var result = format("Please respond by {0}", ["01/01/2015"]);

        expect(result).to.be.equal("Please respond by 01/01/2015");
       
    });

it("Multiple array arguments are replaced", function () {
    var result = format("Hello {0}, you have {1} new messages", [
        "Anna",
        5
    ]);

    expect(result).to.be.equal("Hello Anna, you have 5 new messages");
   
});

it("Missing array arguments become 0 characters", function () {
    var result = format("Hello{0}, how are you?", []);
    expect(result).to.be.equal("Hello, how are you?");
   
});

it("Array arguments can be escaped", function () {
    var result = format("Hello {{0}}, how are you?", ["Mark"]);
    expect(result).to.be.equal("Hello {0}, how are you?");
   
});

it("Array keys are not accessible", function () {
    var result = format("Function{splice}", []);
    expect(result).to.be.equal("Function");
   
});

it("Listed arguments are replaced", function () {
    var result = format("Hello {0}, how are you?", "Mark");
    expect(result).to.be.equal("Hello Mark, how are you?");
   
});

it("Listed arguments at the start of strings are replaced",
    function () {
        var result = format("{0} people have liked this", 123);

        expect(result).to.be.equal("123 people have liked this");
       
    });

it("Listed arguments at the end of string are replaced",
    function () {
        var result = format("Please respond by {0}", "01/01/2015");

        expect(result).to.be.equal("Please respond by 01/01/2015");
       
    });

it("Multiple listed arguments are replaced", function () {
    var result = format("Hello {0}, you have {1} new messages",
        "Anna",
        5);

    expect(result).to.be.equal("Hello Anna, you have 5 new messages");
   
});

it("Missing listed arguments become 0 characters", function () {
    var result = format("Hello{1}, how are you?", "no");
    expect(result).to.be.equal("Hello, how are you?");
   
});

it("Listed arguments can be escaped", function () {
    var result = format("Hello {{0}}, how are you?", "Mark");
    expect(result).to.be.equal("Hello {0}, how are you?");
   
});

it("Allow null data", function () {
    var result = format("Hello{0}", null);
    expect(result).to.be.equal("Hello");
   
});

it("Allow undefined data", function () {
    var result1 = format("Hello{0}");
    var result2 = format("Hello{0}", undefined);
    expect(result1).to.be.equal( "Hello");
    expect(result2).to.be.equal( "Hello");
   
});

it("Null keys become 0 characters", function () {
    var result1 = format("Hello{name}", { name: null });
    var result2 = format("Hello{0}", [null]);
    var result3 = format("Hello{0}{1}{2}", null, null, null);
    expect(result1).to.be.equal( "Hello");
    expect(result2).to.be.equal( "Hello");
    expect(result3).to.be.equal( "Hello");
   
});

it("Undefined keys become 0 characters", function () {
    var result1 = format("Hello{firstName}{lastName}", { name: undefined });
    var result2 = format("Hello{0}{1}", [undefined]);
    var result3 = format("Hello{0}{1}{2}", undefined, undefined);
    expect(result1).to.be.equal( "Hello");
    expect(result2).to.be.equal( "Hello");
    expect(result3).to.be.equal( "Hello");
   
});