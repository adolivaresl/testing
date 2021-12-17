const functions = require('./index.js');

test("deberia retornar 8 al pasarle 3 y 5", ()=>{
    expect(functions.add(3,5)).toBe(8)
})

test("deberias retornar null", ()=> {
    expect(functions.isNull()).toBeNull();
})

test("deberia retornar el mismo valor entregado", ()=>{
    
    expect(functions.returnValue(true)).toBeTruthy();
})

test("debería retornarme el objeto", ()=>{
    expect(functions.returnUser()).toEqual({
        name: "Maria",
        lastname: "Pérez",
    })
})

test("debería retornarme el objeto", ()=>{
    expect(functions.returnUser().name).toBe("Maria")
})

test("deberia retornar el titulo: sunt aut facere repellat provident occaecati excepturi optio reprehenderit", ()=>{
    expect.assertions(2);
    return functions.post()
    .then( res => {
        expect(res.title).toEqual("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
        expect(res.id).toBe(1);
    })
})

test("deberia retornar el titulo: sunt aut facere repellat provident occaecati excepturi optio reprehenderit", async() =>{
    expect.assertions(1);
    const data =await functions.post()
    expect(data.title).toEqual("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
})