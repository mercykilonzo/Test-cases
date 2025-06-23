test("L1: Log in with correct credentials", () => {
    expect(login("supplier1", "pass123")).toBe("Login success, token returned");
  });

  test("L2: Log in with incorrect password", () => {
    expect(login("supplier1", "wrongpass")).toBe("Error: Invalid credentials");
  });

  test("L3: Log in with non-existent username", () => {
    expect(login("fakeuser", "any")).toBe("Error: Invalid credentials");
  });

  test("L4: Log in with empty username", () => {
    expect(login("", "pass123")).toBe("Error: Invalid credentials");
  });

  test("L5: Log in with empty password", () => {
    expect(login("supplier1", "")).toBe("Error: Invalid credentials");
  });

  test("L6: Log in with both fields empty", () => {
    expect(login("", "")).toBe("Error: Invalid credentials");
  });

  test("L7: Log in with special characters in username", () => {
    expect(login("suppli@r!", "secure123")).toBe("Login success, token returned");
  });

  test("L8: Multiple failed login attempts then success", () => {
    expect(login("supplier1", "wrong1")).toBe("Error: Invalid credentials");
    expect(login("supplier1", "wrong2")).toBe("Error: Invalid credentials");
    expect(login("supplier1", "wrong3")).toBe("Error: Invalid credentials");
    expect(login("supplier1", "pass123")).toBe("Login success, token returned");
  });