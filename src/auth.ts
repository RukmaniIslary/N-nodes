async authorize(credentials) {

  const email =
    credentials.email as string;

  const password =
    credentials.password as string;

  console.log("LOGIN EMAIL:", email);

  const user =
    await prisma.user.findUnique({
      where: {
        email
      }
    });

  if (!user) {
    console.log("USER NOT FOUND");
    return null;
  }

  console.log("DB USER:", user.email);

  const valid =
    await bcrypt.compare(
      password,
      user.password
    );

  console.log("PASSWORD VALID:", valid);

  if (!valid) {
    console.log("PASSWORD FAILED");
    return null;
  }

  console.log("LOGIN SUCCESS");

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role
  };

}