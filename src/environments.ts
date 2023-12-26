const environment = {
  baseUrl: process.env.NODE_ENV === ("production" || "prod") ? "https://jsonplaceholder.typicode.com" : "https://jsonplaceholder.typicode.com",
};

export default environment;
