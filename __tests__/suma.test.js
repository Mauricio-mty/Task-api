const suma= require("../tryTest/suma");

/*test('2+4 equls7',()=>{
    expect(suma(4,2)).toBe(7);
});*/


test("prueba",()=>{
    const value =2+2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(3.5);


})