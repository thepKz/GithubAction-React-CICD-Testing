
# Math Operations React App

Math Operations is a simple web application built with React that allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. This app was created to demonstrate the setup and use of CI/CD with GitHub Actions.

## Key Features

- Perform basic arithmetic operations: addition, subtraction, multiplication, division
- Simple and user-friendly interface
- Basic error handling (e.g., division by zero)
- CI/CD integration using GitHub Actions

## Technologies Used

- React
- JavaScript (ES6+)
- HTML5
- CSS3
- Jest and React Testing Library for unit testing
- GitHub Actions for CI/CD

## Installation and Running the App

1. Clone the repository:
   ```
   git clone https://github.com/your-username/math-operations.git
   ```

2. Navigate to the project directory:
   ```
   cd math-operations
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the application:
   ```
   npm start
   ```

The app will run at `http://localhost:3000`.

## Testing

Run the tests using the command:
```
npm test
```

## CI/CD

This project uses GitHub Actions to automate the CI/CD process. Every time there's a push or pull request to the `main` branch, GitHub Actions will automatically:

1. Install dependencies
2. Run tests
3. Build the application

See the `.github/workflows/ci.yml` file for details on the CI/CD configuration.

## Tools

You can view this project: https://github.com/actions/deploy-pages

## License

[MIT License](LICENSE)
