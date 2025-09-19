const sequelize=require('sequelize');
const { Where } = require('sequelize/lib/utils');
const db=new sequelize('MCA','root','',{
    host:'localhost',
    dialect:'mysql'
});

//test connection
// db.authenticate()
// .then(()=>{
//     console.log("connection has been established successfully.");
// })
// .catch((err)=>{
//     console.error("unable to connect the database",err);
// });

const student=db.define("student",{
    name:{
        type:sequelize.STRING,
        allowNull:false

    },
    city:{
        type:sequelize.STRING,
        allowNull:false
    },
    email:{
        type:sequelize.STRING,
        allowNull:false,
        unique:true
    }
});

// student.sync({alter:true})
// .then(()=>{
//     console.log("student table created successfully.");
// })
// .catch((err)=>{
//     console.error("unable to create table:",err);
// });

// student.create({
//     name:"harsha",
//     city:"rajkot",
//     email:"harvaniharsha@gmail.com",
// })
// .then(()=>{
//     console.error("data inserted successfully.",err);
// })
// .catch((err)=>{
//     console.error("unable to insert data:",err);
// });
// student.create({
//     name:"krishna",
//     city:"rajkot",
//     email:"kr@gmail.com",
// })
// .then(()=>{
//     console.log("data inserted successfully.",err);
// })
// .catch((err)=>{
//     console.error("unable to insert data:",err);
// });

// student.findAll()
// .then((students)=>{
//     console.log(students);
// })
// .catch((err)=>{
//     console.error("unable to fetch data:",err)
// });

// student.findByPk(1)
// .then((student)=>{
//     console.log(student);
// })
// .catch((err)=>{
//     console.error("unable to fetch data:",err)
// });

// student.update(
//   { name: "HARSHAA  ", city: "Juna Junagadh" },
//   {
//     where: { id: 1},
//   }
// )
// .then(()=>{
//     console.log("data updated successfully.");
// })
// .catch((err)=>{
//     console.error("unable to update data:",err);
// });

student.destroy({
    where:{id:6},})
    .then(()=>{
        console.log("data deleted successfully.")
    })
    .catch((err)=>{
        console.error("unable to delete data:",err);
    });