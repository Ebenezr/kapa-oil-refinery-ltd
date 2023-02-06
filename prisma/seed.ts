import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await prisma.user.create({
    data: {
      name: "John Doe",
      phone: "123-456-7890",
      email: "user1@mail.com",
      image: "https://api.realworld.io/images/smiley-cyrus.jpeg",
    },
  });

  await prisma.user.create({
    data: {
      name: "Mercy Grace",
      phone: "123-456-7890",
      email: "user2@mail.com",
      image: "https://api.realworld.io/images/smiley-cyrus.jpeg",
    },
  });

  await prisma.address.create({
    data: {
      line1: "0745554566",
      line2: "0715515155",
      county: "Trans-nzoia",
      town: "Kitale",
      station: "G4S",
      userId: 1,
    },
  });

  await prisma.address.create({
    data: {
      line1: "0745554566",
      line2: "0715515155",
      county: "Nairobi",
      town: "Thika",
      station: "G4S",
      userId: 2,
    },
  });

  const products = [
    {
      name: "Rina",
      description: "sweet vegetable oil",
      price: 999.99,
      image_url: "https://example.com/laptop.jpg",
      size: "5L",
      inventory: 45,
      categoryId: 2,
      discountId: 1,
      rating: 3.5,
    },
    {
      name: "Kasuku",
      description: "cooking fat",
      price: 799.99,
      image_url: "https://example.com/smartphone.jpg",
      size: "10KG",
      inventory: 4,
      categoryId: 1,
      discountId: 2,
      rating: 3.5,
    },
    {
      name: "Nuni",
      description: "Chicken flavor",
      price: 29.99,
      image_url: "https://example.com/tablet.jpg",
      size: "500G",
      categoryId: 3,
      inventory: 455,
      discountId: 3,
    },
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  const cat = [
    {
      name: "Cooking Fat",
    },
    {
      name: "Vegateble Oil",
    },
    {
      name: "Noodles",
    },
    {
      name: "Margarine",
    },
    {
      name: "Personal Care",
    },
    {
      name: "Baking Powder",
    },
  ];

  for (const product of cat) {
    await prisma.productCategory.create({
      data: product,
    });
  }

  const review = [
    {
      userId: 1,
      productId: 1,
      rating: 5,
      description: "This is an excellent product. Highly recommended!",
    },
    {
      userId: 2,
      productId: 2,
      rating: 3.5,
      description: "This is an excellent product. Highly recommended!",
    },
    {
      userId: 1,
      productId: 2,
      rating: 1,
      description: "This is not an excellent product.",
    },
    {
      userId: 1,
      productId: 1,
      rating: 5,
      description: "This is an excellent product. Highly recommended!",
    },
    {
      userId: 1,
      productId: 3,
      rating: 4.5,
      description: "This is an excellent product. Highly recommended!",
    },
    {
      userId: 2,
      productId: 1,
      rating: 5,
      description: "This is an excellent product. Highly recommended!",
    },
  ];

  for (const product of review) {
    await prisma.productReview.create({
      data: product,
    });
  }
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
