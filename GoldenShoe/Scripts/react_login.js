const JSX = (
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-sm-5">
                <div class="jumbotron my-5 py-4 shadow">
                    <form action="/Account/Success">
                        <h1 class="font-weight-bold text-center mb-4">Login</h1>
                        <div class="form-group">
                            <label for="exampleInputEmail1"><h4>Email address</h4></label>
                            <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1"><h4>Password</h4></label>
                            <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"></input>
                        </div>
                        <button type="submit" value="Submit" class="btn btn-success btn-block btn-lg">Login</button>
                        <a href="#"><p class="text-center m-0 mt-1">Forgot Password?</p></a>
                        <hr></hr>
                        <h6 class="my-2">No account?</h6>
                        <button class="btn btn-danger btn-block btn-lg">Register</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

ReactDOM.render(JSX, document.getElementById('react_login_form'));