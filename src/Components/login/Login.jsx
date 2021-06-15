import React from 'react'
import {Link} from 'react-router-dom'

export default function Login() {
    return (
        <div>
            <h1 class="display-6 text-center" style={{color:'black'}}>Login</h1>
            <form className='w-50 ml-auto mr-auto'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                <button component={Link} to={'/signup'} class="btn btn-primary ml-3">Sign Up</button>
            </form>
        </div>
    )
}
