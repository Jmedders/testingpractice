var myTests = require('../mytests');

describe('properties', function(){
  var myobject = new myTests("Jeff", "cyan", 5);

  it('has a first name', function(){
    expect(myobject.firsty).toEqual('Jeff');
  });

  it('has a favorite colour', function(){
    expect(myobject.colours).toEqual('cyan');
  });

  it('has a favorite number', function(){
    expect(myobject.favNumber).toEqual(5);
  });
})
