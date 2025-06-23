const { signup } = require("./dashboardSignUp");

  test("S1: Sign up with a valid username and password", () => {
    expect(signup("supplier1", "pass1234")).toBe("Signup success");
  });

  test("S2: Sign up with a missing username", () => {
    expect(signup("", "pass1234")).toBe("Error: Missing username or password");
  });

  test("S3: Sign up with a missing password", () => {
    expect(signup("supplier1", "")).toBe("Error: Missing username or password");
  });

  test("S4: Sign up with both fields missing", () => {
    expect(signup("", "")).toBe("Error: Missing username or password");
  });

  test("S5: Sign up with existing username", () => {
    signup("supplier1", "pass1234");
    expect(signup("supplier1", "pass1234")).toBe("Error: User already exists");
  });

  test("S6: Sign up with a long username and password", () => {
    const longUser = "x".repeat(100);
    const longPass = "y".repeat(100);
    expect(signup(longUser, longPass)).toBe("Signup success");
  });

  test("S7: Sign up with special characters in the username", () => {
    expect(signup("suppli@r!", "secure123")).toBe("Signup success");
  });

  test("S8: Sign up with password shorter than 8 characters", () => {
    expect(signup("shortuser", "short")).toBe("Error: Password must be at least 8 characters");
  });

  test("S9: Sign up with password 8+ characters", () => {
    expect(signup("longuser", "longpass1")).toBe("Signup success");
  });
