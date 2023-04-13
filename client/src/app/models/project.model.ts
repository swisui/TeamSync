export interface Project {
    name: string;
    user: Array<User>;
}

interface User {
    name: string;
    profilePicUrl: string;
}
