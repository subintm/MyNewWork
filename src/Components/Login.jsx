import React, { useState } from 'react';

function LoginForm() {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSwitch = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {isRegistering ? 'Register' : 'Login'}
        </h1>
        <form className="space-y-4">
          {isRegistering && (
            <>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="email"
                placeholder="Gmail"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </>
          )}
          {!isRegistering && (
            <>
              <input
                type="email"
                placeholder="Gmail"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </>
          )}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            {isRegistering ? 'Register' : 'Login'}
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          {isRegistering ? 'Already have an account?' : "Don't have an account?"}
          <button
            type="button"
            onClick={handleSwitch}
            className="ml-1 text-blue-500 hover:underline"
          >
            {isRegistering ? 'Login' : 'Register'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
