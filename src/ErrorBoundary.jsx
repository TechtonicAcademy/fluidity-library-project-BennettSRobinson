import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  // ! MUST return an updated state object and MUST NOT trigger side effects
  static getDerivedStateFromError(error) {
    return { error };
  }

  // ! CAN trigger side effects; commonly used to log out any errors
  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.log(error, errorInfo);
  }

  render() {
    const { error } = this.state;
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;

    if (error) {
      return (
        <>
          <h1>An error has occurred in a child component!</h1>
          <p>
            (Your error boundary should typically include a way for the user to
            get back on track: at the very least a link to the home page of your
            app, or more often fully functional header/footer components.)
          </p>
        </>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
