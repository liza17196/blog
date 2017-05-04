<nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
      <a class="navbar-brand" href="{{ url('/') }}">Blog</a>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
        @if(Auth::user())
          <li class="nav-item">
            <a class="nav-link" href="{{ url('/create') }}">Create a new topic</a>
          </li>
        @endif
        </ul>
        </div>
        @if(Auth::guest())
        <div>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="{{ url('/login') }}">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{ url('/register') }}">Register</a>
            </li>
          </ul>
        </div>
        @else
        <div>
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="{{ url('/profile') }}">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{ url('/setting/{id}') }}">Settings</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{ url('/logout') }}">Logout</a>
            </li>
          </ul>
        </div>
        @endif
    </nav>