const validateEmail = (email) => {
    const emailRegex = /^[^\s@_0-9]+@woxsen.edu.in/;
    return emailRegex.test(email);
};

export default validateEmail;
