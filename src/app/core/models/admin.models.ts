export interface Admin {
    _id?: string,
    email: string,
    password: string,
    resetPasswordToken?: string,
    resetPasswordExpires?: Date,
    role: string,
    createdAt?: Date,
    updatedAt?: Date
};