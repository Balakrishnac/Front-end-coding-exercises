# Angular OnPush Demo

This project demonstrates the use of Angular's Change Detection Strategy `OnPush` to optimize performance in Angular applications. It includes a parent component that manages state and data for a child component, showcasing how to effectively use `ngOnChanges`, track change detection runs, and optimize unnecessary renders using `trackBy`, pure pipes, and input immutability.

## Project Structure

```
angular-onpush-demo
├── src
│   ├── app
│   │   ├── parent
│   │   │   ├── parent.component.ts      # Parent component logic
│   │   │   ├── parent.component.html     # Parent component template
│   │   │   ├── parent.component.scss     # Parent component styles
│   │   │   └── parent.component.spec.ts  # Unit tests for Parent component
│   │   ├── child
│   │   │   ├── child.component.ts        # Child component logic
│   │   │   ├── child.component.html       # Child component template
│   │   │   ├── child.component.scss      # Child component styles
│   │   │   └── child.component.spec.ts   # Unit tests for Child component
│   │   ├── app.module.ts                  # Root module of the application
│   │   └── app.component.ts               # Root component of the application
│   ├── assets                              # Static assets for the application
│   ├── environments                        # Environment-specific settings
│   │   ├── environment.prod.ts            # Production environment settings
│   │   └── environment.ts                  # Development environment settings
│   ├── index.html                         # Main HTML file
│   ├── main.ts                            # Entry point of the application
│   ├── polyfills.ts                       # Polyfills for browser compatibility
│   └── styles.scss                        # Global styles for the application
├── angular.json                           # Angular CLI configuration
├── package.json                           # npm configuration
└── tsconfig.json                          # TypeScript configuration
```

## Features

- **OnPush Change Detection**: The child component uses `ChangeDetectionStrategy.OnPush` to minimize change detection cycles.
- **ngOnChanges**: The child component implements `ngOnChanges` to respond to input changes from the parent component.
- **Performance Optimization**: The project demonstrates the use of `trackBy` in `*ngFor`, pure pipes, and immutability to prevent unnecessary renders.
- **Change Detection Logging**: The components log change detection runs to the console for debugging and performance monitoring.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   cd angular-onpush-demo
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the application:
   ```
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200`.

## Conclusion

This demo serves as a practical example of how to leverage Angular's change detection strategies to build efficient applications. By understanding and implementing these concepts, developers can significantly improve the performance of their Angular applications.