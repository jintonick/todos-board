import React from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from './authprovider';
import { useForm } from 'react-hook-form';

interface FormValues {
  email: string;
  password: string;
}

const Register: React.FC = () => {
    const navigate = useNavigate();
    const auth = useAuth();
    const { register, handleSubmit } = useForm<FormValues>();
  
    if (!auth) throw new Error("Auth context must be used within an AuthProvider");
  
    const { setLoggedIn } = auth;
  
    const handleSigIn = (loginStatus: boolean) => {
        setLoggedIn(loginStatus); 
        navigate('/main');
    }
  
    const onSubmit = (data: FormValues) => {
      console.log(data); // data will have your form values
      handleSigIn(true);
    };
  
    const handleSkipRegistrationClick = () => {
      handleSigIn(false);
    };
  
    return (
      <div>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Your form fields with the register function from useForm */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                {...register("email")}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
  
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                {...register("password")}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
  
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
  
          <div>
            <button
              type="button"
              className="flex w-full justify-center rounded-md bg-indigo-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleSkipRegistrationClick}
            >
              Skip Registration
            </button>
          </div>
        </form>
      </div>
    );
}

export default Register;
