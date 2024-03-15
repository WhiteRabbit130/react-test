// import logo from '@assets/logo_login.svg';

import './style.css';

export default function Logo() {
    return (
        <a href="/" className=''>
            <div className="logo-div">
                {/* <img src={logo} alt="" /> */}
                <svg className="logo" fill="none" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg"><path d="M33.4014 13.086C33.1972 12.2329 32.922 11.3834 32.5756 10.5484C32.2292 9.7117 31.8227 8.9187 31.3633 8.16945C31.3177 8.09653 31.2266 8.06737 31.1464 8.10018L18.9105 13.1681C18.6936 13.2574 18.4438 13.1553 18.3545 12.9384L13.2884 0.702499C13.2556 0.622287 13.1699 0.578536 13.086 0.598589C12.2329 0.802763 11.3834 1.07803 10.5485 1.4244C9.7117 1.77077 8.9187 2.1773 8.16945 2.63669C8.09653 2.68226 8.06737 2.77341 8.10018 2.85362L13.1681 15.0895C14.446 18.1722 17.9808 19.636 21.0634 18.3599L33.2993 13.292C33.3777 13.2556 33.4215 13.1699 33.4014 13.086Z" fill="currentColor"></path><path d="M0.702499 20.7117C0.622287 20.7445 0.578536 20.8302 0.598589 20.9141C0.802763 21.7672 1.07803 22.6167 1.4244 23.4517C1.77077 24.2866 2.17729 25.0814 2.63669 25.8307C2.68226 25.9036 2.77341 25.9327 2.85362 25.8999L13.5509 21.4682L11.3998 16.28L0.702499 20.7117Z" fill="currentColor"></path><path d="M21.5192 20.573L16.3292 22.7223L20.7098 33.2974C20.7426 33.3777 20.8283 33.4214 20.9121 33.4014C21.7653 33.1972 22.6148 32.9219 23.4497 32.5755C24.2865 32.2292 25.0795 31.8227 25.8287 31.3633C25.9017 31.3177 25.9308 31.2265 25.898 31.1463L21.5192 20.573Z" fill="currentColor"></path></svg>
            </div>
        </a>
    )
}