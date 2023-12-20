import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/NavBar/Navbar";
import Content from "./components/Body/Content";
import Footer from "./components/Footer";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function test() {
  const user = await prisma.user.create({
    data: {
      "username": "quyencute",
      "hased_password": "uwegc8w7eytdwi",
      "email": "quyenlan1@gmail.com",
    },
  });
  console.log(user);
}

export default function Home() {
  test()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
  return (
    <main className="relative">
      <Navbar />
      <div className="static h-fit w-full bg-body flex justify-center items-center">
        <Content />
      </div>
      <Footer />
    </main>
  );
}
