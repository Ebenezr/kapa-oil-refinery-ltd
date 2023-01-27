// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

// async function seed() {
//   await prisma.admin.create({
//     data: {
//       firstName: "John",
//       lastName: "Doe",
//       phone: "123-456-7890",
//       email: "admin1@admin.com",
//       gender: "MALE",
//       designation: "CEO",
//       role: "ADMIN",
//       image: "https://api.realworld.io/images/smiley-cyrus.jpeg",
//     },
//   });

//   await prisma.doctor.create({
//     data: {
//       firstName: "Emmanuel",
//       lastName: "Bah",
//       phone: "123-458-7890",
//       email: "emmanuel@doctor.com",
//       gender: "MALE",
//       designation: "Surgion",
//       role: "DOCTOR",
//       image: "https://api.realworld.io/images/smiley-cyrus.jpeg",
//     },
//   });

//   await prisma.nurse.create({
//     data: {
//       firstName: "Grace",
//       lastName: "Makena",
//       phone: "123-788-7890",
//       email: "grace@nurse.com",
//       gender: "FEMALE",
//       designation: "Front Desk",
//       role: "NURSE",
//       image: "https://api.realworld.io/images/smiley-cyrus.jpeg",
//     },
//   });
//   s;
// }

// seed()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
