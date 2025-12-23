export type TUser = {
    id: string;
    userName: string;
    email: string;
    profileImage: string;
    phoneNumber: string;
    createdAt: Date;
    updatedAt: Date;
};
export type TAuthUser = {
    id: string;
    email: string;
    role: string;
    iat: number;
    exp: number;
};
