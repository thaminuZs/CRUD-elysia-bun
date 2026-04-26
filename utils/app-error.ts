export class AppError extends Error {
    resCode: number;

    constructor(message: string, resCode = 400) {
        super(message);
        this.resCode = resCode;
    }
}