<nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
      <a class="navbar-brand" href="{{ url('/') }}">Блог</a>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
        @if(Auth::user())
          <li class="nav-item">
            <a class="nav-link" href="{{ url('/create') }}">Создать тему</a>
          </li>
            @if(Auth::user()->hasRole('user admin'))
            <li class="nav-item">
              <a class="nav-link" href="{{ url('/new_section') }}">Создать раздел</a>
            </li>
            @endif
        @endif
        </ul>
        </div>
        @if(Auth::guest())
        <div>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="{{ url('/login') }}">Вход</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{ url('/register') }}">Регистрация</a>
            </li>
          </ul>
        </div>
        @else
        <div>
        <ul class="navbar-nav mr-auto">
            @if(Auth::user()->hasRole('user admin'))
            <li class="nav-item">
              <a class="nav-link" href="{{ url('/user_list') }}">Список пользователей</a>
            </li>
            @endif
            <li class="nav-item">
              <a class="nav-link" href="{{ url('/profile') }}">Профиль</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{ url('/setting/{id}') }}">Настройки</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{ url('/logout') }}">Выход</a>
            </li>
          </ul>
        </div>
        @endif
    </nav>