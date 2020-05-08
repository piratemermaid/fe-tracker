const API_URL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:8000"
        : "http://fetchtracker.arielschnur.com";

export { API_URL };
