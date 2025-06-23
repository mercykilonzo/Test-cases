
const { updateProfile } = require('./profile');

describe('Profile Update Scenarios', () => {
  
  test('PR1: Valid profile picture and all fields updated', () => {
    const result = updateProfile({
      file: 'profile.jpg',
      supplier: 'ABC Ltd',
      email: 'abc@example.com',
      location: 'New York',
      password: 'pass123',
      confirm: 'pass123'
    });
    expect(result.success).toBe(true);
    expect(result.message).toBe("Profile updated successfully");
  });

  test('PR2: Invalid image file type', () => {
    const result = updateProfile({ file: 'profile.exe' });
    expect(result.success).toBe(false);
    expect(result.message).toContain("Invalid file type");
  });

  test('PR3: Required fields missing', () => {
    const result = updateProfile({ file: 'profile.jpg', supplier: '', email: '', password: '', confirm: '' });
    expect(result.success).toBe(false);
    expect(result.message).toContain("Supplier is required");
    expect(result.message).toContain("Email is required");
  });

  test('PR4: Password mismatch', () => {
    const result = updateProfile({ password: 'NewPass123', confirm: 'NewPass321' });
    expect(result.success).toBe(false);
    expect(result.message).toContain("Password does not match");
  });

  test('PR5: Update only email and location', () => {
    const result = updateProfile({ email: 'user2@example.com', location: 'London' });
    expect(result.success).toBe(true);
    expect(result.message).toBe("Profile updated successfully");
  });

  test('PR6: Invalid email format', () => {
    const result = updateProfile({ email: 'user@.com' });
    expect(result.success).toBe(false);
    expect(result.message).toContain("Invalid email format");
  });

  test('PR7: No changes made', () => {
    const result = updateProfile({ });
    expect(result.success).toBe(false);
    expect(result.message).toBe("No changes detected");
  });

  test('PR8: Upload image and update password', () => {
    const result = updateProfile({
      file: 'newphoto.png',
      password: 'New1234',
      confirm: 'New1234'
    });
    expect(result.success).toBe(true);
    expect(result.message).toBe("Profile updated successfully");
  });

});
