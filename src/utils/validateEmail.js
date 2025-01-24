const validateEmail = (email) => {
    const emailRegex = /^[^\s@_0-9]+_202[5678]@woxsen.edu.in/;
    return emailRegex.test(email);
};

export default validateEmail;
