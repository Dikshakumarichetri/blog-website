import connect from "@/utils/db";
import { NextResponse } from "next/server";
// to hash the password use bcrypt js library
import bcrypt from "bcryptjs";
import User from "@/models/User";
export const POST = async (request) => {
  const { name, email, password } = await request.json();
  await connect();
  const hashedPass = await bcrypt.hash(password, 5);
  const newUser = new User({
    name,email,password:hashedPass
  });

  try {

//save user in mongodb
await newUser.save();
return new NextResponse("User created", {
  status: 200,
});
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
