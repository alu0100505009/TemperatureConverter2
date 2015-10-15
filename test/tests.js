var expect = chai.expect;

describe("Test Funcionales", function(){
 
    /*it("32F = 0C", function(){
     var temp = new Temperatura(32,"F");
        expect(temp.get_valor()).to.equal(32);
        expect(temp.get_tipo()).to.equal("F");       
    });*/
    
    it("32F = 0C", function(){
        var temp = new Temperatura();  
        temp.set_valor(32);
        temp.set_tipo("F");
        var result =temp.to_c();
        expect(result).to.equal(0);
    });
    
    it("45C = 113F", function(){
        var temp = new Temperatura();  
        temp.set_valor(45);
        temp.set_tipo("C");
        var result =temp.to_f();
        expect(result).to.equal(113);
    });

    it("5X === ERROR", function() {
        //var result = new Temperatura(5,0,"X");
        //var temp = original.value;
        var temp = new Temperatura();  
        temp.set_valor(5);
        temp.set_tipo("X");
        calculate();
        expect(converted.innerHTML).to.match("/ERROR/");
    });
    
    /*it('5X = error', function() {
        var temp = new Temperatura();
        original.value = "5X";
        calculate();
        expect.match(converted.innerHTML, /ERROR/);
    });*/
    /*it('32F = 0C', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.0 Celsius");
    });
    
    it('45C = 113.0 Farenheit', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(converted.innerHTML, "113.0 Farenheit");
    });
    
    it('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
    
    it('Buenos dias = error', function() {
        original.value = "Buenos dias";
        calculate();
        assert.equal(converted.innerHTML, 'ERROR! Prueba con algo como esto \'-4.2C\' ', /ERROR/);
    });
    
    it('45.3 = error', function() {
        original.value = "45.3";
        calculate();
        assert.notEqual(converted.innerHTML, 113.5, "/ERROR/");
    });*/
    
});
