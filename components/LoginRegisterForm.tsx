'use client'

import { useState } from 'react'
import { User, Lock, Mail } from 'lucide-react'

export default function LoginRegisterForm() {
  const [isRegister, setIsRegister] = useState(false)

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      <div className={`wrapper relative w-full h-[450px] md:h-[500px] bg-white border-2 border-black rounded-lg shadow-2xl overflow-hidden transition-all duration-700 ${isRegister ? 'active' : ''}`}>
        {/* Rotating Backgrounds */}
        <span className="rotate-bg absolute -top-1 right-0 w-[850px] h-[600px] bg-black transform rotate-[10deg] skew-y-[40deg] origin-bottom-right transition-all duration-[1500ms] delay-[1600ms]" />
        <span className="rotate-bg2 absolute top-full left-[250px] w-[850px] h-[700px] bg-white transform rotate-0 skew-y-0 origin-bottom-left transition-all duration-[1500ms] delay-500" />

        {/* Login Form */}
        <div className="form-box login absolute top-0 left-0 w-1/2 h-full flex justify-center flex-col px-6 md:px-10">
          <h2 className="title animation mb-2 relative text-3xl text-black text-center" style={{ '--i': '0', '--j': '21' } as React.CSSProperties}>
            Login
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-black" />
          </h2>
          <form action="#" className="w-full">
            <div className="input-box animation relative w-full h-12 my-6" style={{ '--i': '1', '--j': '22' } as React.CSSProperties}>
              <input
                type="text"
                required
                className="w-full h-full bg-transparent text-black text-base font-medium border-none outline-none border-b-2 border-black transition-all duration-500 pr-6 focus:border-b-2 focus:border-[#17a]"
              />
              <label className="absolute top-1/2 left-0 transform -translate-y-1/2 text-base text-black pointer-events-none transition-all duration-500">
                Username
              </label>
              <User className="absolute top-1/2 right-0 transform -translate-y-1/2 text-lg transition-all duration-500" />
            </div>

            <div className="input-box animation relative w-full h-12 my-6" style={{ '--i': '2', '--j': '23' } as React.CSSProperties}>
              <input
                type="password"
                required
                className="w-full h-full bg-transparent text-black text-base font-medium border-none outline-none border-b-2 border-black transition-all duration-500 pr-6 focus:border-b-2 focus:border-[#17a]"
              />
              <label className="absolute top-1/2 left-0 transform -translate-y-1/2 text-base text-black pointer-events-none transition-all duration-500">
                Password
              </label>
              <Lock className="absolute top-1/2 right-0 transform -translate-y-1/2 text-lg transition-all duration-500" />
            </div>

            <button
              type="submit"
              className="btn animation w-full h-11 bg-black text-white border-none outline-none rounded-full cursor-pointer text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-black/50"
              style={{ '--i': '3', '--j': '24' } as React.CSSProperties}
            >
              Login
            </button>

            <div className="linkTxt animation text-sm text-black text-center my-5" style={{ '--i': '5', '--j': '25' } as React.CSSProperties}>
              <p>
                Don't have an account?{' '}
                <a
                  href="#"
                  className="register-link text-blue-600 no-underline font-semibold cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsRegister(true)
                  }}
                >
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* Login Info Text */}
        <div className="info-text login absolute top-0 right-0 w-1/2 h-full flex flex-col justify-center text-right pr-6 md:pr-10 pl-20 md:pl-36 pb-14">
          <h2 className="animation text-2xl md:text-4xl text-white leading-tight uppercase" style={{ '--i': '0', '--j': '20' } as React.CSSProperties}>
            Welcome Back!
          </h2>
          <p className="animation text-sm md:text-base text-white mt-4" style={{ '--i': '1', '--j': '21' } as React.CSSProperties}>
            Experience authentic Moroccan adventures. Discover the beauty, culture, and adventure that Morocco has to offer.
          </p>
        </div>

        {/* Register Form */}
        <div className="form-box register absolute top-0 right-0 w-1/2 h-full flex justify-center flex-col px-6 md:px-10">
          <h2 className="title animation mb-2 relative text-3xl text-black text-center" style={{ '--i': '17', '--j': '0' } as React.CSSProperties}>
            Sign Up
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-black" />
          </h2>
          <form action="#" className="w-full">
            <div className="input-box animation relative w-full h-12 my-6" style={{ '--i': '18', '--j': '1' } as React.CSSProperties}>
              <input
                type="text"
                required
                className="w-full h-full bg-transparent text-black text-base font-medium border-none outline-none border-b-2 border-black transition-all duration-500 pr-6 focus:border-b-2 focus:border-[#17a]"
              />
              <label className="absolute top-1/2 left-0 transform -translate-y-1/2 text-base text-black pointer-events-none transition-all duration-500">
                Username
              </label>
              <User className="absolute top-1/2 right-0 transform -translate-y-1/2 text-lg transition-all duration-500" />
            </div>

            <div className="input-box animation relative w-full h-12 my-6" style={{ '--i': '19', '--j': '2' } as React.CSSProperties}>
              <input
                type="email"
                required
                className="w-full h-full bg-transparent text-black text-base font-medium border-none outline-none border-b-2 border-black transition-all duration-500 pr-6 focus:border-b-2 focus:border-[#17a]"
              />
              <label className="absolute top-1/2 left-0 transform -translate-y-1/2 text-base text-black pointer-events-none transition-all duration-500">
                Email
              </label>
              <Mail className="absolute top-1/2 right-0 transform -translate-y-1/2 text-lg transition-all duration-500" />
            </div>

            <div className="input-box animation relative w-full h-12 my-6" style={{ '--i': '20', '--j': '3' } as React.CSSProperties}>
              <input
                type="password"
                required
                className="w-full h-full bg-transparent text-black text-base font-medium border-none outline-none border-b-2 border-black transition-all duration-500 pr-6 focus:border-b-2 focus:border-[#17a]"
              />
              <label className="absolute top-1/2 left-0 transform -translate-y-1/2 text-base text-black pointer-events-none transition-all duration-500">
                Password
              </label>
              <Lock className="absolute top-1/2 right-0 transform -translate-y-1/2 text-lg transition-all duration-500" />
            </div>

            <button
              type="submit"
              className="btn animation w-full h-11 bg-black text-white border-none outline-none rounded-full cursor-pointer text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-black/50"
              style={{ '--i': '21', '--j': '4' } as React.CSSProperties}
            >
              Sign Up
            </button>

            <div className="linkTxt animation text-sm text-black text-center my-5" style={{ '--i': '22', '--j': '5' } as React.CSSProperties}>
              <p>
                Already have an account?{' '}
                <a
                  href="#"
                  className="login-link text-blue-600 no-underline font-semibold cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsRegister(false)
                  }}
                >
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* Register Info Text */}
        <div className="info-text register absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center text-left pl-6 md:pl-10 pr-20 md:pr-36 pb-14 pointer-events-none">
          <h2 className="animation text-2xl md:text-4xl text-white leading-tight uppercase" style={{ '--i': '17', '--j': '0' } as React.CSSProperties}>
            Join CUIRANNA!
          </h2>
          <p className="animation text-sm md:text-base text-white mt-4" style={{ '--i': '18', '--j': '1' } as React.CSSProperties}>
            Create your account and start planning your next Moroccan adventure. Get exclusive deals and personalized travel recommendations.
          </p>
        </div>
      </div>

      <style jsx>{`
        .wrapper .form-box.login .animation {
          transform: translateX(0);
          transition: 0.7s ease;
          opacity: 1;
          filter: blur(0);
          transition-delay: calc(0.1s * var(--j));
        }

        .wrapper.active .form-box.login .animation {
          transform: translateX(-120%);
          opacity: 0;
          filter: blur(10px);
          transition-delay: calc(0.1s * var(--i));
        }

        .wrapper .info-text.login .animation {
          transform: translateX(0);
          opacity: 1;
          filter: blur(0);
          transition: 0.7s ease;
          transition-delay: calc(0.1s * var(--j));
        }

        .wrapper.active .info-text.login .animation {
          transform: translateX(120px);
          opacity: 0;
          filter: blur(10px);
          transition: 0.7s ease;
          transition-delay: calc(0.1s * var(--i));
        }

        .wrapper.active .rotate-bg {
          transform: rotate(0) skewY(0);
          transition-delay: 0.5s;
        }

        .wrapper .form-box.register {
          pointer-events: none;
        }

        .wrapper.active .form-box.register {
          pointer-events: auto;
        }

        .wrapper .form-box.register .animation {
          transform: translateX(120%);
          opacity: 0;
          filter: blur(10px);
          transition: 0.7s ease;
          transition-delay: calc(0.1s * var(--j));
        }

        .wrapper.active .form-box.register .animation {
          transform: translateX(0);
          opacity: 1;
          filter: blur(0);
          transition-delay: calc(0.1s * var(--i));
        }

        .wrapper.active .info-text.register {
          pointer-events: auto;
        }

        .wrapper .info-text.register .animation {
          transform: translateX(-120%);
          opacity: 0;
          filter: blur(10px);
          transition: 0.7s ease;
          transition-delay: calc(0.1s * var(--j));
        }

        .wrapper.active .info-text.register .animation {
          transform: translateX(0);
          opacity: 1;
          filter: blur(0);
          transition-delay: calc(0.1s * var(--i));
        }

        .wrapper.active .rotate-bg2 {
          transform: rotate(-11deg) skewY(-40deg);
          transition-delay: 1.2s;
        }

        .input-box input:focus ~ label,
        .input-box input:valid ~ label {
          top: -5px;
          color: #17a;
        }

        .input-box input:focus ~ svg,
        .input-box input:valid ~ svg {
          color: #17a;
        }
      `}</style>
    </div>
  )
}

