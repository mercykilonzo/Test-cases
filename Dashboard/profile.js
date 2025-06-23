
const validImageTypes = ['jpg', 'jpeg', 'png', 'gif'];

function isValidImage(fileName) {
  const extension = fileName.split('.').pop().toLowerCase();
  return validImageTypes.includes(extension);
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function updateProfile({ file, supplier, email, location, password, confirm }) {
  const errors = [];

  if (file && !isValidImage(file)) {
    errors.push("Invalid file type");
  }

  if (!supplier) errors.push("Supplier is required");
  if (!email) errors.push("Email is required");
  if (email && !isValidEmail(email)) errors.push("Invalid email format");

  if (password && password !== confirm) {
    errors.push("Password does not match");
  }

  const hasChanges = !!(file || supplier || email || location || password);

  return {
    success: errors.length === 0 && hasChanges,
    message: errors.length > 0 ? errors.join(', ') : (hasChanges ? "Profile updated successfully" : "No changes detected"),
    errors
  };
}

module.exports = {updateProfile, isValidImage, isValidEmail};

