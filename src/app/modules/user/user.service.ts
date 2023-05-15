import User from "./user.model";

export const createUserToDB  = async () => {
    const sampleUser = new User({
        id: "002",
        role: "student",
        password: "Password",
        name: {
            firstName: "Erikson",
            middleName: "Ahamed",
            lastName: "Tarif",
        },
        gender: "male",
        email: "shahrear@gmail.com",
        contactNo: "01517821912",
        emergencyContactNo: "01303401619",
        presentAddress: "Gram",
        permanentAddress: "Shohor"
    })

    await sampleUser.save();
    console.log("User saved: ", sampleUser)
}
