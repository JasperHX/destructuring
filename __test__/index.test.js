function add(num1, num2)  {
    return num1 + num2;
}


test("The add function adds two numbers and returns the sum",  () => {
    // Arrange

    const number1 = 5;
    const number2 = 10;

    // ACT
    const sum = add(number1, number2);

    // Assert
    expect(sum).toBe(15)

})

function findByName(names, user) {
    // 1. itereer over de array heen met een for-loop
    // 2. vergelijk de name van iedere entry met de user die we moeten vinden
    // 3.  als de namen overeenkomen, moet het gehele object teruggegeven worden
    for (let i = 0; i < names.length; i++) {
        const currentUser = names[i];

        if (currentUser.name === user)  {
            return currentUser;
        }
    }
}

test("findByName will return an object from an array with the specified name", () => {

})

// Arrange
const usernames = [
    {name: "Piet", id: 1},
    {name: "Klaas", id: 2},
    {name: "Henk", id: 3},
];

const userToFind = "Klaas";
// Act
const result = findByName(usernames, userToFind)
// Assert

expect(result).toEqual({name: "Klaas", id: 2});

test(name: findByName())