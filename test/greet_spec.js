var greet = require('../');

describe('greet',function(){
	it ("should greet a person by name", function(){
		expect(greet('aaa')).to.eql("hello, aaa");
	});
	
	it ("should greet a person flirtatiously if drunk", function(){
		expect(greet('bbb', 'drunk')).to.eql("hello bbb, you look sexy today");
	});
});
