let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

//soal 4.a

let newData = {
    ...data,
    name: "Dita Ayu Chairunnisa",
    username: "ditaayu",
    email: "ditaayu.chairunisa@gmail.com",
    address: {street: "Makrayu",
    suite: "39A",
    city: "Palembang",
    zipcode: "30146"},
    phone: "082175446320",
    website: "github.com/ditaayuch",
    hobi: ["membaca buku", "mendengarkan musik", "menonton film"]
}

console.log(newData);

//soal 4b

const { address: { street, city } } = data;

console.log("Street:", street);
console.log("City:", city);