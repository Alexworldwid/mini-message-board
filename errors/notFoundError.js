class notFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotFoundError";
        this.status = 404;
    }
}